import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import styles from './styles'
import { getCookie } from '../../util/global-util'
const headerData = [
    {
        id: 'company',
        titleID: 'Perusahaan',
        titleEN: 'Company',
        href: '/company',
        subMenu: [
            {
                id: 1,
                title: 'Company Profile',
                subMenu: [
                    {
                        id: 1,
                        title: 'Overview',
                    },
                    {
                        id: 2,
                        title: 'Milestones',
                    },
                    {
                        id: 3,
                        title: 'Key Statistics',
                    },
                    {
                        id: 4,
                        title: 'Financial Statements',
                    },
                    {
                        id: 5,
                        title: 'Clients',
                    },
                ],
            },
            {
                id: 2,
                title: 'Leadership',
                subMenu: [
                    {
                        id: 1,
                        title: 'Board of Commisioners',
                    },
                    {
                        id: 2,
                        title: 'Board of Directors',
                    },
                ],
            },
        ],
    },
    {
        id: 'solutions',
        titleID: 'Solusi',
        titleEN: 'Solutions',
        href: '/solutions',
    },
    // {
    //     id: 'news',
    //     title: 'News',
    //     href: '/news',
    // },
]

const languageData = [
    { id: 'id', title: 'Bahasa' },
    { id: 'en', title: 'English' },
]
export default function Header({ withBg = true, activeId }) {
    const [isDesktop, setIsDesktop] = useState(true)
    const [isMenuActive, setIsMenuActive] = useState(false)
    const [isPopupLang, setIsPopupLang] = useState(false)
    const [activeLang, setActiveLang] = useState('id')
    const [activeLangObj, setActiveLangObj] = useState(null)

    useEffect(() => {
        if (process.browser) {
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
        const selLanguage = languageData.find((lang) => {
            return lang.id === activeLang
        })

        setActiveLangObj(selLanguage)
        // axios.get('http://localhost:1337/headers').then((response) => {
        //     console.log(response.data)
        //     console.log(response.status)
        //     console.log(response.statusText)
        //     console.log(response.headers)
        //     console.log(response.config)
        // })

        return () => {
            document.removeEventListener('click', () => {})
        }
    }, [])

    const handleBurgerMenuClick = () => {
        setIsMenuActive(!isMenuActive)
    }

    const handleLangDropdown = () => {
        setIsPopupLang(!isPopupLang)
    }

    const handleChooseLang = (id) => {
        setActiveLang(id)
        document.cookie = `lang=${id};path=/`
        location.reload()
    }

    const brandImg = withBg
        ? '/images/logo/LippoLife-Logo-Black.png'
        : '/images/logo/LippoLife-Logo-Red.png'

    return (
        <>
            <nav
                id="navbarTop"
                className={`navbar ${withBg ? 'bg-white' : ''}`}
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
                        data-target="navbarBasicExample"
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
                    <div className="navbar-end">
                        {headerData &&
                            headerData.map((dt) => {
                                return (
                                    <Fragment key={dt.id}>
                                        <a
                                            className={`navbar-item ${
                                                activeId === dt.id
                                                    ? 'is-active'
                                                    : ''
                                            }`}
                                            href={dt.href}
                                        >
                                            <span>
                                                {
                                                    dt[
                                                        `title${activeLang.toUpperCase()}`
                                                    ]
                                                }
                                            </span>
                                        </a>
                                        {!isDesktop && (
                                            <>
                                                {dt.subMenu &&
                                                    dt.subMenu.length > 0 &&
                                                    dt.subMenu.map(
                                                        (subMenu) => (
                                                            <div
                                                                key={subMenu.id}
                                                                className="navbar-item has-dropdown"
                                                            >
                                                                <div
                                                                    key={
                                                                        subMenu.id
                                                                    }
                                                                    className="navbar-link"
                                                                >
                                                                    {
                                                                        subMenu.title
                                                                    }
                                                                </div>
                                                                {subMenu.subMenu &&
                                                                    subMenu.subMenu.map(
                                                                        (
                                                                            subSubMenu
                                                                        ) => (
                                                                            <div
                                                                                key={
                                                                                    subSubMenu.id
                                                                                }
                                                                                className="navbar-dropdown"
                                                                            >
                                                                                <a className="navbar-item">
                                                                                    {
                                                                                        subSubMenu.title
                                                                                    }
                                                                                </a>
                                                                            </div>
                                                                        )
                                                                    )}
                                                            </div>
                                                        )
                                                    )}
                                            </>
                                        )}
                                    </Fragment>
                                )
                            })}
                        {/* <a className="navbar-item navbar-lang">
                            EN 
                        </a> */}

                        {/* language start */}
                        {isDesktop && (
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
                                        {activeLangObj && activeLangObj.title}
                                    </span>

                                    <i />
                                    <div
                                        className="dropdown-menu"
                                        id="dropdown-menu"
                                        role="menu"
                                    >
                                        <div className="dropdown-content">
                                            {languageData.map((lang) => (
                                                <a
                                                    key={lang.id}
                                                    onClick={() =>
                                                        handleChooseLang(
                                                            lang.id
                                                        )
                                                    }
                                                    className={`dropdown-item ${
                                                        activeLang === lang.id
                                                            ? 'is-active'
                                                            : ''
                                                    }`}
                                                >
                                                    {lang.title}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {!isDesktop && (
                            <>
                                <div className="navbar-item navbar-lang-mobile">
                                    {languageData.map((lang) => (
                                        <span
                                            onClick={() =>
                                                handleChooseLang(lang.id)
                                            }
                                        >
                                            {lang.title}
                                        </span>
                                    ))}
                                </div>
                            </>
                        )}
                        {/* language end */}
                    </div>
                </div>
            </nav>
            <style jsx>{styles}</style>
        </>
    )
}
