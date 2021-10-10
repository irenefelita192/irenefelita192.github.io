import { first } from 'lodash'
import { useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import styles from './styles'

const assetDomain = process.env.config?.baseEndpoint ?? '',
    assetPrefix = process.env.config?.assetPrefix ?? ''

const data = [
    {
        id: 1,
        title: 'Understanding Your Needs',
        description:
            'Select the best plan for you and your family from a wide range of options.',
        video: `${assetPrefix}/images/app/flow-1-Understanding your need.mov`,
    },
    {
        id: 2,
        title: 'Fast Onboarding',
        description: 'Simple application with a full online process.',
        video: `${assetPrefix}/images/app/flow-2-Easy onboarding.mov`,
    },
    {
        id: 3,
        title: 'Easy Payment',
        description:
            'Payment can be done within minutes to activate a new policy.',
        video: `${assetPrefix}/images/app/flow-3-Easy payment.mov`,
    },
]
export default function AppSectionMobile({ isDesktop }) {
    const [heroHeight, setHeroHeight] = useState(0)
    const [wrapperHeight, setWrapperHeight] = useState(0)
    const [deviceWidth, setDeviceWidth] = useState(0)
    const [isWebpSupport, setIsWebpSupport] = useState(true)
    const [currentSlide, setCurrentSlide] = useState(0)
    let headerHeight = 80,
        deviceHeightPercent = 48 / 100,
        headingHeight = 189

    useEffect(() => {
        if (window) {
            const heroHeightVar = window.innerHeight
            setHeroHeight(heroHeightVar)
            setWrapperHeight(heroHeightVar - headingHeight)

            const devWidth = Math.floor(
                ((((heroHeightVar - headingHeight) * 73) / 100) * 46) / 100
            )
            setDeviceWidth(devWidth)
            if (window.Modernizr.webp) {
                setIsWebpSupport(true)
            } else {
                setIsWebpSupport(false)
            }
        }

        let observerOptions = {
            rootMargin: '0px',
            threshold: [0.3],
        }

        let observer = new IntersectionObserver(
            observerCallback,
            observerOptions
        )

        let target = document.querySelector('.wrapper .carousel-root')
        observer.observe(target)

        if (data) {
            data.map((dt, index) => {
                const videoEl = document.getElementById(`video-${index}`)
                if (videoEl) {
                    videoEl.ontimeupdate = videoTimeUpdate
                }
            })
        }

        return () => {
            document.removeEventListener('click', () => {})
        }
    }, [])

    const videoTimeUpdate = (event) => {
        const currentTime = event.currentTarget?.currentTime ?? 1,
            duration = event.currentTarget?.duration ?? 1,
            id = event.currentTarget?.dataset?.id ?? '',
            timePlayed = (currentTime / duration) * 100
        const bar = document.querySelector(`#bar-${id}>span`)

        if (bar) bar.style.width = `${timePlayed}%`

        if (timePlayed == 100) {
            const idInc = parseInt(id) + 1

            if (idInc < data.length) {
                setCurrentSlide(idInc)
                playVideo(idInc)
            }
        }
    }

    const playVideo = (id, resetOther = false) => {
        //resetOther = true -> only when user select specific step
        if (data) {
            data.map((dt, index) => {
                const videoEl = document.getElementById(`video-${index}`)
                if (index == id) {
                    const containerEl = document.getElementById(
                        `info-flow-${index}`
                    )
                    if (containerEl) {
                        containerEl.classList.add('is-active')
                    }

                    if (videoEl) {
                        videoEl.play()
                    }
                } else {
                    if (resetOther) {
                        if (videoEl) {
                            videoEl.pause()
                            videoEl.currentTime = 0
                        }

                        const barEl = document.querySelector(
                            `#bar-${index}>span`
                        )
                        if (barEl) {
                            barEl.style.width = '0'
                        }
                        const containerEl = document.getElementById(
                            `info-flow-${index}`
                        )
                        if (containerEl) {
                            containerEl.classList.remove('is-active')
                        }
                    }
                }
            })
        }
    }

    const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                playVideo(0)
            }
        })
    }

    const customRenderItem = (item, props) => (
        <item.type {...item.props} {...props} />
    )

    const updateCurrentSlide = (index) => {
        if (currentSlide !== index) {
            setCurrentSlide(index)
            playVideo(index, true)
        }
    }

    let deviceImage = `${assetPrefix}/images/app/device-iphone.png`
    return (
        <>
            <div
                className={`wrapper ${isDesktop ? '' : 'is-mobile'}`}
                style={{
                    height: `${heroHeight}px`,
                }}
            >
                <h2>
                    {data?.title ?? 'Get Protected by Vida in 3 Simple Steps'}
                </h2>

                <Carousel
                    showThumbs={false}
                    showIndicators={false}
                    showArrows={false}
                    showStatus={false}
                    selectedItem={currentSlide}
                    interval={9999999}
                    onChange={updateCurrentSlide}
                    autoPlay={false}
                    renderItem={customRenderItem}
                >
                    {data &&
                        data.map((dt, index) => (
                            <div
                                className="animation-wrapper"
                                key={dt.id}
                                style={{ height: `${wrapperHeight}px` }}
                            >
                                <div
                                    className="device-wrapper"
                                    style={{
                                        width: `${deviceWidth}px`,
                                        backgroundImage: `url(${deviceImage})`,
                                    }}
                                >
                                    <video
                                        muted
                                        id={`video-${index}`}
                                        data-id={index}
                                    >
                                        <source
                                            src={dt.video}
                                            type="video/mp4"
                                        />
                                        Your browser does not support HTML5
                                        video.
                                    </video>
                                </div>
                                <div className="steps-wrapper">
                                    <div
                                        id={`bar-${index}`}
                                        className="progress-bar"
                                    >
                                        <span></span>
                                    </div>
                                    <div className="steps-title">
                                        {dt.title}
                                    </div>
                                    <div className="steps-desc">
                                        {dt.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                </Carousel>
            </div>

            <style jsx>{styles}</style>
            <style jsx global>
                {`
                    .carousel .slide:nth-child(${currentSlide + 2}) {
                        margin-left: -20%;
                    }

                    .carousel .slide.selected {
                        margin-left: 0;
                    }

                    @media screen and (min-width: 700px) {
                        .carousel .slide:nth-child(${currentSlide + 2}) {
                            margin-left: -25%;
                        }
                    }
                `}
            </style>
        </>
    )
}
