import axios from 'axios'

const endpoints = process.env.config?.baseEndpoint ?? ''

export const getPrivacy = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : ''
    const response = await axios
        .get(`${endpoints}/vida-privacy${locQs}`)
        .catch(function (error) {
            console.error(error)
        })
    return response ? response.data : null
}

export const getTerms = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : ''
    const response = await axios
        .get(`${endpoints}/vida-terms${locQs}`)
        .catch(function (error) {
            console.error(error)
        })
    return response ? response.data : null
}
