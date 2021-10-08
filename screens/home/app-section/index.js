import { useState, useEffect } from 'react'
import styles from './styles'

const assetDomain = process.env.config?.baseEndpoint ?? ''

export default function AppSection({ data, isDesktop }) {
    const [heroHeight, setHeroHeight] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const [isLandscape, setIsLandscape] = useState(false)

    useEffect(() => {
        let observerOptions = {
            rootMargin: '0px',
            threshold: [0.5],
        }

        let containerHeight =
            window.innerWidth > 1024
                ? window.innerHeight + 45
                : window.innerHeight

        if (window && window.innerHeight < 450) {
            setIsLandscape(true)
            containerHeight = 660
        }

        setHeroHeight(containerHeight)
        var observer = new IntersectionObserver(
            observerCallback,
            observerOptions
        )

        let target = '.fourth-wrapper'
        document.querySelectorAll(target).forEach((i) => {
            if (i) {
                observer.observe(i)
            }
        })

        return () => {}
    }, [])

    const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        })
    }

    return (
        <div
            id="app"
            className={`fourth-wrapper ${isDesktop ? '' : 'is-mobile'} ${
                isLandscape ? 'is-landscape' : ''
            }`}
            style={{ height: `${heroHeight}px` }}
        >
            <div>
                <div className="clip-wrapper">
                    <div
                        className={`clip-wrapper-inner ${
                            isVisible ? 'is-visible' : ''
                        }`}
                    >
                        <img
                            className="circle circle-before"
                            src={`${assetDomain}${
                                data?.circleImage?.url ?? ''
                            }`}
                        />
                        <img
                            className="circle circle-after"
                            src={`${assetDomain}${
                                data?.circleImageAfter?.url ?? ''
                            }`}
                        />
                        <img
                            className="hp-image"
                            src={
                                isDesktop
                                    ? `${assetDomain}${
                                          data?.handphoneImage?.url ?? ''
                                      }`
                                    : `${assetDomain}${
                                          data?.handphoneImageMobile?.url ?? ''
                                      }`
                            }
                        />
                    </div>
                </div>
            </div>

            <div>
                <h2>{data.title || ''}</h2>
                <div>{data.description || ''}</div>
            </div>
            <style jsx>{styles}</style>
        </div>
    )
}
