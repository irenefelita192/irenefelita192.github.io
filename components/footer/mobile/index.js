import { useState } from 'react'
import Accordion from '../../accordion'
import styles from './styles'

export default function FooterMobile({ data }) {
    const assetDomain = process.env.config?.baseEndpoint ?? ''
    const [isIos, setIsIos] = useState(false)
    return (
        <>
            {data && (
                <footer>
                    <div className="first-row">
                        {data.vidaLogo && (
                            <>
                                <div className="vida-logo">
                                    <img
                                        src={`${assetDomain}${data.vidaLogo.url}`}
                                        alt={data.vidaLogo.alternativeText}
                                    />
                                </div>
                                <div className="text">{data.vidaText}</div>
                            </>
                        )}
                    </div>
                    <div className="second-row">
                        <div className="second-row-wrapper">
                            <div className="text">{data.lippolifeText}</div>
                            <div className="lippo-logo">
                                <img
                                    src={`${assetDomain}${
                                        data.lippolifeLogo?.url ?? ''
                                    }`}
                                    alt={
                                        data.lippolifeLogo?.alternativeText ??
                                        ''
                                    }
                                />
                            </div>
                        </div>
                        <div className="second-row-wrapper">
                            <div className="text">{data.ojkText}</div>
                            <div className="ojk-logo">
                                <img
                                    src={`${assetDomain}${
                                        data.ojkLogo?.url ?? ''
                                    }`}
                                    alt={data.ojkLogo?.alternativeText ?? ''}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="third-row">
                        <Accordion>
                            {data.menu.map((menu) => (
                                <Accordion.Container>
                                    <Accordion.Header id={menu.id}>
                                        <span className="menu-header">
                                            {menu.title}
                                        </span>
                                    </Accordion.Header>
                                    {menu.subMenu && (
                                        <>
                                            <Accordion.Body>
                                                {menu.subMenu.map((subMenu) => (
                                                    <div className="submenu-content">
                                                        {subMenu.title}
                                                    </div>
                                                ))}
                                            </Accordion.Body>
                                        </>
                                    )}
                                </Accordion.Container>
                            ))}
                        </Accordion>
                    </div>

                    <div className="fourth-row download">
                        {isIos && (
                            <a href={data.AppStoreLink}>
                                <img
                                    src={`${assetDomain}${
                                        data.AppStoreIcon?.url ?? ''
                                    }`}
                                    alt={
                                        data.AppStoreIcon?.alternativeText ?? ''
                                    }
                                />
                            </a>
                        )}
                        {!isIos && (
                            <a href={data.PlayStoreLink}>
                                <img
                                    src={`${assetDomain}${
                                        data.PlayStoreIcon?.url ?? ''
                                    }`}
                                    alt={
                                        data.PlayStoreIcon?.alternativeText ??
                                        ''
                                    }
                                />
                            </a>
                        )}
                    </div>

                    <div className="fifth-row">
                        {data.privacyTitle && (
                            <>
                                <a
                                    className="third-row-link"
                                    href={data.privacyLink}
                                >
                                    {data.privacyTitle}
                                </a>
                                <span></span>
                            </>
                        )}
                        {data.tncTitle && (
                            <a className="third-row-link" href={data.tncLink}>
                                {data.tncTitle}
                            </a>
                        )}
                    </div>
                    <div className="copyright">
                        {data?.copyrightText ??
                            'All Rights Reserved © 2021 Vida'}
                    </div>
                </footer>
            )}
            <style jsx>{styles}</style>
        </>
    )
}
