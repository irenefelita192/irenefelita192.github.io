// import paginationFactory from 'react-bootstrap-table2-paginator'
// import ToolkitProvider from 'react-bootstrap-table2-toolkit'
import React, { useState, useEffect, Suspense, lazy } from 'react'
import { useAsyncEffect } from 'use-async-effect'
// import { useParams, useHistory } from 'react-router-dom'
import BootstrapTable from 'react-bootstrap-table-next'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import _debounce from 'lodash/debounce'
import _size from 'lodash/size'
import _reduce from 'lodash/reduce'

import { getPartnerData } from '../../../services/partner'
// import { getCookie } from '../../../utils/global-util'

import PaginationPanel from '../../../components/extended-table/pagination-panel'
import PaginationSize from '../../../components/extended-table/pagination-size'
import PaginationTotal from '../../../components/extended-table/pagination-total'
import PaginationGoTo from '../../../components/extended-table/pagination-goto'
import Search from '../../../components/extended-table/search'
// // import Search from '@components/ExtendedTable/Search'
// import ButtonLoader from '@components/ButtonLoader'
// import Dropdown from '@components/Dropdown'

import styles from './styles.js'
import globalStyles from './global-styles'

export default function TablePartner({
    columns,
    pageSizes,
    searchOpt,
    textLang,
}) {
    const [partnerData, setPartnerData] = useState({})
    const {
        list: partnerList,
        flattenList: partnerFlatList,
        totalData,
        searchfieldDt,
        searchkeyDt,
    } = partnerData

    const [sizePerPage, setSizePerPage] = useState(
        pageSizes ? pageSizes[0].page : 10
    )
    const [totalPage, setTotalPage] = useState(null)
    const [pageIndex, setPageIndex] = useState(null)
    const [currPage, setCurrPage] = useState(1)
    const [goToPage, setGoToPage] = useState('')
    const [searchObj, setSearchObj] = useState(searchOpt ? searchOpt[0] : null)
    const originalSource = '/hospitals/partner'

    useAsyncEffect(async (isMounted) => {
        const data = await getDataList({ limit: 10, page: 1 })

        if (!isMounted()) return

        setPartnerData(data)
    }, [])

    useEffect(() => {
        if (partnerData) {
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
        limit = sizePerPage,
        page = currPage,
        source = searchObj?.source ?? originalSource,
        param = searchObj?.param ?? '',
        searchkey = searchObj?.key ?? '',
        searchfield = searchObj?.field ?? '',
    }) => {
        setPartnerData({})
        const partnerData = await getPartnerData({
            limit,
            page,
            sort: 'asc',
            source: param ? source : originalSource,
            param,
            searchkey,
            searchfield,
        })
        return partnerData
    }

    const onSearch = async (value, opt = null) => {
        setCurrPage(1)
        const selOpt = opt || searchObj

        setGoToPage('')
        if (selOpt && selOpt.master) {
            const data = await getDataList({
                page: 1,
                source: value ? selOpt.dataSource : originalSource,
                param: value,
                searchfield: '',
                key: '',
            })

            setSearchObj({
                ...selOpt,
                source: selOpt.dataSource,
                param: value,
                field: '',
                key: '',
            })
            setPartnerData(data)
        } else {
            processSearch(value, selOpt)
        }
    }

    const onSelectSearch = (opt) => {
        setSearchObj(opt)
    }

    const processSearch = _debounce(async (value, opt) => {
        // console.log('key:', key, ' field:', field)
        setSearchObj({
            ...searchObj,
            source: originalSource,
            param: '',
            field: opt.id,
            key: value,
        })
        const data = await getDataList({
            page: 1,
            searchfield: opt.id,
            searchkey: value,
            param: '',
        })

        setPartnerData(data)
    }, 500)

    const onPageChange = async (page) => {
        //click page navigation
        // console.log('page', page)
        // console.log('onPageChange search', searchObj)
        const currentPage = page.selected + 1
        setCurrPage(currentPage)
        setGoToPage('')
        const data = await getDataList({
            page: currentPage,
        })
        setPartnerData(data)
    }

    const onSizePerPageChange = async (sizePerPage) => {
        /* GET ULANG DATA */
        /* SET DARI PAGE 1 LAGI */
        setSizePerPage(sizePerPage)
        setCurrPage(1)
        setGoToPage('')
        const data = await getDataList({
            limit: sizePerPage,
            page: 1,
        })
        setPartnerData(data)
    }

    const onGoToClick = async (pageNumber) => {
        if (pageNumber && pageNumber <= totalPage) {
            setCurrPage(pageNumber)
            setGoToPage(pageNumber)
            const data = await getDataList({
                page: pageNumber,
            })
            setPartnerData(data)
        }
    }

    const handleNoData = () => {
        if (partnerData.totalData == 0) {
            return (
                <span style={{ fontWeight: 'normal' }}>
                    {textLang['noData']}
                </span>
            )
        }
        return (
            <span style={{ fontWeight: 'normal' }}>
                <i>{textLang['loading']}</i>
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
                        value={goToPage}
                    />
                    <Search
                        onSelect={onSelectSearch}
                        onSearch={onSearch}
                        options={searchOpt}
                        isDesktop={true}
                    />
                </div>
                <BootstrapTable
                    keyField="id"
                    // data={[]}
                    noDataIndication={handleNoData}
                    data={partnerFlatList || []}
                    columns={columns}
                />
                <div className={'table-notes'}>{textLang['notes']}</div>

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
