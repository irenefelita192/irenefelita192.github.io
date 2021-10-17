import axios from 'axios'

const endpoints = process.env.config?.baseEndpoint ?? '',
    defaultLang = process.env.config?.defaultLang ?? 'id'

export const getPrivacy = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : `?_locale=${defaultLang}`
    const response = await axios
        .get(`${endpoints}/vida-privacy${locQs}`)
        .catch(function (error) {
            console.error(error)
        })
    return response ? response.data : null
}

export const getTerms = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : `?_locale=${defaultLang}`
    const response = await axios
        .get(`${endpoints}/vida-terms${locQs}`)
        .catch(function (error) {
            console.error(error)
        })
    return response ? response.data : null
}
