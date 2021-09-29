import Accordion from 'components/accordion'
import DownloadButton from 'components/download-button'
import Language from '../lang'
import styles from './styles'

const assetDomain = process.env.config?.baseEndpoint ?? ''
export default function FooterMobile({ data }) {
    console.log('KE SINI?')
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
                        <DownloadButton data={data} />
                    </div>

                    <div className="fifth-row">
                        <Language isDesktop={false} />
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
