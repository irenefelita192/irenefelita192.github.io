/* eslint-disable import/prefer-default-export */

import { get } from 'axios'

const endpoints = process.env.config?.beEndpoint ?? ''

const flattenObject = (ob) => {
    var toReturn = {}

    for (var i in ob) {
        if (!ob.hasOwnProperty(i)) continue

        if (typeof ob[i] == 'object' && ob[i] !== null) {
            var flatObject = flattenObject(ob[i])
            for (var x in flatObject) {
                if (!flatObject.hasOwnProperty(x)) continue

                toReturn[i + '.' + x] = flatObject[x]
            }
        } else {
            toReturn[i] = ob[i]
        }
    }
    return toReturn
}

const getDataCount = async ({ qsSearch }) => {
    const qsSearchFinal = qsSearch ? `&${qsSearch}` : ''
    const response = await get(
        `${endpoints}/hospitals?getcount=true${qsSearchFinal}`
    ).catch(function (error) {
        console.error(error)
    })
    return response?.data?.count ?? null
}

export const getPartnerData = async ({
    limit,
    page,
    searchfield = '',
    searchkey = '',
    sort,
}) => {
    const offset = (page - 1) * limit,
        qsPaging = `?limit=${limit}&offset=${offset}`,
        qsSearch = ''
    // qsSearch =
    //     searchfield && searchkey
    //         ? `searchfield=${searchfield}&searchkey=${searchkey}`
    //         : '',
    // qsSearchFinal = qsSearch ? `${qsPaging ? '&' : '?'}${qsSearch}` : '',

    const totalData = await getDataCount({
        qsSearch,
    })

    const response = await get(
        `${endpoints}/hospitals${qsPaging}&sort=${sort}`
    ).catch(function (error) {
        console.error(error)
    })
    let flattenList = []
    response &&
        response.data &&
        response.data.map((dt) => {
            flattenList.push(flattenObject(dt))
        })

    const data = {
        flattenList,
        list: response?.data ?? null,
        totalData,
    }

    return data
}

// const getDataListBySearch =
//     ({ slug, param }) =>
//     async (dispatch) => {
//         dispatch({
//             type: types.GET_DATA_LIST_LOADING,
//             payload: {
//                 meta: {
//                     status: 'loading',
//                     error: '',
//                 },
//                 data: [],
//             },
//         })

//         const at = getUserData().accessToken

//         const cleanSlug = slug.indexOf('/') == 0 ? slug.substring(1) : slug
//         return get(
//             `${config.baseEndpoint}/${cleanSlug}${param ? `/${param}` : ''}`,
//             {
//                 headers: { Authorization: `Bearer ${at}` },
//             }
//         )
//             .then(async (result) => {
//                 if (result.data) {
//                     let data = []
//                     if (result.data.length > 0) {
//                         result.data.map((dt, i) => {
//                             if (!dt.id) {
//                                 dt.id = i + 1
//                                 dt.clickable = false
//                             } else {
//                                 dt.clickable = true
//                             }
//                             for (const props in dt) {
//                                 if (Array.isArray(dt[props])) {
//                                     let val = ''

//                                     if (dt[props] && dt[props].length > 0) {
//                                         val = JSON.stringify(dt[props])
//                                     }

//                                     dt[`${props}String`] = val
//                                 }
//                             }
//                         })
//                         data = [...result.data]
//                     } else {
//                         if (result.data.id) {
//                             result.data.clickable = true
//                         } else {
//                             result.data.id = 1
//                             result.data.clickable = false
//                         }
//                         for (const props in result.data) {
//                             if (Array.isArray(result.data[props])) {
//                                 let val = ''

//                                 if (
//                                     result.data[props] &&
//                                     result.data[props].length > 0
//                                 ) {
//                                     val = JSON.stringify(result.data[props])
//                                 }

//                                 result.data[`${props}String`] = val
//                             }
//                         }

//                         data = [{ ...result.data }]
//                     }

//                     const payload = {
//                         meta: {
//                             status: 'success',
//                             totalData: 1,
//                         },
//                         data: data,
//                     }

//                     dispatch({
//                         type: types.GET_DATA_LIST_SUCCESS,
//                         payload,
//                     })
//                 } else {
//                     const payload = {
//                         meta: {
//                             status:
//                                 result?.status ?? '' == 204
//                                     ? 'no-content'
//                                     : 'error',
//                             error: 'Error: Get list error',
//                         },
//                         data: [],
//                     }
//                     dispatch({
//                         type: types.GET_DATA_LIST_ERROR,
//                         payload,
//                     })
//                 }
//             })
//             .catch((error) => {
//                 const payload = {
//                     meta: {
//                         status: 'error',
//                         error: 'Error: Get list error',
//                     },
//                     data: [],
//                 }
//                 dispatch({
//                     type: types.GET_DATA_LIST_ERROR,
//                     payload,
//                 })
//             })
//     }
