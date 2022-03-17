import styles from './styles'

const assetDomain = process.env.config?.baseEndpoint ?? ''
export default function FooterMobile({ data }) {
    return (
        <>
            {data && (
                <footer id="footer">
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
                                                socMed.icon?.alternativeText ??
                                                ''
                                            }
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="fifth-row">
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
