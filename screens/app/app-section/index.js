import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

import styles from './styles'
const assetDomain = process.env.config?.baseEndpoint ?? '',
    assetPrefix = process.env.config?.assetPrefix ?? ''

export default function AppSection({ data, title, isDesktop }) {
    const [heroHeight, setHeroHeight] = useState(0)

    useEffect(() => {
        if (window) {
            let heroHeightVar = window.innerHeight
            if (window.innerHeight <= 640) {
                //landscape mobile
                heroHeightVar = null
            }
            setHeroHeight(heroHeightVar)
        }

        let observerOptions = {
            rootMargin: '0px',
            threshold: [0.3],
        }

        if (typeof window.IntersectionObserver === 'undefined') {
            dynamic(() => import('intersection-observer'), {
                ssr: false,
            })
        }

        let observer = new IntersectionObserver(
            observerCallback,
            observerOptions
        )

        let target = document.querySelector('.animation-wrapper')
        observer.observe(target)
        console.log('data', data)
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
                playVideo(idInc)
            }
        }
    }

    const playVideo = (id, resetOther = false) => {
        //resetOther = true -> only when user select specific step
        if (data) {
            data.map((dt, index) => {
                const videoEl = document.getElementById(`video-${index}`)
                if (videoEl) {
                    videoEl.style.opacity = index == id ? '1' : '0'
                }

                if (index == id) {
                    const containerEl = document.getElementById(
                        `info-flow-${index}`
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
                            `#bar-${index}>span`
                        )
                        if (barEl) {
                            console.log('masuk')
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

    let deviceImage = `${assetPrefix}/images/app/device-iphone.png`
    return (
        <>
            <div
                className={`wrapper ${isDesktop ? '' : 'is-mobile'}`}
                style={{
                    height: heroHeight ? `${heroHeight}px` : 'auto',
                }}
            >
                <h2>{title || 'Get Protected by Vida in 3 Simple Steps'}</h2>
                <div className="animation-wrapper">
                    <div
                        className="device-wrapper"
                        style={{
                            backgroundImage: `url(${deviceImage})`,
                        }}
                    >
                        {data &&
                            data.map((dt, index) => (
                                <video
                                    key={dt.id}
                                    muted
                                    id={`video-${index}`}
                                    data-id={index}
                                    playsinline=""
                                >
                                    <source
                                        src={`${assetDomain}${
                                            dt?.video?.url ?? ''
                                        }`}
                                        type="video/mp4"
                                    />
                                    Your browser does not support HTML5 video.
                                </video>
                            ))}
                    </div>

                    <div className={'steps-info'}>
                        {data &&
                            data.map((dt, index) => (
                                <div
                                    key={dt.id}
                                    id={`info-flow-${index}`}
                                    className="steps-wrapper"
                                    onClick={() => {
                                        playVideo(index, true)
                                    }}
                                >
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
                            ))}
                    </div>
                </div>
            </div>

            <style jsx>{styles}</style>
        </>
    )
}
