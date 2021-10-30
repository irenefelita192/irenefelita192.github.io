import { useState, useEffect } from 'react'
import styles from './styles'

const assetDomain = process.env.config?.baseEndpoint ?? '',
    assetPrefix = process.env.config?.assetPrefix ?? ''
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
                        {isDesktop && (
                            <div className="download-link">
                                {data.AppStoreLink && (
                                    <a target="_blank" href={data.AppStoreLink}>
                                        <img
                                            src={`${assetPrefix}/images/banner-bottom/app-store-icon.png`}
                                            alt={'app-store'}
                                        />
                                    </a>
                                )}
                                {data.PlayStoreLink && (
                                    <a
                                        target="_blank"
                                        href={data.PlayStoreLink}
                                    >
                                        <img
                                            src={`${assetPrefix}/images/banner-bottom/google-play-icon.png`}
                                            alt={'google-play'}
                                        />
                                    </a>
                                )}
                            </div>
                        )}
                        {!isDesktop && (
                            <div className="download-link">
                                {isIos && data.AppStoreLink && (
                                    <a target="_blank" href={data.AppStoreLink}>
                                        <img
                                            src={`${assetPrefix}/images/banner-bottom/app-store-icon.png`}
                                            alt={'app-store'}
                                        />
                                    </a>
                                )}
                                {!isIos && data.PlayStoreLink && (
                                    <a
                                        target="_blank"
                                        href={data.PlayStoreLink}
                                    >
                                        <img
                                            src={`${assetPrefix}/images/banner-bottom/google-play-icon.png`}
                                            alt={'google-play'}
                                        />
                                    </a>
                                )}
                            </div>
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
