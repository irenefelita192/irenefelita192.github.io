import { useState, useEffect } from 'react'

import styles from './styles'
const assetDomain = process.env.config?.baseEndpoint ?? '',
    assetPrefix = process.env.config?.assetPrefix ?? ''

const data = {
    title: 'Personalize Your Healthcare',
    description:
        'We make it easy to get, manage and pay for your healthcare. Our app puts all coverages at your fingertips',
    image: '/images/app/app-hero.jpg',
    imageMobile: '',
    imageMobileWebp: '',
    imageWebp: '/images/app/app-hero.webp',
}
export default function App() {
    const [heroHeight, setHeroHeight] = useState(0)
    const [isWebpSupport, setIsWebpSupport] = useState(true)
    const [isDesktop, setIsDesktop] = useState(true)
    let headerHeight = 80

    useEffect(() => {
        if (window) {
            if (window.innerWidth < window.innerHeight) {
                setIsDesktop(false)
            }
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

    let heroImage = `${assetPrefix}${data?.image ?? ''}`
    // if (isDesktop) {
    //     if (!data.imageWebp || !isWebpSupport) {
    //         heroImage = `${assetDomain}${data?.image?.url ?? ''}`
    //     } else {
    //         heroImage = `${assetDomain}${data?.imageWebp?.url ?? ''}`
    //     }
    // } else {
    //     if (!data.imageMobileWebp || !isWebpSupport) {
    //         heroImage = `${assetDomain}${data?.imageMobile?.url ?? ''}`
    //     } else {
    //         heroImage = `${assetDomain}${data?.imageMobileWebp?.url ?? ''}`
    //     }
    // }

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
