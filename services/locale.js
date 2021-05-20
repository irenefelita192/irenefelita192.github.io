import axios from 'axios'

const endpoints = process.env.config?.endpoints?.api ?? ''

export const getLocale = async () => {
    const response = await axios.get(`${endpoints}/i18n/locales`)
    return response.data
}
