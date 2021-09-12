import { Fragment, useState, useEffect } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getAllHeader, getLocale } from '../../services/common'

import { getCookie } from '../../util/global-util'

import styles from './styles'

export default function Header({ activeId }) {
    const [isDesktop, setIsDesktop] = useState(true)
    const [isMenuActive, setIsMenuActive] = useState(false)
    const [isPopupLang, setIsPopupLang] = useState(false)
    const [activeLang, setActiveLang] = useState('id')
    const [activeLangObj, setActiveLangObj] = useState(null)

    const [headerData, setHeaderData] = useState([])
    const [languageData, setLanguageData] = useState([])

    // const [activeMenu, setActiveMenu] = useState(nu;;)

    let navbar = null
    useAsyncEffect(async (isMounted) => {
        const locale = await getLocale()
        let langId
        if (process.browser) {
            langId = getCookie('lang')
        }
        const headers = await getAllHeader(langId ? langId : 'id')
        console.log('header', headers)
        if (!isMounted()) return
        setHeaderData(headers)
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
            window.addEventListener('scroll', handleScroll)
            if (document && document.body.clientWidth < 1024) {
                setIsDesktop(false)
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
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const scrollUp = 'scroll-up',
        scrollDown = 'scroll-down'
    let scrollTimer = null,
        lastScroll = 0

    const handleScroll = (e) => {
        if (scrollTimer != null) clearTimeout(scrollTimer)

        scrollTimer = window.setTimeout(scrollFinished, 500)

        const currentScroll = window.pageYOffset

        if (currentScroll <= 0) {
            navbar.classList.remove(scrollUp)
            return
        }

        if (currentScroll > lastScroll) {
            //down
            navbar.classList.add(scrollDown)
            navbar.classList.remove(scrollUp)
        } else if (
            currentScroll < lastScroll &&
            navbar.classList.contains(scrollDown)
        ) {
            // up
            navbar.classList.remove(scrollDown)
            navbar.classList.add(scrollUp)
        }
        lastScroll = currentScroll
    }

    const scrollFinished = () => {
        if (navbar) {
            navbar.classList.add(scrollUp)
        }
    }

    const handleBurgerMenuClick = () => {
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
                                                <div className="navbar-item has-dropdown">
                                                    <a
                                                        className={`navbar-link ${
                                                            activeId === dt.id
                                                                ? 'is-active'
                                                                : ''
                                                        }`}
                                                        href={dt.href}
                                                    >
                                                        <span>{dt.title}</span>
                                                    </a>
                                                    {isDesktop && (
                                                        <div className="submenu-wrapper">
                                                            <div className="submenu-inner columns">
                                                                {dt.subMenus.map(
                                                                    (
                                                                        subMenu
                                                                    ) => (
                                                                        <a
                                                                            key={
                                                                                subMenu.id
                                                                            }
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
                                                                                {
                                                                                    subMenu.title
                                                                                }
                                                                            </div>
                                                                            <div className="submenu-desc">
                                                                                {
                                                                                    subMenu.description
                                                                                }
                                                                            </div>
                                                                        </a>
                                                                    )
                                                                )}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                            {!hasSubMenu && (
                                                <a
                                                    className={`navbar-item ${
                                                        activeId === dt.id
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

                                {!isDesktop && (
                                    <>
                                        <div className="navbar-item navbar-lang-mobile">
                                            {languageData.map((lang) => (
                                                <span
                                                    key={lang.id}
                                                    onClick={() =>
                                                        handleChooseLang(
                                                            lang.code
                                                        )
                                                    }
                                                    className={
                                                        activeLang === lang.code
                                                            ? 'is-active'
                                                            : ''
                                                    }
                                                >
                                                    {lang?.code?.toUpperCase() ??
                                                        ''}
                                                </span>
                                            ))}
                                        </div>
                                    </>
                                )}
                                {/* language end */}
                            </div>
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
