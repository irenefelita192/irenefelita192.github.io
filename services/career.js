import axios from 'axios'

const endpoints = process.env.config?.endpoints?.api ?? ''

export const getCareer = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : ''
    const response = await axios
        .get(`${endpoints}/career-page${locQs}`)
        .catch(function (error) {
            console.error(error)
        })
    return response ? response.data : null
}
