import { useState, useEffect } from 'react'

import styles from './styles'
const assetPrefix = process.env.config?.assetPrefix ?? '',
    assetDomain = process.env.config?.baseEndpoint ?? ''

const data = {
    id: '1',
    title: 'Have Better Comfort While Recovering',
    description: 'Focus on your well-being and less worry for your family',
    image: `${assetPrefix}/images/inpatient/hero.png`,
}

export default function SectionOne() {
    const [heroHeight, setHeroHeight] = useState(0)

    let headerHeight = 80

    useEffect(() => {
        if (window) {
            setHeroHeight(window.innerHeight)
        }

        return () => {
            document.removeEventListener('click', () => {})
        }
    }, [])

    // if (!homeData) return <Loader />

    return (
        <>
            <div
                className={`hero-wrapper`}
                style={{
                    height: `${heroHeight}px`,
                    backgroundImage: `url(${data.image})`,
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
