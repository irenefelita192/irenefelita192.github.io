import axios from 'axios'

const endpoints = process.env.config?.endpoints?.api ?? ''

export const getNews = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : ''

    const response = await axios
        .get(`${endpoints}/news-highlights${locQs}`)
        .catch(function (error) {
            console.error(error)
        })
    return response ? response.data : null
}

export const getNewsDetail = async (locale, id) => {
    const locQs = locale ? `?_locale=${locale}` : ''
    // const pageQs = pageId ? `${locQs ? '&' : '?'}pageID=${pageId}` : ''
    const response = await axios
        .get(`${endpoints}/news-highlights/${id}${locQs}`)
        .catch(function (error) {
            console.error(error)
        })
    return response ? response.data : null
}

export const getMoreNews = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : ''
    const moreQs = `${locQs ? '&' : '?'}showAsMore=true`

    const response = await axios
        .get(`${endpoints}/news-highlights${locQs}${moreQs}`)
        .catch(function (error) {
            console.error(error)
        })
    return response ? response.data : null
}
