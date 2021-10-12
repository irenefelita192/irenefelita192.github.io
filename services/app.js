import axios from 'axios'

const endpoints = process.env.config?.baseEndpoint ?? ''

export const getAppData = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : ''
    const response = await axios
        .get(`${endpoints}/vida-app${locQs}`)
        .catch(function (error) {
            console.error(error)
        })
    return response ? response.data : null
}
