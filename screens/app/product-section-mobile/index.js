import { useState, useEffect } from 'react'
import DOMPurify from 'isomorphic-dompurify'
import('intersection-observer')
import styles from './styles'
const assetDomain = process.env.config?.baseEndpoint ?? '',
    assetPrefix = process.env.config?.assetPrefix ?? ''

export default function ProductSection({ data, content, isDesktop }) {
    const [heroHeight, setHeroHeight] = useState(0)
    const [videoIdPlay, setVideoIdPlay] = useState(null)
    const [canAutoplay, setCanAutoplay] = useState(true)

    useEffect(() => {
        if (window) {
            let heroHeightVar = window.innerHeight
            if (
                window.innerWidth > window.innerHeight &&
                window.innerHeight <= 600
            ) {
                //landscape mobile
                heroHeightVar = null
            }
            setHeroHeight(heroHeightVar)
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
                const spanEl = document.getElementById(dt.productId)
                if (spanEl) {
                    spanEl.style.color = dt.color
                    spanEl.onclick = productClick
                }
                const videoEl = document.getElementById(`video-${dt.productId}`)
                if (videoEl) {
                    videoEl.ontimeupdate = videoTimeUpdate
                }
            })
        }

        return () => {
            document.removeEventListener('click', () => {})
        }
    }, [])

    const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (data && data.length > 1) {
                    setBgProduct(data[0])
                    setVideoIdPlay(data[0].productId)
                    playVideo(data[0].productId)
                }
            }
        })
    }

    const productClick = (e) => {
        const id = e.currentTarget.id,
            prodData = data && data.find((dt) => dt.productId == id)
        if (prodData) {
            setBgProduct(prodData)
            playVideo(prodData.productId)
        }
    }

    const videoTimeUpdate = (event) => {
        const currentTime = event.currentTarget?.currentTime ?? 1,
            duration = event.currentTarget?.duration ?? 1,
            inc = event.currentTarget?.dataset?.inc ?? '',
            timePlayed = (currentTime / duration) * 100

        if (timePlayed == 100 && data) {
            const idInc = parseInt(inc) + 1
            const prodData = idInc < data.length ? data[idInc] : data[0]
            if (prodData) {
                playVideo(prodData?.productId ?? '')
                setBgProduct(prodData)
                setVideoIdPlay(prodData?.productId ?? '')
            }
        }
    }

    const setBgProduct = (prodData) => {
        const id = prodData?.productId ?? ''
        const spanEl = document.getElementById(id)
        const bgEl = document.getElementById('bg-color')

        if (spanEl) {
            const spanTop = spanEl.offsetTop,
                spanLeft = spanEl.offsetLeft,
                spanWidth = spanEl.offsetWidth,
                spanHeight = spanEl.offsetHeight
            if (bgEl) {
                bgEl.style.transform = `translate3d(${
                    spanLeft - 4
                }px, ${spanTop}px, 0)`
                bgEl.style.width = `${spanWidth + 8}px`
                bgEl.style.height = `${spanHeight + 1}px`
                bgEl.style.backgroundColor = prodData?.color ?? '#F88449'
                spanEl.style.color = '#FFFFFF'
            }
        }
    }

    const handleManualPlay = () => {
        if (data) {
            data.map((dt) => {
                const videoEl = document.getElementById(`video-${dt.productId}`)
                const spanEl = document.getElementById(dt.productId)
                const videoPlayIcon = document.getElementById(
                    `video-play-${dt.productId}`
                )
                if (videoPlayIcon) videoPlayIcon.style.display = 'block'
                if (videoEl) {
                    videoEl.style.opacity =
                        dt.productId == videoIdPlay ? '1' : '0'
                }
                if (dt.productId == videoIdPlay) {
                    if (videoEl) {
                        videoEl.play()
                        setCanAutoplay(true)
                    }
                } else {
                    spanEl.style.color = dt.color
                    if (videoEl) {
                        videoEl.pause()
                        videoEl.currentTime = 0
                    }
                }
            })
        }
    }

    const playVideo = (id) => {
        if (data) {
            data.map((dt) => {
                const videoEl = document.getElementById(`video-${dt.productId}`)
                const spanEl = document.getElementById(dt.productId)
                if (videoEl) {
                    videoEl.style.opacity = dt.productId == id ? '1' : '0'
                }
                if (dt.productId == id) {
                    if (videoEl) {
                        // videoEl.play()
                        videoEl.muted = true
                        var promise = videoEl.play()

                        if (promise !== undefined) {
                            promise
                                .then((_) => {
                                    // Autoplay started!
                                })
                                .catch((error) => {
                                    // Autoplay not allowed!
                                    // Show something in the UI that the video is muted
                                    setCanAutoplay(false)
                                })
                        }
                    }
                } else {
                    spanEl.style.color = dt.color
                    if (videoEl) {
                        videoEl.pause()
                        videoEl.currentTime = 0
                    }
                }
            })
        }
    }

    const sanitizedContent = DOMPurify.sanitize(content, {
        USE_PROFILES: { html: true },
    })
    return (
        <>
            <div
                id="protection"
                className={`wrapper ${isDesktop ? '' : 'is-mobile'}`}
                style={{
                    height: 'auto',
                }}
            >
                <div 
                    className="animation-wrapper"
                    style={{
                        height: heroHeight ? `${heroHeight}px` : 'auto',
                    }}
                >
                    <div className="video-wrapper">
                        {!canAutoplay && (
                            <div
                                className={`video-play`}
                                id={`video-play`}
                                onClick={() => handleManualPlay()}
                            >
                                <img
                                    src={`${assetPrefix}/images/app/play-icon.svg`}
                                />
                            </div>
                        )}
                        {data &&
                            data.map((dt, index) => {
                                return (
                                    <>
                                        <video
                                            key={dt.id}
                                            muted
                                            id={`video-${dt.productId}`}
                                            data-id={dt.productId}
                                            data-inc={index}
                                            playsInline
                                        >
                                            <source
                                                src={`${assetDomain}${
                                                    dt?.video?.url ?? ''
                                                }`}
                                                type="video/mp4"
                                            />
                                            Your browser does not support HTML5
                                            video.
                                        </video>
                                    </>
                                )
                            })}
                    </div>
                    <div className="content-wrapper">
                        <div id="bg-color" className="bg-color" />
                        <div
                            className="content"
                            dangerouslySetInnerHTML={{
                                __html: sanitizedContent,
                            }}
                        />
                    </div>
                </div>
            </div>

            <style jsx>{styles}</style>
        </>
    )
}
