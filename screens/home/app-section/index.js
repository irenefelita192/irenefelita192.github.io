import { useState, useEffect } from 'react'
import styles from './styles'

const assetDomain = process.env.config?.baseEndpoint ?? ''

export default function AppSection({ data, isDesktop }) {
    const [heroHeight, setHeroHeight] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        let observerOptions = {
            rootMargin: '0px',
            threshold: [0.5],
        }
        setHeroHeight(
            window.innerWidth > 1024
                ? window.innerHeight + 45
                : window.innerHeight
        )
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
            className={`fourth-wrapper ${isDesktop ? '' : 'is-mobile'}`}
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
                        {/* <svg
                            width="555"
                            height="558"
                            viewBox="0 0 555 558"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <clipPath id="svgPath">
                                <path
                                    d="M233.245 6.2194C359.55 -16.3472 454.027 30.6385 516.675 147.176C579.322 263.714 563.492 370.822 469.184 468.498C374.876 566.174 268.105 583.015 148.873 519.02C29.6403 455.025 -17.6822 359.201 6.90526 231.549C31.4927 103.896 106.939 28.786 233.245 6.2194Z"
                                    fill="url(#paint0_linear)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear"
                                        x1="221.533"
                                        y1="979.263"
                                        x2="409.667"
                                        y2="-232.304"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop
                                            offset="0.115494"
                                            stop-color="#6FA9CF"
                                        />
                                        <stop
                                            offset="0.487482"
                                            stop-color="#0CC1B7"
                                        />
                                        <stop
                                            offset="0.763524"
                                            stop-color="#9CEEC2"
                                        />
                                        <stop offset="1" stop-color="#ADEF7A" />
                                    </linearGradient>
                                </defs>
                            </clipPath>
                        </svg> */}
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
