import { useState, useEffect } from 'react'

import styles from './styles'
const assetDomain = process.env.config?.baseEndpoint ?? ''

export default function SectionOne({ data, isDesktop }) {
    const [heroHeight, setHeroHeight] = useState(0)
    const [isWebpSupport, setIsWebpSupport] = useState(true)
    let headerHeight = 80

    useEffect(() => {
        if (window) {
            setHeroHeight(window.innerHeight)
            if (window.Modernizr.webp) {
                setIsWebpSupport(true)
            } else {
                setIsWebpSupport(false)
            }
        }

        return () => {
            document.removeEventListener('click', () => {})
        }
    }, [])

    let heroImage = ''
    if (isDesktop) {
        if (!data.imageWebp || !isWebpSupport) {
            heroImage = `${assetDomain}${data.image.url}`
        } else {
            heroImage = `${assetDomain}${data.imageWebp.url}`
        }
    } else {
        if (!data.imageMobileWebp || !isWebpSupport) {
            heroImage = `${assetDomain}${data.imageMobile.url}`
        } else {
            heroImage = `${assetDomain}${data.imageMobileWebp.url}`
        }
    }

    return (
        <>
            <div
                className={`hero-wrapper ${isDesktop ? '' : 'is-mobile'}`}
                style={{
                    height: `${heroHeight}px`,
                    backgroundImage: `url(${heroImage})`,
                }}
            >
                <div className="hero-text">
                    <h1>{data?.title ?? ''}</h1>
                    <div>{data?.description ?? ''}</div>
                </div>
            </div>

            <style jsx>{styles}</style>
        </>
    )
}
