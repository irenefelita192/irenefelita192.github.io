import axios from 'axios'

const endpoints = process.env.config?.baseEndpoint ?? '',
    defaultLang = process.env.config?.defaultLang ?? 'id'

export const getAllSubMenu = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : `?_locale=${defaultLang}`
    const sortQs = `${locQs ? '&' : '?'}_sort=sortNum:ASC`

    const response = await axios
        .get(`${endpoints}/vida-sub-menus${locQs}${sortQs}`)
        .catch(function (error) {
            console.error(error)
        })

    return response ? response.data : null
}

export const getAllHeader = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : `?_locale=${defaultLang}`
    const response = await axios
        .get(`${endpoints}/vida-menus${locQs}`)
        .catch(function (error) {
            console.error(error)
        })
    // const allSubMenu = await getAllSubMenu(locale).catch(function (error) {
    //     console.error(error)
    // })

    // console.log('response', response.data)
    // allSubMenu &&
    //     allSubMenu.map((submenu) => {
    //         const headerSub =
    //             response &&
    //             response.data &&
    //             response.data.find(
    //                 (sm) => sm.subMenus && sm.subMenus.length > 0
    //             )
    //         console.log('headerSub', headerSub)
    //         headerSub &&
    //             headerSub.subMenus &&
    //             headerSub.subMenus.map((dt) => {
    //                 console.log('dt', dt)
    //                 if (dt.id == submenu.id) {
    //                 }
    //             })
    //     })
    // response &&
    //     response.data &&
    //     response.data.map((dt) => {
    //         dt.subMenu &&
    //             dt.subMenu.map((subMenu) => {
    //                 const menuData = allSubMenu.find((sm) => {
    //                     return sm.id == subMenu.id
    //                 })

    //                 let subMenuSort = null
    //                 if (
    //                     menuData &&
    //                     menuData.subMenu &&
    //                     menuData.subMenu.length > 0
    //                 ) {
    //                     subMenuSort = menuData.subMenu.sort(function (a, b) {
    //                         return a.sortNum - b.sortNum
    //                     })
    //                 }

    //                 subMenu.subMenu = subMenuSort ? [...subMenuSort] : []
    //             })
    //     })

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

export const getTnc = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : `?_locale=${defaultLang}`
    const response = await axios
        .get(`${endpoints}/terms-conditions${locQs}`)
        .catch(function (error) {
            console.error(error)
        })
    return response ? response.data : null
}

export const getFooter = async (locale) => {
    const locQs = locale ? `?_locale=${locale}` : `?_locale=${defaultLang}`
    const response = await axios
        .get(`${endpoints}/vida-footer${locQs}`)
        .catch(function (error) {
            console.error(error)
        })
    return response ? response.data : null
}
