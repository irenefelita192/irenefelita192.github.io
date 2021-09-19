import Accordion from 'components/accordion'

import styles from './styles'

const assetDomain = process.env.config?.baseEndpoint ?? ''

export default function Submenu({ menu, isDesktop, onClick }) {
    const handleOpenSubmenu = () => {
        if (onClick) {
            onClick(true)
        }
    }

    const renderSubMenuMobile = () => {
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

    const renderSubMenuDesktop = () => {
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

    return (
        <>
            {!isDesktop && renderSubMenuMobile()}
            {isDesktop && renderSubMenuDesktop()}

            <style jsx>{styles}</style>
        </>
    )
}
