import { useState, useEffect } from 'react'
import { validUrlWithUTM } from 'utils/url'
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
                    href={validUrlWithUTM(data.AppStoreLink, searchParam, true)}
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
                    href={validUrlWithUTM(data.PlayStoreLink, searchParam)}
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
