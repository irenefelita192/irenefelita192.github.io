// import paginationFactory from 'react-bootstrap-table2-paginator'
// import ToolkitProvider from 'react-bootstrap-table2-toolkit'
import React, { useState, useEffect, Suspense, lazy } from 'react'
import { useAsyncEffect } from 'use-async-effect'
// import { useParams, useHistory } from 'react-router-dom'

import _debounce from 'lodash/debounce'
import _size from 'lodash/size'
import _reduce from 'lodash/reduce'

import { getPartnerData } from '../../../services/partner'
import { getCookie } from '../../../utils/global-util'

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

let moduleId = ''

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
    } = partnerData

    const [sizePerPage, setSizePerPage] = useState(
        pageSizes ? pageSizes[0].page : 10
    )
    const [totalPage, setTotalPage] = useState(null)
    const [pageIndex, setPageIndex] = useState(null)
    const [currPage, setCurrPage] = useState(1)
    const [searchObj, setSearchObj] = useState(searchOpt ? searchOpt[0] : null)

    useAsyncEffect(async (isMounted) => {
        let langId
        if (window) {
            langId = getCookie('lang')
        }
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
        source = searchObj?.source ?? '/hospitals',
        param = searchObj?.param ?? '',
        searchkey = searchObj?.key ?? '',
        searchfield = searchObj?.field ?? '',
    }) => {
        const partnerData = await getPartnerData({
            limit,
            page,
            sort: 'asc',
            source: param ? source : '/hospitals',
            param,
            searchkey,
            searchfield,
        })
        return partnerData
    }
    const onSearch = async (value, opt = null) => {
        setCurrPage(1)
        const selOpt = opt || searchObj
        if (selOpt && selOpt.master) {
            const data = await getDataList({
                page: 1,
                source: value ? selOpt.dataSource : '/hospitals',
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
            processSearch(value)
        }
    }

    const onSelectSearch = (opt) => {
        setSearchObj(opt)
    }

    const processSearch = _debounce(async (value) => {
        // console.log('key:', key, ' field:', field)
        const data = await getDataList({
            page: 1,
            searchfield: searchObj.id,
            searchkey: value,
            param: '',
        })
        setSearchObj({
            ...searchObj,
            source: '/hospitals',
            param: '',
            field: searchObj.id,
            key: value,
        })
        setPartnerData(data)
    }, 500)

    const onPageChange = async (page) => {
        //click page navigation
        // console.log('page', page)
        // console.log('onPageChange search', searchObj)
        const currentPage = page.selected + 1
        setCurrPage(currentPage)
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
        const data = await getDataList({
            limit: sizePerPage,
            page: 1,
        })
        setPartnerData(data)
    }

    const onGoToClick = async (pageNumber) => {
        if (pageNumber && pageNumber <= totalPage) {
            setCurrPage(pageNumber)
            const data = await getDataList({
                page: pageNumber,
            })
            setPartnerData(data)
        }
    }

    const renderTableList = () => {
        return (
            partnerFlatList &&
            partnerFlatList.map((dt) => {
                return (
                    <div className="table-item" key={dt.id}>
                        <div className="table-header">{dt.name}</div>
                        {columns &&
                            columns.map((col) => {
                                if (!col.isDesktopOnly) {
                                    return (
                                        <div
                                            key={col.dataField}
                                            className="table-row"
                                        >
                                            <div className="table-head">
                                                {col.text}
                                            </div>
                                            {col.canScroll && (
                                                <div className="table-data can-scroll">
                                                    <div>
                                                        {dt[col.dataField]}
                                                    </div>
                                                </div>
                                            )}
                                            {!col.canScroll && (
                                                <div className="table-data">
                                                    {dt[col.dataField]}
                                                </div>
                                            )}
                                        </div>
                                    )
                                }
                            })}
                        <style jsx>{styles}</style>
                    </div>
                )
            })
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
                        isDesktop={false}
                        textLang={textLang}
                    />
                    <PaginationGoTo
                        onClick={onGoToClick}
                        isDesktop={false}
                        textLang={textLang}
                    />
                    <Search
                        onSelect={onSelectSearch}
                        onSearch={onSearch}
                        options={searchOpt}
                        isDesktop={false}
                    />
                </div>
                {partnerFlatList && (
                    <div className="table-wrapper">{renderTableList()}</div>
                )}
                {partnerFlatList && (
                    <div className={`pagination-wrapper`}>
                        <PaginationTotal
                            from={pageIndex?.startPage ?? 0}
                            to={pageIndex?.endPage ?? 0}
                            size={totalData}
                            textLang={textLang}
                        />
                        {totalPage > 0 && (
                            <PaginationPanel
                                onPageChange={onPageChange}
                                totalPage={totalPage}
                                currentPage={currPage}
                                isDesktop={false}
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
