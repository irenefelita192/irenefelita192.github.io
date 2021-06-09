import axios from 'axios'

const endpoints = process.env.config?.baseEndpoint ?? ''

export const getSolutionPage = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : ''
    const response = await axios
        .get(`${endpoints}/solutions-page${locQs}`)
        .catch(function (error) {
            console.error(error)
        })
    return response ? response.data : null
}
