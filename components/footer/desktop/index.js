import styles from './styles'
import Language from '../lang'
const assetDomain = process.env.config?.baseEndpoint ?? ''
export default function FooterDesktop({ data }) {
    return (
        <>
            {data && (
                <footer>
                    <div className="flex">
                        <div
                            className="first-column"
                            onClick={() => {
                                window.location.href = '/'
                            }}
                        >
                            <div className="first-row">
                                {data.vidaLogo && (
                                    <>
                                        <div className="vida-logo">
                                            <img
                                                src={`${assetDomain}${data.vidaLogo.url}`}
                                                alt={
                                                    data.vidaLogo
                                                        .alternativeText
                                                }
                                            />
                                        </div>
                                        <div className="text">
                                            {data.vidaText}
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="second-row">
                                <div className="second-row-wrapper">
                                    <div className="text">
                                        {data.lippolifeText}
                                    </div>
                                    <div className="lippo-logo">
                                        <img
                                            src={`${assetDomain}${
                                                data.lippolifeLogo?.url ?? ''
                                            }`}
                                            alt={
                                                data.lippolifeLogo
                                                    ?.alternativeText ?? ''
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
                                            alt={
                                                data.ojkLogo?.alternativeText ??
                                                ''
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="second-column">
                            <div className="footer-menu">
                                {data.menu &&
                                    data.menu.map((menu) => (
                                        <div
                                            className="footer-submenu"
                                            key={menu.id}
                                        >
                                            <div className="title">
                                                {menu.title}
                                            </div>
                                            {menu.subMenu &&
                                                menu.subMenu.map((subMenu) => (
                                                    <a
                                                        className="list"
                                                        key={subMenu.id}
                                                        href={subMenu.link}
                                                    >
                                                        {subMenu.title}
                                                    </a>
                                                ))}
                                        </div>
                                    ))}
                            </div>
                            <div className="download">
                                <a href={data.AppStoreLink}>
                                    <img
                                        src={`${assetDomain}${
                                            data.AppStoreIcon?.url ?? ''
                                        }`}
                                        alt={
                                            data.AppStoreIcon
                                                ?.alternativeText ?? ''
                                        }
                                    />
                                </a>
                                <a href={data.PlayStoreLink}>
                                    <img
                                        src={`${assetDomain}${
                                            data.PlayStoreIcon?.url ?? ''
                                        }`}
                                        alt={
                                            data.PlayStoreIcon
                                                ?.alternativeText ?? ''
                                        }
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="left-column">
                            <Language isDesktop={true} />
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
                                <a
                                    className="third-row-link"
                                    href={data.tncLink}
                                >
                                    {data.tncTitle}
                                </a>
                            )}
                        </div>
                        <div className="copyright">
                            {data?.copyrightText ??
                                'All Rights Reserved © 2021 Vida'}
                        </div>
                    </div>
                </footer>
            )}
            <style jsx>{styles}</style>
        </>
    )
}
