import styles from './styles'
import Language from 'components/lang'
import { validUrlWithUTM } from 'utils/url'
const assetDomain = process.env.config?.baseEndpoint ?? ''
export default function FooterDesktop({ data, searchParam }) {
    return (
        <>
            {data && (
                <footer id="footer">
                    <div className="flex">
                        <div className="first-column">
                            <div className="first-row">
                                {data.vidaLogo && (
                                    <>
                                        <div className="vida-logo">
                                            <img
                                                onClick={() => {
                                                    window.location.href = '/'
                                                }}
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
                            {data.socialMedia && data.socialMedia.length > 0 && (
                                <div className="third-row">
                                    {data.socialMediaTitle && (
                                        <div className="social-media-text">
                                            {data.socialMediaTitle}
                                        </div>
                                    )}
                                    <div className="social-media-group">
                                        {data.socialMedia.map((socMed) => (
                                            <a
                                                key={socMed.id}
                                                href={socMed.url}
                                                target="_blank"
                                                className="social-media-link"
                                            >
                                                <img
                                                    src={`${assetDomain}${
                                                        socMed.icon?.url ?? ''
                                                    }`}
                                                    alt={
                                                        socMed.icon
                                                            ?.alternativeText ??
                                                        ''
                                                    }
                                                />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* <div className="footer-version">
                                v{process.env.packageVersion}
                            </div> */}
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
                                                        target={
                                                            subMenu.isNewTab
                                                                ? '_target'
                                                                : ''
                                                        }
                                                        href={subMenu.link}
                                                    >
                                                        {subMenu.title}
                                                    </a>
                                                ))}
                                        </div>
                                    ))}
                            </div>
                            <div className="download">
                                {data.AppStoreLink && (
                                    <a
                                        target="_blank"
                                        href={validUrlWithUTM(
                                            data.AppStoreLink,
                                            searchParam,
                                            true
                                        )}
                                    >
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
                                )}
                                {data.PlayStoreLink && (
                                    <a
                                        target="_blank"
                                        href={validUrlWithUTM(
                                            data.PlayStoreLink,
                                            searchParam
                                        )}
                                    >
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
                                )}
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
                            {data.cpText ?? 'All Rights Reserved © Vida'}
                        </div>
                    </div>
                </footer>
            )}
            <style jsx>{styles}</style>
        </>
    )
}
