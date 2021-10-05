import axios from 'axios'

const endpoints = process.env.config?.baseEndpoint ?? ''

export const getProductData = async (name, locale) => {
    const locQs = locale ? `?_locale=${locale}` : ''
    const response = await axios
        .get(`${endpoints}/vida-product-${name}${locQs}`)
        .catch(function (error) {
            console.error(error)
        })
    return response ? response.data : null
}
