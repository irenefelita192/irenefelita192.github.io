import axios from 'axios'

const endpoints = process.env.config?.endpoints?.api ?? ''

export const getContact = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : ''
    const response = await axios
        .get(`${endpoints}/contact-page${locQs}`)
        .catch(function (error) {
            console.error(error)
        })
    return response ? response.data : null
}
