/* eslint-disable import/prefer-default-export */

import { get } from 'axios'

const endpoints = process.env.config?.beEndpoint ?? '',
    cmsEndpoints = process.env.config?.baseEndpoint ?? '',
    defaultLang = process.env.config?.defaultLang ?? 'id'

export const getPartnerCMS = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : `?_locale=${defaultLang}`
    const response = await get(`${cmsEndpoints}/vida-partner${locQs}`).catch(
        function (error) {
            console.error(error)
        }
    )
    return response ? response.data : null
}

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

const getDataCount = async ({ qsSearch, qsSource }) => {
    const qsSearchFinal = qsSearch ? `&${qsSearch}` : ''
    const response = await get(
        `${endpoints}${qsSource}?getcount=true${qsSearchFinal}`
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
    source = '/hospitals',
    param,
}) => {
    const offset = (page - 1) * limit,
        qsPaging = `?limit=${limit}&offset=${offset}`,
        qsSearch =
            searchfield && searchkey
                ? `&searchfield=${searchfield}&searchkey=${searchkey}`
                : '',
        qsParam = param ? `/${param}` : '',
        qsSource = source ? `${source}${qsParam}` : ''
    // qsSearchFinal = qsSearch ? `${qsPaging ? '&' : '?'}${qsSearch}` : '',

    const totalData = await getDataCount({
        qsSearch,
        qsSource,
    })

    const response = await get(
        `${endpoints}${qsSource}${qsPaging}${qsSearch}&sort=${sort}`
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

export const getSearchMaster = async ({ source }) => {
    const response = await get(`${endpoints}/${source}`).catch(function (
        error
    ) {
        console.error(error)
    })

    return response?.data ?? null
}
