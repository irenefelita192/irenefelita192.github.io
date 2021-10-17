import axios from 'axios'

const endpoints = process.env.config?.baseEndpoint ?? '',
    defaultLang = process.env.config?.defaultLang ?? 'id'

export const getHomeData = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : `?_locale=${defaultLang}`
    const response = await axios
        .get(`${endpoints}/vida-home${locQs}`)
        .catch(function (error) {
            console.error(error)
        })
    return response ? response.data : null
}
