import axios from 'axios'

const endpoints = process.env.config?.baseEndpoint ?? ''

export const getHomeData = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : ''
    const response = await axios
        .get(`${endpoints}/vida-home${locQs}`)
        .catch(function (error) {
            console.error(error)
        })
    return response ? response.data : null
}
