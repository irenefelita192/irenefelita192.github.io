import { useState, useEffect } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getHeroTop } from '../../services/common'
import { getCookie } from '../../util/global-util'

import styles from './styles'

export default function Hero({ id }) {
    const [heroData, setHeroData] = useState(null)
    const [isWebp, setIsWebp] = useState(true)

    useAsyncEffect(async (isMounted) => {
        let langId
        if (process.browser) {
            langId = getCookie('lang')
        }

        const heroData = await getHeroTop(langId ? langId : 'id', id)

        if (!isMounted()) return

        setHeroData(heroData ? heroData[0] : null)
    }, [])

    useEffect(() => {
        if (process.browser) {
            if (window.Modernizr.webp) {
                setIsWebp(true)
            } else {
                setIsWebp(false)
            }
        }
    }, [])

    const assetDomain = process.env.config?.endpoints?.asset ?? '',
        heroImg = isWebp
            ? heroData?.heroImgWebp?.url ?? heroData?.heroImg?.url ?? ''
            : heroData?.heroImg?.url ?? ''

    return (
        <>
            {heroData && (
                <div className="hero-wrapper">
                    {heroImg && (
                        <>
                            <img src={`${assetDomain}${heroImg}`} />
                            <div className="background-bottom" />
                            <div className="background-overlay" />
                        </>
                    )}
                    <span> {heroData?.heroTitle ?? ''}</span>
                </div>
            )}
            <style jsx>{styles}</style>
        </>
    )
}
