import axios from 'axios'

const endpoints = process.env.config?.endpoints?.api ?? ''

export const getHero = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : ''
    const response = await axios.get(`${endpoints}/hero-data${locQs}`)
    return response.data
}

export const getStats = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : ''
    const response = await axios.get(`${endpoints}/home-stats${locQs}`)
    return response.data
}
