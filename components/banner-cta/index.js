import { useState, useEffect } from 'react'
import styles from './styles'

const assetDomain = process.env.config?.baseEndpoint ?? ''
export default function BannerCTA({ data, type = '' }) {
    const [isIos, setIsIos] = useState(false)

    useEffect(() => {
        if (process.browser && type == 'download') {
            const ios = /(iPad|iPhone|iPod)/g.test(navigator.userAgent)
            setIsIos(ios)
        }
    }, [])

    if (!data) return <></>
    return (
        <>
            <div
                className={`banner-section ${
                    type == 'download' ? 'is-download' : ''
                }`}
                style={{ backgroundColor: '#3989D7' }}
            >
                <div>Start Your Own Health Journey with Ease</div>
                <div className="banner-desc">
                    Get started now by downloading our mobile app
                </div>
                {type == 'download' ? (
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
                    <a className="banner-link" href={data.goodThingButtonLink}>
                        Explore Vida
                    </a>
                    // </div>
                )}
            </div>
            <style jsx>{styles}</style>
        </>
    )
}
