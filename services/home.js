import axios from 'axios'

const endpoints = process.env.config?.baseEndpoint ?? ''

export const getHero = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : ''
    const response = await axios
        .get(`${endpoints}/hero-data${locQs}`)
        .catch(function (error) {
            console.error(error)
        })
    return response ? response.data : null
}

export const getStats = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : ''
    const response = await axios
        .get(`${endpoints}/home-stats${locQs}`)
        .catch(function (error) {
            console.error(error)
        })
    return response ? response.data : null
}
