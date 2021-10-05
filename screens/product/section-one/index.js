import { useState, useEffect } from 'react'

import styles from './styles'
const assetPrefix = process.env.config?.assetPrefix ?? '',
    assetDomain = process.env.config?.baseEndpoint ?? ''

const data = {
    id: '1',
    title: 'Have Better Comfort While Recovering',
    description: 'Focus on your well-being and less worry for your family',
    image: `/images/inpatient/hero.png`,
    imageWebp: `${assetPrefix}/images/inpatient/hero.webp`,
}

export default function SectionOne() {
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

    let heroImage = `${assetPrefix}${data.imageWebp}`
    if (!data.imageWebp || !isWebpSupport) {
        heroImage = `${assetPrefix}${data.image}`
    }

    return (
        <>
            <div
                className={`hero-wrapper`}
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
