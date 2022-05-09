import { useState, useEffect } from 'react'
import { validUrlWithParam } from 'utils/url'
import styles from './styles'

const assetDomain = process.env.config?.baseEndpoint ?? ''
export default function DownloadButton({ data, searchParam }) {
    const [isIos, setIsIos] = useState(false)

    useEffect(() => {
        if (process.browser) {
            const ios = /(iPad|iPhone|iPod)/g.test(navigator.userAgent)
            setIsIos(ios)
        }
    }, [])

    if (!data) return <></>
    return (
        <>
            {isIos && data.AppStoreLink && (
                <a
                    className="download-link"
                    target="_blank"
                    href={validUrlWithParam(data.AppStoreLink, searchParam)}
                >
                    <img
                        src={`${assetDomain}${data.AppStoreIcon?.url ?? ''}`}
                        alt={data.AppStoreIcon?.alternativeText ?? ''}
                    />
                </a>
            )}
            {!isIos && data.PlayStoreLink && (
                <a
                    className="download-link"
                    target="_blank"
                    href={validUrlWithParam(data.PlayStoreLink, searchParam)}
                >
                    <img
                        src={`${assetDomain}${data.PlayStoreIcon?.url ?? ''}`}
                        alt={data.PlayStoreIcon?.alternativeText ?? ''}
                    />
                </a>
            )}

            <style jsx>{styles}</style>
        </>
    )
}
