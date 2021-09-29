import { useState, useEffect } from 'react'
import styles from './styles'

const assetDomain = process.env.config?.baseEndpoint ?? ''

export default function AppSection({ data }) {
    const [heroHeight, setHeroHeight] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        let observerOptions = {
            rootMargin: '0px',
            threshold: [0.5],
        }
        setHeroHeight(window.innerHeight + 65)
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
        <div className="fourth-wrapper" style={{ height: `${heroHeight}px` }}>
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
                            src={`${assetDomain}${
                                data?.handphoneImage?.url ?? ''
                            }`}
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
