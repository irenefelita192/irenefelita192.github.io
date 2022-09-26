/* eslint-disable import/prefer-default-export */

import axios from 'axios'
// const rootCas = require('ssl-root-cas').create()

// rootCas.addFile(path.resolve(__dirname, 'intermediate.pem'))
// const httpsAgent = new https.Agent({ ca: rootCas })

const endpoints = process.env.config?.beEndpoint ?? '',
    cmsEndpoints = process.env.config?.baseEndpoint ?? '',
    defaultLang = process.env.config?.defaultLang ?? 'id',
    fwuid = process.env.config?.fwuid ?? '7FPkrq_-upw5gdD4giTZpg'

export const getPartnerCMS = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : `?_locale=${defaultLang}`
    const response = await axios
    .get(`${cmsEndpoints}/vida-partner${locQs}`)
    .catch(function (error) {
        console.error(error)
    })
    return response ? response.data : null
}

export const getAXAPartnerCMS = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : `?_locale=${defaultLang}`
    const response = await axios
        .get(`${cmsEndpoints}/vida-axa-partner${locQs}`)
        .catch(function (error) {
            console.error(error)
        })
    return response ? response.data : null
}

export const getProviderList = async ({
    offset,
    latitude,
    longitude,
    providerName,
    providerType,
    specialities,
    country = 'Indonesia',
}) => {
    const selCountry = country || 'Indonesia'
    var bodyFormData = new URLSearchParams()
    bodyFormData.append(
        'message',
        `{"actions":[{"id":"","descriptor":"apex://ProviderSearchByLocationController/ACTION$getProvidersWithOffset","callingDescriptor":"markup://c:searchResultListDisplay","params":{"offset":"${offset}","country":"${selCountry}","PartnerId":"AXA_MEM_01","latitude":"${latitude}","longitude":"${longitude}","providerNamefilter":"${providerName}","providerTypefilter":"${providerType}","specialitiesfilter":"${specialities}"},"storable":true}]}`
    )
    bodyFormData.append(
        'aura.context',
        `{"mode":"PROD","fwuid":"${fwuid}","app":"siteforce:communityApp","loaded":{"APPLICATION@markup://siteforce:communityApp":"B78_-aNM4IDOksLJusJF3g"},"dn":[],"globals":{},"uad":false}`
    )
    bodyFormData.append('aura.pageURI', undefined)
    bodyFormData.append('aura.token', undefined)

    const response = await axios
        .post(
            // `https://select.axaglobalhealthcare.com/s/sfsites/aura?other.ProviderSearchByLocation.getPartnerMapType=1&other.ProviderSearchByLocation.getProvidersWithOffset=1`,
            `https://api.haloida.dev/v1/hospitals/axa-aura?r=11&other.ProviderSearchByLocation.getProvidersWithOffset=1`,
            bodyFormData,

            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        )
        .catch(function (error) {
            console.error('masuk sini?', error)
        })

    let value = null,
        flattenList = [],
        totalData = 0,
        offsetFrom = 0,
        offsetTo = 0,
        providerTypeList = null,
        specialitiesList = null
    if (response && response.data) {
        const { actions } = response.data
        if (actions && actions.length > 0) {
            value = actions[0]?.returnValue ?? null
        }

        if (value && value.length > 0) {
            value.map((dt, index) => {
                if (index == 0) {
                    totalData = dt.totalSearchResults
                    offsetFrom = dt.offsetFrom
                    offsetTo = dt.offsetTo
                    providerTypeList =
                        dt.availableProviderTypesInSelectedCountry
                    specialitiesList = dt.availableSpecialitiesInSelectedCountry
                }
                dt.directionsURLlink = `<a href='${dt.directionsURL}'>Get Directions</a>`
                flattenList.push(flattenObject(dt))
            })
        }
    }

    const data = {
        flattenList,
        list: value,
        totalData,
        offsetFrom,
        offsetTo,
        providerTypeList,
        specialitiesList,
    }
    return data
}

export const getLocationSuggestion = async ({ text, sessionToken }) => {
    var bodyFormData = new URLSearchParams()
    bodyFormData.append(
        'message',
        `{"actions":[{"id":"","descriptor":"apex://ProviderSearchByLocationController/ACTION$getAddressSet","callingDescriptor":"UNKNOWN","params":{"SearchText":"${text}","sessionToken":"${sessionToken}"}}]}`
    )
    bodyFormData.append(
        'aura.context',
        `{"mode":"PROD","fwuid":"${fwuid}","app":"siteforce:communityApp","loaded":{"APPLICATION@markup://siteforce:communityApp":"B78_-aNM4IDOksLJusJF3g"},"dn":[],"globals":{},"uad":false}`
    )
    bodyFormData.append('aura.pageURI', undefined)
    bodyFormData.append('aura.token', undefined)

    const response = await axios
        .post(
            `https://api.haloida.dev/v1/hospitals/axa-aura?r=14&other.ProviderSearchByLocation.getAddressSet=1`,
            bodyFormData,

            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        )
        .catch(function (error) {
            console.error('Error getLocationSuggestion', error)
        })

    let value = null
    if (response && response.data) {
        const { actions } = response.data
        if (actions && actions.length > 0) {
            value = actions[0]?.returnValue ?? null
        }
    }

    return value
}

export const getLocationGeocode = async ({ placeId, sessionToken }) => {
    var bodyFormData = new URLSearchParams()
    bodyFormData.append(
        'message',
        `{"actions":[{"id":"","descriptor":"apex://ProviderSearchByLocationController/ACTION$getAddressDetailsByPlaceId","callingDescriptor":"markup://c:searchLocationAtHomePage","params":{"PlaceID":"${placeId}","sessionToken":"${sessionToken}"}}]}`
    )
    bodyFormData.append(
        'aura.context',
        `{"mode":"PROD","fwuid":"${fwuid}","app":"siteforce:communityApp","loaded":{"APPLICATION@markup://siteforce:communityApp":"B78_-aNM4IDOksLJusJF3g"},"dn":[],"globals":{},"uad":false}`
    )
    bodyFormData.append('aura.pageURI', undefined)
    bodyFormData.append('aura.token', undefined)

    const response = await axios
        .post(
            `https://api.haloida.dev/v1/hospitals/axa-aura?r=14&other.ProviderSearchByLocation.getAddressDetailsByPlaceId=1`,
            bodyFormData,

            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        )
        .catch(function (error) {
            console.error('Error getLocationSuggestion', error)
        })

    let value = null
    if (response && response.data) {
        const { actions } = response.data
        if (actions && actions.length > 0) {
            value = actions[0]?.returnValue ?? null
        }
    }

    return value
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
    const response = await axios
        .get(`${endpoints}${qsSource}?getcount=true${qsSearchFinal}`)
        .catch(function (error) {
            console.error(error)
        })
    return response?.data?.count ?? null
}

let tokenSource

export const getPartnerData = async ({
    limit,
    page,
    searchfield = '',
    searchkey = '',
    sort,
    source = '/hospitals/partner',
    param,
    textLang
}) => {
    if (typeof tokenSource !== typeof undefined) {
        tokenSource.cancel('Operation canceled due to new request.')
    }

    tokenSource = axios.CancelToken.source()

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

    const response = await axios
        .get(`${endpoints}${qsSource}${qsPaging}${qsSearch}&sort=${sort}`, {
            cancelToken: tokenSource.token,
        })
        .catch(function (error) {
            console.error(error)
        })
    let flattenList = []
    response &&
        response.data &&
        response.data.map((dt) => {
            // add attribute for cashless service column
            dt.cashless = ''
            if (dt.isCashlessIp && dt.isCashlessOp) {
                dt.cashless = `${textLang?.inpatient}, ${textLang?.outpatient}`
            } else if (dt.isCashlessIp && !dt.isCashlessOp) {
                dt.cashless = textLang?.inpatient ?? ''
            } else if (!dt.isCashlessIp && dt.isCashlessOp) {
                dt.cashless = textLang?.outpatient ?? ''
            }

            flattenList.push(flattenObject(dt))
        })

    const data = {
        flattenList,
        list: response?.data ?? null,
        totalData,
        searchfieldDt: searchfield,
        searchkeyDt: searchkey,
    }

    return data
}

export const getSearchMaster = async ({ source }) => {
    const response = await axios
        .get(`${endpoints}/${source}`)
        .catch(function (error) {
            console.error(error)
        })

    return response?.data ?? null
}
