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
