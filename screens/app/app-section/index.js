import { first } from 'lodash'
import { useState, useEffect } from 'react'

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
export default function App({ isDesktop }) {
    const [heroHeight, setHeroHeight] = useState(0)
    const [isWebpSupport, setIsWebpSupport] = useState(true)
    let headerHeight = 80

    useEffect(() => {
        if (window) {
            setHeroHeight(window.innerHeight + headerHeight)
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

        let target = document.querySelector('.animation-wrapper')
        observer.observe(target)

        if (data) {
            data.map((dt) => {
                const videoEl = document.getElementById(`video-${dt.id}`)
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

        document.querySelector(`#bar-${id}>span`).style.width = `${timePlayed}%`

        if (timePlayed == 100) {
            const idInc = parseInt(id) + 1
            if (idInc <= data.length) {
                playVideo(idInc)
            }
        }
    }

    const playVideo = (id, resetOther = false) => {
        //resetOther = true -> only when user select specific step
        if (data) {
            data.map((dt) => {
                const videoEl = document.getElementById(`video-${dt.id}`)
                if (videoEl) {
                    videoEl.style.opacity = dt.id == id ? '1' : '0'
                }

                if (dt.id == id) {
                    const containerEl = document.getElementById(
                        `info-flow-${dt.id}`
                    )
                    if (containerEl) {
                        containerEl.classList.add('is-active')
                    }
                    if (videoEl) videoEl.play()
                } else {
                    if (resetOther) {
                        if (videoEl) {
                            videoEl.pause()
                            videoEl.currentTime = 0
                        }

                        const barEl = document.querySelector(
                            `#bar-${dt.id}>span`
                        )
                        if (barEl) {
                            console.log('masuk')
                            barEl.style.width = '0'
                        }
                        const containerEl = document.getElementById(
                            `info-flow-${dt.id}`
                        )
                        if (containerEl) {
                            containerEl.classList.remove('is-active')
                        }
                    }
                }
            })
        }
    }

    const playSelectedVideo = () => {}

    const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = data.length > 1 ? data[0].id : ''
                playVideo(id)
            } else {
            }
        })
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
                <div className="animation-wrapper">
                    <div
                        className="device-wrapper"
                        style={{
                            backgroundImage: `url(${deviceImage})`,
                        }}
                    >
                        {data &&
                            data.map((dt) => (
                                <video
                                    muted
                                    id={`video-${dt.id}`}
                                    data-id={dt.id}
                                >
                                    <source src={dt.video} type="video/mp4" />
                                    Your browser does not support HTML5 video.
                                </video>
                            ))}
                        {/* <video id="flow-1">
                            <source src={flowOne} type="video/mp4" />
                            Your browser does not support HTML5 video.
                        </video>
                        <video id="flow-2">
                            <source src={flowTwo} type="video/mp4" />
                            Your browser does not support HTML5 video.
                        </video>
                        <video id="flow-3">
                            <source src={flowThree} type="video/mp4" />
                            Your browser does not support HTML5 video.
                        </video> */}
                    </div>

                    <div className={'steps-info'}>
                        {data &&
                            data.map((dt) => (
                                <div
                                    id={`info-flow-${dt.id}`}
                                    className="steps-wrapper"
                                    onClick={() => {
                                        playVideo(dt.id, true)
                                    }}
                                >
                                    <div
                                        id={`bar-${dt.id}`}
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
                            ))}
                        {/* <div id="info-flow-1" className="steps-wrapper">
                            <div id="bar-1" className="progress-bar"></div>
                            <div className="steps-title">
                                Understanding Your Needs
                            </div>
                            <div className="steps-desc">
                                Select the best plan for you and your family
                                from a wide range of options.
                            </div>
                        </div>
                        <div id="info-flow-2" className="steps-wrapper">
                            <div id="bar-2" className="progress-bar"></div>
                            <div className="steps-title">
                                Understanding Your Needs
                            </div>
                            <div className="steps-desc">
                                Select the best plan for you and your family
                                from a wide range of options.
                            </div>
                        </div>
                        <div id="info-flow-3" className="steps-wrapper">
                            <div id="bar-3" className="progress-bar"></div>
                            <div className="steps-title">
                                Understanding Your Needs
                            </div>
                            <div className="steps-desc">
                                Select the best plan for you and your family
                                from a wide range of options.
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            <style jsx>{styles}</style>
        </>
    )
}
