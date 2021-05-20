import axios from 'axios'

const endpoints = process.env.config?.endpoints?.api ?? ''

export const getAllSubMenu = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : ''
    const response = await axios.get(`${endpoints}/sub-menus${locQs}`)
    return response.data
}
export const getAllHeader = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : ''
    const response = await axios.get(`${endpoints}/headers${locQs}`)
    const allSubMenu = await getAllSubMenu(locale)

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

    return response.data
}

export const getLocale = async () => {
    const response = await axios.get(`${endpoints}/i18n/locales`)
    return response.data
}

export const getHeroTop = async (locale, pageId) => {
    const locQs = locale ? `?_locale=${locale}` : ''
    const pageQs = pageId ? `${locQs ? '&' : '?'}pageID=${pageId}` : ''
    const response = await axios.get(
        `${endpoints}/hero-page-tops${locQs}${pageQs}`
    )
    return response.data
}
