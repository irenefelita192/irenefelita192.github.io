import { useState, useEffect } from 'react'
import styles from './styles'

const assetDomain = process.env.config?.baseEndpoint ?? '',
    assetPrefix = process.env.config?.assetPrefix ?? ''

export default function AppSection() {
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
                console.log('ininiiini', entry.isIntersectionRatio)
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
                            src={`${assetPrefix}/images/home/bg-app-before.svg`}
                        />
                        <img
                            className="circle circle-after"
                            src={`${assetPrefix}/images/home/bg-app-after.svg`}
                        />
                        <img
                            className="hp-image"
                            src={`${assetPrefix}/images/home/hp.png`}
                        />
                    </div>
                </div>
            </div>

            <div>
                <h2>You’re in Control Only With a Few Taps</h2>
                <div>
                    We make it happen with a mobile app that fits everyone’s
                    needs. Manage your protection single handedly. Never has it
                    been simpler and better with Vida.
                </div>
            </div>
            <style jsx>{styles}</style>
        </div>
    )
}
