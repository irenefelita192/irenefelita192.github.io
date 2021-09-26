import { Fragment, useState, useEffect } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getAllHeader, getLocale, getFooter } from 'services/common'
import Accordion from 'components/accordion'
import DownloadButton from 'components/download-button'
import LangPopup from './lang'
import { getCookie } from 'utils/global-util'
import styles from './styles'

const assetPrefix = process.env.config?.assetPrefix ?? '',
    assetDomain = process.env.config?.baseEndpoint ?? ''

export default function Header({ type, activeId }) {
    const [isDesktop, setIsDesktop] = useState(true)
    const [isMenuActive, setIsMenuActive] = useState(false)
    const [activeMenu, setActiveMenu] = useState(null)

    const [headerData, setHeaderData] = useState([])
    const [footerData, setFooterData] = useState(null)

    const [languageData, setLanguageData] = useState([])
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
    const [mobileMenuHeight, setMobileMenuHeight] = useState(0)

    let navbar = null,
        headerHeight = 80

    useAsyncEffect(async (isMounted) => {
        const locale = await getLocale()
        let langId, activePath
        if (process.browser) {
            langId = getCookie('lang')
            const pathArr = (window.location?.pathname ?? '').split('/')
            activePath = `/${pathArr.length > 2 ? pathArr[1] : ''}`
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
        if (process.browser) {
            navbar = document.getElementById('navbarTop')
            // window.addEventListener('scroll', handleScroll)
            if (window.innerWidth < 1024) {
                setIsDesktop(false)
                setMobileMenuHeight(window.innerHeight - headerHeight)
            }

            document.addEventListener('click', (evt) => {
                const navbarWrapper = document.getElementById('navbar-dropdown')
                let targetElement = evt.target // clicked element

                do {
                    if (targetElement == navbarWrapper) {
                        // This is a click inside. Do nothing, just return.

                        return
                    }
                    // Go up the DOM
                    targetElement = targetElement.parentNode
                } while (targetElement)
                setIsSubmenuOpen(false)
                // setIsMenuActive(false)
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
                            <div className={`navbar-link`} href={menu.href}>
                                <span>{menu.title}</span>
                            </div>
                        </Accordion.Header>
                        {menu.subMenus && (
                            <>
                                <Accordion.Body>
                                    {menu.subMenus.map((subMenu) => (
                                        <a
                                            className="submenu-content"
                                            href={subMenu.href}
                                        >
                                            {subMenu.title}
                                        </a>
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
                <div className={`navbar-link`}>
                    <span>{menu.title}</span>
                </div>
                <div className="submenu-wrapper">
                    <div className="submenu-inner columns">
                        {menu.subMenus.map((subMenu) => (
                            <a
                                key={subMenu.id}
                                href={subMenu.href}
                                className="submenu-item column"
                            >
                                <div className="submenu-header">
                                    <div className="submenu-icon">
                                        {subMenu.icon && (
                                            <img
                                                src={`${assetDomain}${subMenu.icon.url}`}
                                            />
                                        )}
                                        {subMenu.hoverIcon && (
                                            <img
                                                className="hover-icon"
                                                src={`${assetDomain}${subMenu.hoverIcon.url}`}
                                            />
                                        )}
                                    </div>
                                    <div className="submenu-title">
                                        {subMenu.title}
                                    </div>
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

    const brandImg = `${assetPrefix}${'/images/logo/logo-Vida.svg'}`,
        brandImgWhite = `${assetPrefix}${'/images/logo/logo-Vida-white.svg'}`
    return (
        <>
            <nav
                id="navbarTop"
                className={`navbar ${type == 'trans' ? 'is-trans' : ''}`}
                role="navigation"
                aria-label="main navigation"
            >
                {!isDesktop && isMenuActive && (
                    <div className="static-blob-top">
                        <img
                            src={`${assetPrefix}/images/blob/blob-header-1.png`}
                        />
                    </div>
                )}
                <div className="navbar-brand">
                    <a
                        className={`navbar-item ${
                            isMenuActive ? 'brand-active' : ''
                        }`}
                        href="/"
                    >
                        <img src={brandImg} alt="vida-logo" />
                        <img
                            src={brandImgWhite}
                            className="is-white"
                            alt="vida-logo"
                        />
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
                    {!isDesktop && isMenuActive && (
                        <div className="static-blob-bottom">
                            <img
                                src={`${assetPrefix}/images/blob/blob-header-2.png`}
                            />
                        </div>
                    )}
                    {headerData && (
                        <>
                            <div className="navbar-start">
                                {headerData.map((dt, index) => {
                                    const hasSubMenu =
                                        dt.subMenus && dt.subMenus.length > 0
                                    return (
                                        <Fragment key={dt.id}>
                                            {hasSubMenu && (
                                                <div
                                                    id="navbar-dropdown"
                                                    className={`navbar-item has-dropdown  ${
                                                        isMenuActive
                                                            ? 'animation-slide-right'
                                                            : ''
                                                    } ${
                                                        activeMenu == dt.href
                                                            ? 'is-active'
                                                            : ''
                                                    } ${
                                                        isSubmenuOpen
                                                            ? 'submenu-open'
                                                            : ''
                                                    }`}
                                                    onClick={() =>
                                                        handleOpenSubmenu(
                                                            !isSubmenuOpen
                                                        )
                                                    }
                                                    style={
                                                        !isDesktop
                                                            ? {
                                                                  animationDelay: `0.${
                                                                      index + 1
                                                                  }s`,
                                                              }
                                                            : {}
                                                    }
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
                                                        isMenuActive
                                                            ? 'animation-slide-right'
                                                            : ''
                                                    } ${
                                                        activeMenu == dt.href
                                                            ? 'is-active'
                                                            : ''
                                                    }`}
                                                    style={
                                                        !isDesktop
                                                            ? {
                                                                  animationDelay: `0.${
                                                                      index + 1
                                                                  }s`,
                                                              }
                                                            : {}
                                                    }
                                                    href={dt.href}
                                                >
                                                    <span>{dt.title}</span>
                                                </a>
                                            )}
                                        </Fragment>
                                    )
                                })}
                            </div>

                            {!isDesktop && (
                                <div className="navbar-end">
                                    <LangPopup
                                        isDesktop={isDesktop}
                                        languageData={languageData}
                                    />
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

                            {/* {isDesktop && (
                                <div className="navbar-end">
                                    <LangPopup
                                        isDesktop={isDesktop}
                                        languageData={languageData}
                                    />
                                </div>
                            )} */}
                        </>
                    )}
                </div>
            </nav>
            <style jsx>{styles}</style>
        </>
    )
}
