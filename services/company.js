import axios from 'axios'

const endpoints = process.env.config?.endpoints?.api ?? ''

export const getOverview = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : ''
    const response = await axios.get(`${endpoints}/overview-page${locQs}`)
    return response.data
}

export const getMilestone = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : ''
    const response = await axios.get(`${endpoints}/milestones${locQs}`)
    return response.data
}

export const getKeyStatistic = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : ''
    const response = await axios.get(`${endpoints}/key-statistics${locQs}`)
    return response.data
}

export const getFinancialStatement = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : ''
    const response = await axios.get(
        `${endpoints}/financial-statements${locQs}`
    )
    return response.data
}
