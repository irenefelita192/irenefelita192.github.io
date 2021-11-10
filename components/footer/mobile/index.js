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

                    <div className="fifth-row">
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
