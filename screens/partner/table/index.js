// import paginationFactory from 'react-bootstrap-table2-paginator'
// import ToolkitProvider from 'react-bootstrap-table2-toolkit'
import React, { useState, useEffect, Suspense, lazy } from 'react'
import { useAsyncEffect } from 'use-async-effect'
// import { useParams, useHistory } from 'react-router-dom'
import BootstrapTable from 'react-bootstrap-table-next'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import _debounce from 'lodash/debounce'

import _reduce from 'lodash/reduce'
import { getProviderList } from 'services/partner'
import PaginationPanel from '../../../components/extended-table/pagination-panel'
import PaginationSize from '../../../components/extended-table/pagination-size'
import PaginationTotal from '../../../components/extended-table/pagination-total'
import PaginationGoTo from '../../../components/extended-table/pagination-goto'
import AXASearch from '../../../components/axa-search'

import styles from './styles.js'
import globalStyles from './global-styles'

const LIMIT = 100
export default function TablePartner({
    columns,
    pageSizes,
    searchOpt,
    textLang,
    userPosition,
    sessionToken,
}) {
    const [partnerData, setPartnerData] = useState({})
    const [dataSliced, setDataSliced] = useState(null)
    const {
        list: partnerList,
        flattenList: partnerFlatList,
        totalData,
        offsetFrom,
        providerTypeList,
        specialitiesList,
    } = partnerData

    const [sizePerPage, setSizePerPage] = useState(
        pageSizes ? pageSizes[0].page : 10
    )
    const [totalPage, setTotalPage] = useState(null)
    const [pageIndex, setPageIndex] = useState(null)
    const [currPage, setCurrPage] = useState(1)
    const [gotoPage, setGotoPage] = useState()
    const [searchInitData, setSearchInitData] = useState()
    const [tableCol, setTableCol] = useState(null)

    const [selectedOpt, setSelectedOpt] = useState(
        searchOpt ? searchOpt[0] : null
    )
    const [searchObj, setSearchObj] = useState({
        [searchOpt ? searchOpt[0].id : '']: '',
    })
    // const [, setCurrPage] = useState(1)

    function linkFormatter(cell, row, rowIndex, formatExtraData) {
        return (
            <a href={cell} target="_blank">
                {formatExtraData.linkText}
            </a>
        )
    }

    function langFormatter(cell) {
        return textLang[cell] || cell
    }

    useEffect(() => {
        //disini nanti ambil dari cms untuk toggle pakai apinya yg mana
        //check lg perlu toggle atau pisah cms
        if (columns) {
            columns.map((col) => {
                if (col.fieldFormat === 'link') {
                    col.formatter = linkFormatter
                }

                if (col.fieldFormat === 'lang') {
                    col.formatter = langFormatter
                }
                return col
            })
            setTableCol(columns)
        }
    }, [])

    useAsyncEffect(
        async (isMounted) => {
            if (userPosition) {
                const data = await getDataList({ limit: 10, page: 1 })

                if (!isMounted()) return

                setPartnerData(data)
            }
        },
        [userPosition]
    )

    const initSearchList = (opt) => {
        let searchInitDt = null

        if (opt && opt.id == 'specialities') {
            searchInitDt =
                specialitiesList &&
                specialitiesList.map((dt) => ({
                    ...dt,
                    value: dt.label,
                }))
        } else if (opt && opt.id == 'providerType') {
            searchInitDt =
                providerTypeList &&
                providerTypeList.map((dt) => ({
                    ...dt,
                    label: textLang[dt.label] || dt.label,
                }))
        }
        setSearchInitData(searchInitDt)
    }

    useEffect(() => {
        if (partnerData) {
            sliceDataPerPage(currPage, sizePerPage)
            if (!searchInitData) initSearchList(selectedOpt)

            const totalPage = Math.ceil(totalData / sizePerPage)
            setTotalPage(totalPage)
            setPageIndex(getPageIndex(totalData, sizePerPage, currPage))
        }
    }, [partnerData])

    const getPageIndex = (totalData, sizePerPage, activePage = 1) => {
        const startPage = (activePage - 1) * sizePerPage + 1
        let endPage = activePage * sizePerPage
        endPage = endPage > totalData ? totalData : endPage

        return { startPage, endPage }
    }

    const getDataList = async ({
        limit_page = sizePerPage,
        page = currPage,
        country = 'Indonesia',
        searchValue = searchObj[selectedOpt?.id ?? ''] || '',
        selectedOption = selectedOpt,
    }) => {
        let searchVal = searchValue,
            lat = userPosition.lat,
            lng = userPosition.long
        if (searchVal) {
            if (selectedOption.id == 'specialities') {
                searchVal = ''
                searchValue &&
                    searchValue.map((val, index) => {
                        searchVal += index == 0 ? val.value : `,${val.value}`
                    })
            } else if (selectedOption.id == 'location') {
                lat = searchVal?.lat ?? userPosition.lat
                lng = searchVal?.lng ?? userPosition.long
            }
        }
        setDataSliced(null)
        const partnerDt = await getProviderList({
            offset: Math.floor((page - 1) / (LIMIT / limit_page)) * LIMIT,
            latitude: lat,
            longitude: lng,
            providerName: selectedOption.id == 'name' ? searchVal : '',
            providerType:
                selectedOption.id == 'providerType' ? searchVal.value : '',
            specialities: selectedOption.id == 'specialities' ? searchVal : '',
            country,
        })

        return partnerDt
    }

    const onSelectSearch = (opt) => {
        setSearchObj({ [opt.id]: '' })
        setSelectedOpt(opt)
        initSearchList(opt)
    }

    const onSearch = async (value, opt = null, country) => {
        setCurrPage(1)
        setSearchObj({ [opt.id]: value })
        processSearch(value, opt, country)
    }

    const processSearch = _debounce(async (value, opt, country) => {
        let searchVal = value,
            lat = userPosition.lat,
            lng = userPosition.long
        if (opt.id == 'specialities') {
            searchVal = ''
            value &&
                value.map((val, index) => {
                    searchVal += index == 0 ? val.value : `,${val.value}`
                })
        } else if (opt.id == 'location') {
            lat = searchVal?.lat ?? userPosition.lat
            lng = searchVal?.lng ?? userPosition.long
        }

        const data = await getDataList({
            page: 1,
            country,
            searchValue: value,
            selectedOption: opt,
        })
        setPartnerData(data)
    }, 500)

    const sliceDataPerPage = (currentPage, sizePerPage) => {
        // console.log('partnerFlatList', partnerFlatList)
        if (partnerFlatList && partnerFlatList.length > 0) {
            let calcCurrentPage = currentPage

            if (currentPage * sizePerPage > LIMIT) {
                calcCurrentPage = currentPage % (LIMIT / sizePerPage)
                /* example
                    currentPage = 14, sizePerPage = 10
                    calcCurrentPage = 4
                */
                if (calcCurrentPage == 0) {
                    calcCurrentPage = LIMIT / sizePerPage
                    /* example
                    currentPage = 30, sizePerPage = 10
                    calcCurrentPage = LIMIT / sizePerPage = 10

                    currentPage = 4, sizePerPage = 50
                    calcCurrentPage = LIMIT / sizePerPage = 2
                    */
                }
            }

            let sliceEnd = calcCurrentPage * sizePerPage
            if (partnerFlatList.length < calcCurrentPage * sizePerPage) {
                sliceEnd = partnerFlatList.length
            }
            const dtSliced = partnerFlatList.slice(
                (calcCurrentPage - 1) * sizePerPage,
                sliceEnd
            )

            setDataSliced(dtSliced)
        } else {
            setDataSliced(null)
        }
    }

    const getCurrentOffsetFrom = (currentPage, sizePerPage) => {
        return Math.floor(currentPage / (LIMIT / sizePerPage)) * LIMIT + 1
    }

    const onPageChange = async (page) => {
        //click page navigation
        const currentPage = page.selected + 1
        setCurrPage(currentPage)
        setPageIndex(getPageIndex(totalData, sizePerPage, currentPage))
        const divCurrPage =
            currentPage % (LIMIT / sizePerPage) == 0
                ? currentPage - 1
                : currentPage
        const currPageOffsetFrom = getCurrentOffsetFrom(
            divCurrPage,
            sizePerPage
        )
        if (currPageOffsetFrom !== offsetFrom) {
            const data = await getDataList({
                page: currentPage,
            })
            setPartnerData(data)
        } else {
            sliceDataPerPage(currentPage, sizePerPage)
        }
    }

    const onGoToClick = async (pageNumber) => {
        if (pageNumber <= totalPage) {
            setCurrPage(pageNumber)
            setPageIndex(getPageIndex(totalData, sizePerPage, pageNumber))
            const divCurrPage =
                pageNumber % (LIMIT / sizePerPage) == 0
                    ? pageNumber - 1
                    : pageNumber
            const currPageOffsetFrom = getCurrentOffsetFrom(
                divCurrPage,
                sizePerPage
            )

            if (currPageOffsetFrom !== offsetFrom) {
                const data = await getDataList({
                    page: pageNumber,
                })
                setPartnerData(data)
            } else {
                sliceDataPerPage(pageNumber, sizePerPage)
            }
        }
    }

    const onSizePerPageChange = async (sizePerPage) => {
        /* GET ULANG DATA */
        /* SET DARI PAGE 1 LAGI */
        setSizePerPage(sizePerPage)
        setCurrPage(1)
        setGotoPage('')
        const data = await getDataList({
            limit: sizePerPage,
            page: 1,
        })
        setPartnerData(data)
    }

    const handleNoData = () => {
        if (partnerData.totalData == 0) {
            return (
                <span style={{ fontWeight: 'normal' }}>
                    {' '}
                    {textLang['noData']}
                </span>
            )
        }
        return (
            <span style={{ fontWeight: 'normal' }}>
                <i> {textLang['loading']}</i>
            </span>
        )
    }

    return (
        <>
            <div className="wrapper">
                <div className="top-table-wrapper">
                    <PaginationSize
                        onSizePerPageChange={onSizePerPageChange}
                        currSizePerPage={sizePerPage}
                        options={pageSizes}
                        className={styles['spp-btn']}
                        isDesktop={true}
                        textLang={textLang}
                    />
                    <PaginationGoTo
                        onClick={onGoToClick}
                        isDesktop={true}
                        textLang={textLang}
                        value={gotoPage}
                    />
                    <AXASearch
                        onSelect={onSelectSearch}
                        onSearch={onSearch}
                        options={searchOpt}
                        initialData={searchInitData}
                        isDesktop={true}
                        sessionToken={sessionToken}
                        textLang={textLang}
                    />
                </div>
                {tableCol && (
                    <BootstrapTable
                        keyField="providerId"
                        noDataIndication={handleNoData}
                        data={dataSliced || []}
                        columns={tableCol}
                    />
                )}

                {partnerFlatList && partnerFlatList.length > 0 && (
                    <div className={`pagination-wrapper`}>
                        <PaginationTotal
                            from={pageIndex?.startPage ?? 0}
                            to={pageIndex?.endPage ?? 0}
                            size={totalData}
                            isDesktop={true}
                            textLang={textLang}
                        />
                        {totalPage > 0 && (
                            <PaginationPanel
                                onPageChange={onPageChange}
                                totalPage={totalPage}
                                currentPage={currPage}
                                isDesktop={true}
                                textLang={textLang}
                            />
                        )}
                    </div>
                )}
            </div>

            <style jsx>{styles}</style>
            <style jsx global>
                {globalStyles}
            </style>
        </>
    )
}
