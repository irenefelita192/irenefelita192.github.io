import { Fragment, useState, useEffect } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import dynamic from 'next/dynamic'
import { getAllHeader, getFooter } from 'services/common'
import { getCookie } from 'utils/global-util'
import Accordion from 'components/accordion'

// import DownloadButton from 'components/download-button'
// import Language from 'components/lang'

const DownloadButton = dynamic(() => import('components/download-button'), {
    ssr: false,
})
const Language = dynamic(() => import('components/lang'), { ssr: false })

import styles from './styles'

const assetPrefix = process.env.config?.assetPrefix ?? '',
    assetDomain = process.env.config?.baseEndpoint ?? ''

export default function Header({ activeId }) {
    const [isDesktop, setIsDesktop] = useState(true)
    const [isMenuActive, setIsMenuActive] = useState(false)
    const [activeMenu, setActiveMenu] = useState(null)

    const [headerData, setHeaderData] = useState([])
    const [footerData, setFooterData] = useState(null)

    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
    const [mobileMenuHeight, setMobileMenuHeight] = useState(0)

    let navbar = null,
        headerHeight = 80

    useAsyncEffect(async (isMounted) => {
        let langId, activePath
        if (process.browser) {
            langId = getCookie('lang')
            const pathArr = (window.location?.pathname ?? '').split('/')
            activePath = `/${pathArr.length > 2 ? pathArr[1] : ''}`
        }
        const headers = await getAllHeader(langId)
        let footerDt
        //< 1024 because ipad pro 1024 can use desktop layout
        if (window.innerWidth < 1024) {
            footerDt = await getFooter(langId)
        }

        if (!isMounted()) return
        setHeaderData(headers)
        setActiveMenu(activePath)
        if (footerDt) setFooterData(footerDt)
    }, [])

    useEffect(() => {
        if (process.browser) {
            navbar = document.getElementById('navbarTop')
            // window.addEventListener('scroll', handleScroll)
            if (window.innerWidth < 1024) {
                setIsDesktop(false)
                setMobileMenuHeight(window.innerHeight - headerHeight)
            }
            window.addEventListener('scroll', handleScroll)
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

    let timeout = false
    const handleScroll = (e) => {
        if (!timeout) {
            timeout = setTimeout(function () {
                clearTimeout(timeout)
                timeout = false

                let scrollTop = window.pageYOffset

                if (scrollTop > 1) {
                    if (navbar && navbar.classList.contains('is-trans')) {
                        navbar.classList.remove('is-trans')
                    }
                } else {
                    if (navbar && !navbar.classList.contains('is-trans')) {
                        const navDropdown =
                            document.getElementById('navbar-dropdown')
                        if (
                            navDropdown &&
                            navDropdown.classList.contains('submenu-open')
                        ) {
                        } else {
                            navbar.classList.add('is-trans')
                        }
                    }
                }
            }, 100)
        }
    }

    const handleBurgerMenuClick = () => {
        if (document) {
            if (isMenuActive) {
                document.documentElement.style.overflow = 'auto'
            } else {
                document.documentElement.style.overflow = 'hidden'
            }
        }
        const nav = document.getElementById('navbarTop')
        if (isMenuActive) {
            nav.classList.remove('is-active')
        } else {
            nav.classList.add('is-active')
        }
        setIsMenuActive(!isMenuActive)
    }

    const handleOpenSubmenu = (isOpen) => {
        setIsSubmenuOpen(isOpen)

        const navbar = document.getElementById('navbarTop')
        if (navbar) navbar.classList.remove('is-trans')
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
                                            key={subMenu.id}
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
                                style={{
                                    backgroundColor: subMenu.backgroundColor,
                                    color: subMenu.color,
                                    backgroundImage: `url(${assetDomain}${
                                        subMenu?.bgImage?.url ?? ''
                                    })`,
                                }}
                            >
                                <i
                                    style={{
                                        borderColor: subMenu.borderColor,
                                    }}
                                ></i>
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

    const brandImg = `${assetPrefix}${'/images/logo/logo-Vida.svg'}`,
        brandImgWhite = `${assetPrefix}${'/images/logo/logo-Vida-white.svg'}`
    return (
        <>
            <nav
                id="navbarTop"
                className={`navbar is-trans `}
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
                <div
                    className={`navbar-brand ${
                        isMenuActive ? 'is-active' : ''
                    }`}
                >
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
                        className={`navbar-burger  ${
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
                                    <div>
                                        <Language isDesktop={isDesktop} />
                                    </div>
                                    {footerData && (
                                        <>
                                            <div className="tnc-link">
                                                {footerData.privacyTitle && (
                                                    <>
                                                        <a
                                                            href={
                                                                footerData.privacyLink
                                                            }
                                                        >
                                                            {
                                                                footerData.privacyTitle
                                                            }
                                                        </a>
                                                        <span></span>
                                                    </>
                                                )}
                                                {footerData.tncTitle && (
                                                    <a
                                                        href={
                                                            footerData.tncLink
                                                        }
                                                    >
                                                        {footerData.tncTitle}
                                                    </a>
                                                )}
                                            </div>
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
                        </>
                    )}
                </div>
                <div className="app-section">
                    <a href={footerData?.AppStoreLink ?? ''}>
                        <i></i>
                        <span>iOS</span>
                    </a>
                    <a href={footerData?.PlayStoreLink ?? ''}>
                        <i></i>
                        <span>Android</span>
                    </a>
                </div>
            </nav>
            <style jsx>{styles}</style>
        </>
    )
}
