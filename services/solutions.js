import axios from 'axios'

const endpoints = process.env.config?.endpoints?.api ?? ''

export const getSolutions = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : ''
    const response = await axios.get(`${endpoints}/solutions${locQs}`)
    return response.data
}
