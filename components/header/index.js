import { Fragment, useState, useEffect } from 'react'
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

    useEffect(() => {
        if (process.browser) {
            if (document && document.body.clientWidth < 1024) {
                setIsDesktop(false)
            }
            const langId = getCookie('lang')
            setActiveLang(langId)
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

    const selLanguage = languageData.find((lang) => {
        return lang.id === activeLang
    })
    return (
        <>
            <nav
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
                    id="navbarTop"
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
                        <div
                            className="navbar-item navbar-lang"
                            onClick={() => handleLangDropdown()}
                        >
                            <div
                                className={`dropdown is-right ${
                                    isPopupLang ? 'is-active' : ''
                                }`}
                            >
                                <span>{selLanguage.title}</span>
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
                                                    handleChooseLang(lang.id)
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
                        {/* language end */}
                    </div>
                </div>
            </nav>
            <style jsx>{styles}</style>
        </>
    )
}
