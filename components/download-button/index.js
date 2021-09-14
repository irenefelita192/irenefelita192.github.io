import { useState, useEffect } from 'react'
import styles from './styles'

export default function DownloadButton({ data }) {
    const assetDomain = process.env.config?.baseEndpoint ?? ''
    const [isIos, setIsIos] = useState(false)

    useEffect(() => {
        if (process.browser) {
            const ios = /(iPad|iPhone|iPod)/g.test(navigator.userAgent)
            setIsIos(ios)
        }
    }, [])

    return (
        <>
            {isIos && (
                <a className="download-link" href={data.AppStoreLink}>
                    <img
                        src={`${assetDomain}${data.AppStoreIcon?.url ?? ''}`}
                        alt={data.AppStoreIcon?.alternativeText ?? ''}
                    />
                </a>
            )}
            {!isIos && (
                <a className="download-link" href={data.PlayStoreLink}>
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
