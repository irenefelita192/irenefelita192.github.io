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

export default function TablePartner({}) {
    //dari cms api
    const sizePerPageOptions = [
        { id: 1, page: 10, text: '10' },
        { id: 2, page: 25, text: '25' },
        { id: 3, page: 50, text: '50' },
    ]

    const [partnerData, setPartnerData] = useState({})
    const {
        list: partnerList,
        flattenList: partnerFlatList,
        totalData,
    } = partnerData
    const [isMobile, setIsMobile] = useState(false)
    // const [totalData, setTotalData] = useState(0)
    const [sizePerPage, setSizePerPage] = useState(10)
    const [totalPage, setTotalPage] = useState(null)
    const [pageIndex, setPageIndex] = useState(null)
    const [currPage, setCurrPage] = useState(1)

    const [schemaAttrs, setSchemaAttrs] = useState(null)
    const [attrId, setAttrId] = useState(null)
    const [searchList, setSearchList] = useState(null)
    const [searchObj, setSearchObj] = useState(null)

    const [filterDate, setFilterDate] = useState([null, null])

    useAsyncEffect(async (isMounted) => {
        let langId
        if (window) {
            langId = getCookie('lang')
        }
        const data = await getDataList({ limit: 10, page: 1 })
        console.log('data', data)
        if (!isMounted()) return

        setPartnerData(data)
    }, [])

    useEffect(() => {
        if (partnerData) {
            const totalPage = Math.ceil(totalData / sizePerPage)
            setTotalPage(totalPage)
            // setPageIndex(getPageIndex(totalData, sizePerPage, currPage))
        }
    }, [partnerData])

    const getPageIndex = (totalData, sizePerPage, activePage = 1) => {
        const startPage = (activePage - 1) * sizePerPage + 1
        let endPage = activePage * sizePerPage
        endPage = endPage > totalData ? totalData : endPage

        return { startPage, endPage }
    }

    // useEffect(() => {
    //     if (dataList.meta.status === 'loading') {
    //         /* replace no content placeholder into loading placeholder */
    //         const noData = document.querySelector('.react-bs-table-no-data'),
    //             container = document.querySelector('.react-bs-table-container'),
    //             body = document.querySelector('.react-bs-container-body')

    //         let bodyWidth = container?.offsetWidth

    //         if (body) {
    //             body.scrollLeft = 0
    //         }

    //         if (noData) {
    //             noData.style.display = 'flex'
    //             noData.style.alignItems = 'center'
    //             noData.style.justifyContent = 'center'
    //             noData.style.width = `${bodyWidth}px`
    //             noData.style.overflow = 'initial'
    //             noData.innerHTML = `<div id="table-loader">loading...</div>`
    //         }
    //     }
    //     if (
    //         dataList.meta.status === 'no-content' ||
    //         dataList.meta.status === 'error'
    //     ) {
    //         const tablePlaceholder = document.getElementById('table-loader')
    //         if (tablePlaceholder) {
    //             tablePlaceholder.innerHTML = 'There is no data to display'
    //         }
    //     }
    //     if (dataList.meta.status === 'success') {
    //         // setUsers(dataList.data)
    //         // document.getElementById('table-loader').style.display = 'none'
    //         const totalData = dataList.meta.totalData

    //         const totalPage = Math.ceil(totalData / sizePerPage)
    //         setTotalData(totalData)
    //         setTotalPage(totalPage)
    //         setPageIndex(getPageIndex(totalData, sizePerPage, currPage))
    //     }
    // }, [dataList])

    const getDataList = async ({
        limit = sizePerPage,
        page = currPage,
        // searchkey = searchObj?.key ?? '',
        // searchfield = searchObj?.field ?? '',
    }) => {
        const partnerData = await getPartnerData({ limit, page, sort: 'asc' })
        return partnerData
    }

    // useEffect(() => {
    //     if (!activeSchema) return

    //     moduleId = getModuleId({ activeSchema })
    //     const schAttr = getSchemaAttributes({
    //         activeSchema,
    //         withObject: true,
    //         removeParentArray: true,
    //         method: 'get-all',
    //     })

    //     const searchAttr = schAttr.filter((attr) => attr.index)

    //     const status = getAllStatus({ activeSchema }) || false
    //     setAllStatus(status)

    //     const schAttrId =
    //         schAttr && schAttr.find((atr) => atr.dataField == 'id' || atr.asId)

    //     setSchemaAttrs(schAttr)
    //     setSearchList(searchAttr)
    //     setAttrId(schAttrId)

    //     getDataList({
    //         sort: sortVal,
    //         allstatus: status,
    //     })

    //     if (window) {
    //         setIsMobile(window.innerWidth <= 640)
    //     }
    //     return () => {
    //         setSchemaAttrs(null)
    //         setSearchList(null)
    //         setAttrId(null)
    //         setSortVal('asc')
    //         setAllStatus(null)
    //     }
    // }, [])

    // const searchSourceList = useSelector((state) => state.sourceList)
    // console.log('searchSourceList', searchSourceList)
    // const onDropdownChange = (selectedAttr) => {
    //     if (selectedAttr.indexMaster) {
    //         console.log('selectedAttr.indexMaster', selectedAttr.indexMaster)
    //         import(`@actions/sourceList`)
    //             .then((action) => {
    //                 dispatch(
    //                     action.default.getSourceList({
    //                         sourcePath: selectedAttr.indexMaster,
    //                         sourceParam: null,
    //                     })
    //                 )
    //             })
    //             .catch((err) => {})
    //     }
    // }

    const onSearch = (value, selectedAttr) => {
        if (selectedAttr.indexDataSource) {
            if (value) {
                processSearchFromSource(
                    value,
                    selectedAttr.indexName,
                    selectedAttr.indexDataSource
                )
            }
        } else {
            processSearch(value, selectedAttr.indexName)
        }
    }

    const processSearchFromSource = _debounce((key, field, indexDataSource) => {
        // console.log('key:', key, ' field:', field)
        const srcObj = {}
        srcObj.key = key
        srcObj.field = field
        setSearchObj(srcObj)
        setCurrPage(1)
        dispatch(
            action.getDataListBySearch({
                slug: indexDataSource,
                param: key,
            })
        )
    }, 500)

    const processSearch = _debounce((key, field) => {
        // console.log('key:', key, ' field:', field)
        const srcObj = {}
        srcObj.key = key
        srcObj.field = field
        setSearchObj(srcObj)
        setCurrPage(1)
        getDataList({
            page: 1,
            searchfield: field,
            searchkey: key,
        })
    }, 500)

    const onPageChange = (page) => {
        //click page navigation
        // console.log('page', page)
        // console.log('onPageChange search', searchObj)
        const currentPage = page.selected + 1
        setCurrPage(currentPage)
        getDataList({
            page: currentPage,
        })
    }

    const onSizePerPageChange = (sizePerPage) => {
        /* GET ULANG CUSTOMER */
        /* SET DARI PAGE 1 LAGI */
        // console.log('onSizePerPageChange search', searchObj)
        setSizePerPage(sizePerPage)
        setCurrPage(1)
        getDataList({
            page: 1,
        })
    }

    // const handleApplyAttrField = (checkedItems) => {
    //     const filteredAttrs =
    //         schemaAttrs &&
    //         schemaAttrs.map((attr) => {
    //             if (attr.type !== 'object') {
    //                 if (checkedItems[attr.dataField]) attr.isShown = true
    //                 else attr.isShown = false
    //             }

    //             return attr
    //         })

    //     setSchemaAttrs(filteredAttrs)
    // }
    // const pageTitle = activeSchema.name ? getTitleCase(activeSchema.name) : ''

    // const handleClickSort = (attr, opt) => {
    //     const val = opt?.value ?? 'asc'
    //     setSortVal(val)
    //     setCurrPage(1)
    //     getDataList({
    //         page: 1,
    //         sort: val,
    //     })
    // }

    // const handleFilterDate = (startdate, enddate) => {
    //     setFilterDate([startdate, enddate])
    //     setCurrPage(1)
    //     getDataList({
    //         page: 1,
    //         startdate,
    //         enddate,
    //     })
    // }

    //ini nanti dari strapi
    const columns = [
        {
            dataField: 'id',
            text: 'Partner Id',
            hidden: true,
        },
        {
            dataField: 'name',
            text: 'Name',
        },
        //nanti ganti subdivision
        {
            dataField: 'address.city.name',
            text: 'Province',
        },
        {
            dataField: 'address.street',
            text: 'Address',
        },
        {
            dataField: 'phoneNumber',
            text: 'Phone',
        },
        {
            dataField: 'address.district.name',
            text: 'Email',
        },
        //belum ada
        // {
        //     dataField: 'email',
        //     text: 'Email',
        // },
    ]

    const onGoToClick = (pageNumber) => {
        console.log('pageNumber', pageNumber)
    }

    return (
        <>
            <div className="wrapper">
                <div className="top-table-wrapper">
                    <PaginationSize
                        onSizePerPageChange={onSizePerPageChange}
                        currSizePerPage={sizePerPage}
                        options={sizePerPageOptions}
                        className={styles['spp-btn']}
                        isDesktop={true}
                    />
                    <PaginationGoTo onClick={onGoToClick} />
                    <Search placeholder={'"siloam jakarta"'} />
                </div>
                {partnerFlatList && (
                    <BootstrapTable
                        keyField="id"
                        data={partnerFlatList}
                        columns={columns}
                    />
                )}
                {partnerFlatList && (
                    <div className={`pagination-wrapper`}>
                        <PaginationTotal
                            from={1}
                            to={10}
                            size={700}
                            // from={pageIndex?.startPage ?? 0}
                            // to={pageIndex?.endPage ?? 0}
                            // size={totalData}
                        />
                        {totalPage > 0 && (
                            <PaginationPanel
                                // onPageChange={onPageChange}
                                totalPage={700}
                                currentPage={1}
                                size="sm"
                                className="ml-md-auto mt-2 mt-md-0"
                            />
                        )}
                    </div>
                )}
                {/* <BootstrapTable
                    containerClass={styles['table-wrapper']}
                    classes="table-responsive-lg"
                    data={
                        dataList.meta.status === 'success'
                            ? dataList.flatData
                            : []
                    }
                    bordered={true}
                    responsive
                    hover
                    scrollX
                    options={rowEvents}
                >
                    {createColumnDefinitions()}
                </BootstrapTable>
                {dataList.meta.status === 'success' && (
                    <div className={`row ${styles['pagination-wrapper']}`}>
                        <div className="col-md-6 col-xs-6 col-sm-6 col-lg-6">
                            <SizePerPageButton
                                onSizePerPageChange={onSizePerPageChange}
                                currSizePerPage={sizePerPage}
                                options={sizePerPageOptions}
                                className={styles['spp-btn']}
                            />
                            <PaginationTotal
                                from={pageIndex?.startPage ?? 0}
                                to={pageIndex?.endPage ?? 0}
                                size={totalData}
                            />
                        </div>
                        {totalPage > 0 && (
                            <PaginationPanel
                                onPageChange={onPageChange}
                                totalPage={totalPage}
                                currentPage={currPage}
                                size="sm"
                                className="ml-md-auto mt-2 mt-md-0"
                            />
                        )}
                    </div>
                )} */}
            </div>

            <style jsx>{styles}</style>
            <style jsx global>
                {globalStyles}
            </style>
        </>
    )
}
