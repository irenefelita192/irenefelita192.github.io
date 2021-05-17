import styles from './styles'

const headerData = [
    {
        id: 'company',
        title: 'Company',
        href: '/company',
    },
    {
        id: 'solutions',
        title: 'Solutions',
        href: '/solutions',
        subMenu: [
            {
                id: '',
                title: '',
                shortDescription: '',
            },
        ],
    },
    {
        id: 'news',
        title: 'News',
        href: '/news',
    },
]
export default function Header({ withBg = true, activeId }) {
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
                        className="navbar-burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample"
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarTop" className="navbar-menu">
                    <div className="navbar-end">
                        {headerData &&
                            headerData.map((dt) => {
                                return (
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
                                        {dt.subMenu &&
                                            dt.subMenu.length > 0 && (
                                                <i className="caret-down" />
                                            )}
                                    </a>
                                )
                            })}
                        <a className="navbar-item">
                            <img alt="Vida" src="/images/logo/Logo-Vida.png" />
                        </a>
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
