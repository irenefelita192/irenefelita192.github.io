import { useState, useEffect } from 'react'
import styles from './styles'

const assetDomain = process.env.config?.baseEndpoint ?? ''
export default function BannerCTA({ data, isProduct, isDesktop }) {
    const [isIos, setIsIos] = useState(false)

    useEffect(() => {
        if (process.browser && data.isDownload) {
            const ios = /(iPad|iPhone|iPod)/g.test(navigator.userAgent)
            setIsIos(ios)
        }
    }, [])

    if (!data) return <></>
    return (
        <>
            <div
                className={`banner-section ${isProduct ? 'is-product' : ''} ${
                    data.isDownload ? 'is-download' : ''
                } ${isDesktop ? '' : 'is-mobile'}`}
                style={{
                    backgroundColor: data.backgroundColor || '#3989D7',
                    backgroundImage: `url(${assetDomain}${
                        isDesktop
                            ? data?.shamrockImage?.url ?? ''
                            : data?.shamrockImageMobile?.url ?? ''
                    })`,
                }}
            >
                <div>{data.title || ''}</div>
                {data.description && (
                    <div className="banner-desc">{data.description}</div>
                )}
                {data.isDownload ? (
                    <>
                        {isIos && (
                            <a
                                className="download-link"
                                href={data.AppStoreLink}
                            >
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
                            <a
                                className="download-link"
                                href={data.PlayStoreLink}
                            >
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
                    </>
                ) : (
                    // <div className="banner-link">
                    <a className="banner-link" href={data.buttonLink}>
                        {data.buttonText}
                    </a>
                    // </div>
                )}
            </div>
            <style jsx>{styles}</style>
        </>
    )
}
