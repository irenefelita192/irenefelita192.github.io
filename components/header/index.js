import { Fragment, useState, useEffect } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getAllHeader, getLocale, getFooter } from 'services/common'
import Accordion from 'components/accordion'
import DownloadButton from 'components/download-button'
import { getCookie } from 'utils/global-util'

import styles from './styles'

export default function Header({ activeId }) {
    const [isDesktop, setIsDesktop] = useState(true)
    const [isMenuActive, setIsMenuActive] = useState(false)
    const [activeMenu, setActiveMenu] = useState(null)
    const [isPopupLang, setIsPopupLang] = useState(false)
    const [activeLang, setActiveLang] = useState('id')
    const [activeLangObj, setActiveLangObj] = useState(null)

    const [headerData, setHeaderData] = useState([])
    const [footerData, setFooterData] = useState(null)

    const [languageData, setLanguageData] = useState([])
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
    const [mobileMenuHeight, setMobileMenuHeight] = useState(0)

    // const [activeMenu, setActiveMenu] = useState(nu;;)

    let navbar = null,
        headerHeight = 80

    useAsyncEffect(async (isMounted) => {
        const locale = await getLocale()
        let langId, activePath
        if (process.browser) {
            langId = getCookie('lang')
            const pathArr = (window.location?.pathname ?? '').split('/')
            console.log('pathArr', pathArr)
            activePath = `/${pathArr.length > 2 ? pathArr[1] : ''}`
            console.log('activepath', activePath)
        }
        const headers = await getAllHeader(langId ? langId : 'id')
        let footerDt
        if (window.innerWidth < 1024) {
            footerDt = await getFooter(langId ? langId : 'id')
        }

        if (!isMounted()) return
        setHeaderData(headers)
        setActiveMenu(activePath)
        if (footerDt) setFooterData(footerDt)
        setLanguageData(locale)
    }, [])

    useEffect(() => {
        if (languageData && languageData.length > 0) {
            const selLanguage = languageData.find((lang) => {
                return lang.code === activeLang
            })

            setActiveLangObj(selLanguage)
        }
    }, [languageData])

    useEffect(() => {
        if (process.browser) {
            navbar = document.getElementById('navbarTop')
            // window.addEventListener('scroll', handleScroll)
            if (window.innerWidth < 1024) {
                setIsDesktop(false)
                setMobileMenuHeight(window.innerHeight - headerHeight)
            }
            const langId = getCookie('lang')
            if (langId) setActiveLang(langId)

            document.addEventListener('click', (evt) => {
                const navbarLang = document.getElementById('navbarLang')
                const navbarWrapper = document.getElementById('navbarTop')
                let targetElement = evt.target // clicked element

                do {
                    if (
                        targetElement == navbarLang ||
                        targetElement == navbarWrapper
                    ) {
                        // This is a click inside. Do nothing, just return.

                        return
                    }
                    // Go up the DOM
                    targetElement = targetElement.parentNode
                } while (targetElement)
                setIsPopupLang(false)
                setIsMenuActive(false)
                // This is a click outside.
            })
        }

        return () => {
            document.removeEventListener('click', () => {})
        }
    }, [])

    const handleBurgerMenuClick = () => {
        if (document) {
            if (isMenuActive) {
                document.documentElement.style.overflow = 'auto'
            } else {
                document.documentElement.style.overflow = 'hidden'
            }
        }
        setIsMenuActive(!isMenuActive)
    }

    const handleLangDropdown = () => {
        setIsPopupLang(!isPopupLang)
    }

    const handleChooseLang = (code) => {
        setActiveLang(code)
        document.cookie = `lang=${code};path=/`
        location.reload()
    }

    const handleOpenSubmenu = (isOpen) => {
        setIsSubmenuOpen(isOpen)
    }

    const renderSubMenuMobile = (menu) => {
        return (
            <>
                <Accordion>
                    <Accordion.Container>
                        <Accordion.Header
                            id={menu.id}
                            onClick={handleOpenSubmenu}
                        >
                            <a className={`navbar-link`} href={menu.href}>
                                <span>{menu.title}</span>
                            </a>
                        </Accordion.Header>
                        {menu.subMenus && (
                            <>
                                <Accordion.Body>
                                    {menu.subMenus.map((subMenu) => (
                                        <div className="submenu-content">
                                            {subMenu.title}
                                        </div>
                                    ))}
                                </Accordion.Body>
                            </>
                        )}
                    </Accordion.Container>
                </Accordion>
                <style jsx>{styles}</style>
            </>
        )
    }

    const renderSubMenuDesktop = (menu) => {
        return (
            <>
                <a
                    className={`navbar-link ${
                        activeId === menu.id ? 'is-active' : ''
                    }`}
                    href={menu.href}
                >
                    <span>{menu.title}</span>
                </a>
                <div className="submenu-wrapper">
                    <div className="submenu-inner columns">
                        {menu.subMenus.map((subMenu) => (
                            <a
                                key={subMenu.id}
                                href=""
                                className="submenu-item column"
                            >
                                <div className="submenu-icon">
                                    {subMenu.icon && (
                                        <img
                                            src={`${assetDomain}${subMenu.icon.url}`}
                                        />
                                    )}
                                </div>
                                <div className="submenu-title">
                                    {subMenu.title}
                                </div>
                                <div className="submenu-desc">
                                    {subMenu.description}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                <style jsx>{styles}</style>
            </>
        )
    }
    // {languageData.map(
    //     (lang) => (
    //         <a
    //             key={lang.id}
    //             onClick={() =>
    //                 handleChooseLang(
    //                     lang.code
    //                 )
    //             }
    //             className={`dropdown-item ${
    //                 activeLang ===
    //                 lang.code
    //                     ? 'is-active'
    //                     : ''
    //             }`}
    //         >
    //             {lang.name}
    //         </a>
    //     )
    // )}

    // const renderLangMobile = (menu) => {
    //     return (
    //         <>
    //             <Accordion>
    //                 <Accordion.Container>
    //                     <Accordion.Header
    //                         id={menu.id}
    //                         onClick={handleOpenSubmenu}
    //                     >
    //                         <a
    //                             className={`navbar-link ${
    //                                 activeId === menu.id ? 'is-active' : ''
    //                             }`}
    //                             href={menu.href}
    //                         >
    //                             <span>{menu.title}</span>
    //                         </a>
    //                     </Accordion.Header>
    //                     {menu.subMenus && (
    //                         <>
    //                             <Accordion.Body>
    //                                 {menu.subMenus.map((subMenu) => (
    //                                     <div className="submenu-content">
    //                                         {subMenu.title}
    //                                     </div>
    //                                 ))}
    //                             </Accordion.Body>
    //                         </>
    //                     )}
    //                 </Accordion.Container>
    //             </Accordion>
    //             <style jsx>{styles}</style>
    //         </>
    //     )
    // }

    const assetPrefix = process.env.config?.assetPrefix ?? '',
        brandImg = `${assetPrefix}${'/images/logo/logo-Vida.png'}`
    const assetDomain = process.env.config?.baseEndpoint ?? ''
    return (
        <>
            <nav
                id="navbarTop"
                className={`navbar`}
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src={brandImg} alt="lippo-life-logo" />
                    </a>

                    <a
                        role="button"
                        className={`navbar-burger ${
                            isMenuActive ? 'is-active' : ''
                        }`}
                        aria-label="menu"
                        aria-expanded="false"
                        onClick={() => handleBurgerMenuClick()}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div
                    className={`navbar-menu ${
                        !isDesktop && isMenuActive ? 'is-active' : ''
                    }`}
                    style={{ minHeight: `${mobileMenuHeight}px` || 'auto' }}
                >
                    {headerData && (
                        <>
                            <div className="navbar-start">
                                {headerData.map((dt) => {
                                    const hasSubMenu =
                                        dt.subMenus && dt.subMenus.length > 0
                                    return (
                                        <Fragment key={dt.id}>
                                            {hasSubMenu && (
                                                <div
                                                    className={`navbar-item has-dropdown ${
                                                        isSubmenuOpen
                                                            ? 'submenu-open'
                                                            : ''
                                                    }`}
                                                >
                                                    {!isDesktop &&
                                                        renderSubMenuMobile(dt)}
                                                    {isDesktop &&
                                                        renderSubMenuDesktop(
                                                            dt
                                                        )}
                                                </div>
                                            )}
                                            {!hasSubMenu && (
                                                <a
                                                    className={`navbar-item ${
                                                        activeMenu == dt.href
                                                            ? 'is-active'
                                                            : ''
                                                    }`}
                                                    href={dt.href}
                                                >
                                                    <span>{dt.title}</span>
                                                </a>
                                            )}
                                        </Fragment>
                                    )
                                })}
                            </div>

                            {/* language mobile start */}
                            {!isDesktop && (
                                <div className="navbar-end">
                                    {/* <div>EN | ID</div> */}
                                    {footerData && (
                                        <>
                                            <div className="download">
                                                <DownloadButton
                                                    data={footerData}
                                                />
                                            </div>
                                            <div className="copyright">
                                                <span>
                                                    {footerData.copyrightText}
                                                </span>
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}
                            {/* language start */}
                            {isDesktop && (
                                <div className="navbar-end">
                                    <div
                                        id="navbarLang"
                                        className="navbar-item navbar-lang"
                                        onClick={() => handleLangDropdown()}
                                    >
                                        <div
                                            className={`dropdown is-right ${
                                                isPopupLang ? 'is-active' : ''
                                            }`}
                                        >
                                            <span>
                                                {activeLangObj &&
                                                    activeLangObj.code.toUpperCase()}
                                            </span>

                                            {activeLangObj && <i />}
                                            <div
                                                className="dropdown-menu"
                                                id="dropdown-menu"
                                                role="menu"
                                            >
                                                <div className="dropdown-content">
                                                    {languageData.map(
                                                        (lang) => (
                                                            <a
                                                                key={lang.id}
                                                                onClick={() =>
                                                                    handleChooseLang(
                                                                        lang.code
                                                                    )
                                                                }
                                                                className={`dropdown-item ${
                                                                    activeLang ===
                                                                    lang.code
                                                                        ? 'is-active'
                                                                        : ''
                                                                }`}
                                                            >
                                                                {lang.name}
                                                            </a>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </nav>
            <style jsx>{styles}</style>
        </>
    )
}
