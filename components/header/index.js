import { useState, useEffect } from 'react'
import styles from './styles'

const headerData = [
    {
        id: 'company',
        title: 'Company',
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
        title: 'Solutions',
        href: '/solutions',
    },
    // {
    //     id: 'news',
    //     title: 'News',
    //     href: '/news',
    // },
]
export default function Header({ withBg = true, activeId }) {
    const [isDesktop, setIsDesktop] = useState(true)
    const [isMenuActive, setIsMenuActive] = useState(false)

    useEffect(() => {
        if (process.browser) {
            console.log('window', document.body.clientWidth)
            if (document && document.body.clientWidth < 1024) {
                setIsDesktop(false)
            }
        }
    }, [])

    const handleBurgerMenuClick = () => {
        setIsMenuActive(!isMenuActive)
    }

    const brandImg = withBg
        ? '/images/logo/LippoLife-Logo-Black.png'
        : '/images/logo/LippoLife-Logo-White.png'
    return (
        <>
            <nav
                className={`navbar ${withBg ? 'bg-white' : ''}`}
                role="navigation"
                aria-label="main navigation"
            >
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src={brandImg} />
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
                                    <>
                                        <a
                                            key={dt.id}
                                            className={`navbar-item ${
                                                activeId === dt.id
                                                    ? 'is-active'
                                                    : ''
                                            }`}
                                            href={dt.href}
                                        >
                                            <span>{dt.title}</span>
                                        </a>
                                        {dt.subMenu &&
                                            dt.subMenu.length > 0 &&
                                            dt.subMenu.map((subMenu) => (
                                                <div className="navbar-item has-dropdown">
                                                    <div
                                                        key={subMenu.id}
                                                        className="navbar-link"
                                                    >
                                                        {subMenu.title}
                                                    </div>
                                                    {subMenu.subMenu &&
                                                        subMenu.subMenu.map(
                                                            (subSubMenu) => (
                                                                <div className="navbar-dropdown">
                                                                    <a className="navbar-item">
                                                                        {
                                                                            subSubMenu.title
                                                                        }
                                                                    </a>
                                                                </div>
                                                            )
                                                        )}
                                                </div>
                                            ))}
                                    </>
                                )
                            })}
                        {/* <a className="navbar-item">
                            <img alt="Vida" src="/images/logo/Logo-Vida.png" />
                        </a> */}
                        <a className="navbar-item navbar-lang">
                            EN <i />
                        </a>

                        {/* <a className="navbar-item" href="/company">
                            Company
                        </a>

                        <a className="navbar-item" href="/solutions">
                            Solutions <i />
                        </a>
                        <a className="navbar-item">News</a>
                         */}
                    </div>
                </div>
            </nav>
            <style jsx>{styles}</style>
        </>
    )
}
