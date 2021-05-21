import axios from 'axios'

const endpoints = process.env.config?.endpoints?.api ?? ''

export const getAllSubMenu = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : ''
    const response = await axios
        .get(`${endpoints}/sub-menus${locQs}`)
        .catch(function (error) {
            console.error(error)
        })
    return response ? response.data : null
}
export const getAllHeader = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : ''
    const response = await axios
        .get(`${endpoints}/headers${locQs}`)
        .catch(function (error) {
            console.error(error)
        })
    const allSubMenu = await getAllSubMenu(locale).catch(function (error) {
        console.log(error)
    })

    response &&
        response.data &&
        response.data.map((dt) => {
            dt.subMenu &&
                dt.subMenu.map((subMenu) => {
                    const menuData = allSubMenu.find((sm) => {
                        return sm.id == subMenu.id
                    })

                    subMenu.subMenu =
                        menuData && menuData.subMenu
                            ? [...menuData.subMenu]
                            : []
                })
        })

    return response ? response.data : null
}

export const getLocale = async () => {
    const response = await axios
        .get(`${endpoints}/i18n/locales`)
        .catch(function (error) {
            console.error(error)
        })
    return response ? response.data : null
}

export const getHeroTop = async (locale, pageId) => {
    const locQs = locale ? `?_locale=${locale}` : ''
    const pageQs = pageId ? `${locQs ? '&' : '?'}pageID=${pageId}` : ''
    const response = await axios
        .get(`${endpoints}/hero-page-tops${locQs}${pageQs}`)
        .catch(function (error) {
            console.error(error)
        })
    return response ? response.data : null
}

export const getTnc = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : ''
    const response = await axios
        .get(`${endpoints}/terms-conditions${locQs}`)
        .catch(function (error) {
            console.error(error)
        })
    return response ? response.data : null
}

export const getPrivacy = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : ''
    const response = await axios
        .get(`${endpoints}/privacy${locQs}`)
        .catch(function (error) {
            console.error(error)
        })
    return response ? response.data : null
}

export const getFooter = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : ''
    const response = await axios
        .get(`${endpoints}/footer${locQs}`)
        .catch(function (error) {
            console.error(error)
        })
    return response ? response.data : null
}
