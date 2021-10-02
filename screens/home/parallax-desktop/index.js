import { useState, useEffect } from 'react'
import { getCookie } from 'utils/global-util'
import styles from './styles'
import { constant } from './constant'
const assetDomain = process.env.config?.baseEndpoint ?? '',
    assetPrefix = process.env.config?.assetPrefix ?? ''

export default function HomeScreen({ sectionOne, sectionTwo, isPortrait }) {
    if (!sectionOne) return <></>

    const [heroHeight, setHeroHeight] = useState(0)
    const [iconHeight, setIconHeight] = useState({
        inpatient: 0,
        maternity: 0,
        dental: 0,
        outpatient: 0,
    })

    const [iconWrapperSize, setIconWrapperSize] = useState({
        width: 600,
        height: 300,
    })

    let headerHeight = 80,
        secondPosTop = 0,
        stickyPosTop = 0,
        inpatientTopView = 0,
        animatePosX = 0,
        animatePosY = 0,
        animateRightPosX = 0,
        animateScale = 1

    useEffect(() => {
        if (window) {
            setHeroHeight(
                window.innerWidth > 1280 ? window.innerWidth * 0.55 : 660
            )
            setIconHeight({
                inpatient: (7.6 / 100) * window.innerWidth,
                maternity: (6 / 100) * window.innerWidth,
                dental: (7.6 / 100) * window.innerWidth,
                outpatient: (6 / 100) * window.innerWidth,
            })
            setIconWrapperSize({
                width: (35 / 100) * window.innerWidth,
                height: (21 / 100) * window.innerWidth,
            })
        }
    }, [])

    useEffect(() => {
        if (window && heroHeight > 0) {
            window.addEventListener('scroll', handleScroll)
            const secondWrapper = document.getElementById('second-wrapper')

            if (secondWrapper) {
                secondPosTop = secondWrapper.offsetTop
                if (window.innerWidth <= 1280) {
                    stickyPosTop = secondPosTop + (14 / 100) * window.innerWidth
                } else if (window.innerWidth <= 1366) {
                    stickyPosTop = secondPosTop + (12 / 100) * window.innerWidth
                } else if (window.innerWidth <= 1440) {
                    stickyPosTop = secondPosTop + (8 / 100) * window.innerWidth // 8% = jarak hero kedua dh title
                } else if (window.innerWidth <= 1680) {
                    stickyPosTop = secondPosTop + (6 / 100) * window.innerWidth
                } else if (window.innerWidth <= 1920) {
                    stickyPosTop = secondPosTop - (5 / 100) * window.innerWidth
                }

                const imgEl = document.querySelector(`#second-bg`)
                const overlayImg = document.getElementById('overlay-image')
                if (imgEl.complete) {
                    const imgHeight =
                        (imgEl.naturalHeight / imgEl.naturalWidth) *
                        window.innerWidth
                    secondWrapper.style.height = `${imgHeight}px`
                    overlayImg.style.opacity = '1'
                } else {
                    imgEl.onload = () => {
                        const imgHeight =
                            (imgEl.naturalHeight / imgEl.naturalWidth) *
                            window.innerWidth
                        secondWrapper.style.height = `${imgHeight}px`
                        overlayImg.style.opacity = '1'
                    }
                }
            }

            setTimeout(() => {
                resetInitialAnimation()
            }, 1000)
        }
    }, [heroHeight])

    const resetInitialAnimation = () => {
        document
            .querySelectorAll('.hero-image .animate')
            .forEach((el) => el.classList.remove('animate'))
    }
    let timeout = false

    const handleScroll = (e) => {
        if (!timeout) {
            timeout = setTimeout(function () {
                clearTimeout(timeout)
                timeout = false

                let scrollTop = window.pageYOffset

                const inpatient = document.getElementById('icon-inpatient'),
                    dental = document.getElementById('icon-dental'),
                    maternity = document.getElementById('icon-maternity'),
                    outpatient = document.getElementById('icon-outpatient'),
                    outpatientDiv = document.querySelector(
                        '#icon-outpatient > div'
                    ),
                    heroImage = document.getElementById('hero-image')

                if (!inpatientTopView) {
                    inpatientTopView = inpatient.offsetTop + heroImage.offsetTop

                    const calcScrollTop = stickyPosTop - inpatientTopView
                    animatePosX = calcScrollTop * 0.035
                    animatePosY = calcScrollTop * 0.3
                    animateRightPosX = calcScrollTop * 0.05
                    animateScale = 1 - calcScrollTop * 0.0002
                }
                let inpatientTop = inpatientTopView + scrollTop

                const posX = scrollTop * 0.035,
                    posY = scrollTop * 0.3,
                    rightPosX = scrollTop * 0.05,
                    scale = 1 - scrollTop * 0.0002,
                    opRightPos = constant.opRight - scrollTop * 0.021

                if (inpatientTop <= stickyPosTop && stickyPosTop > 0) {
                    if (inpatient.classList.contains('revolve')) {
                        inpatient.classList.remove('revolve')
                        dental.classList.remove('revolve')
                        maternity.classList.remove('revolve')
                        outpatient.classList.remove('revolve')
                    } else {
                        inpatient.style.transition = `transform 0.1s linear`
                        dental.style.transition = `transform 0.1s linear`
                        maternity.style.transition = `transform 0.1s linear`
                        outpatient.style.transition = `transform 0.1s linear`
                    }
                    inpatient.style.transform = `translate( ${posX}%, ${posY}%) scale(${scale})`
                    dental.style.transform = `translate( ${posX}%, ${posY}%) scale(${scale})`
                    maternity.style.transform = `translate( ${rightPosX}%, ${posY}%) scale(${scale})`
                    outpatient.style.transform = `translate( ${rightPosX}%, ${posY}%) scale(${scale})`
                    outpatientDiv.style.right = `${opRightPos}%`
                } else if (stickyPosTop > 0) {
                    if (inpatient.classList.contains('revolve')) {
                    } else {
                        inpatient.style.transition = `all 0.5s ease-in`
                        inpatient.style.transform = `translate( ${
                            animatePosX + 10
                        }%, ${animatePosY + 70}%) scale(${animateScale})`
                        inpatient.classList.add('revolve')

                        dental.style.transition = `all 0.5s ease-in`
                        dental.style.transform = `translate( ${
                            animatePosX + 10
                        }%, ${animatePosY + 85}%) scale(${animateScale})`

                        dental.classList.add('revolve')

                        maternity.style.transition = `all 0.5s ease-in`
                        maternity.style.transform = `translate( ${
                            animateRightPosX + 8
                        }%, ${animatePosY + 55}%) scale(${animateScale})`

                        maternity.classList.add('revolve')

                        outpatient.style.transition = `all 0.5s ease-in`
                        outpatient.style.transform = `translate( ${
                            animateRightPosX + 8
                        }%, ${animatePosY + 90}%) scale(${animateScale})`

                        outpatient.classList.add('revolve')
                    }
                } else {
                    inpatient.classList.remove('revolve')
                    dental.classList.remove('revolve')
                    maternity.classList.remove('revolve')
                    outpatient.classList.remove('revolve')
                }
            }, 100)
        }
    }

    // if (!homeData) return <Loader />

    let heroImg = sectionOne.shamrockImage
        ? `${assetDomain}${sectionOne.shamrockImage.url}`
        : ''
    // if (isPortrait) {
    //     heroImg = header.mobileImage
    //         ? `${assetDomain}${header.mobileImage.url}`
    //         : ''
    // }

    return (
        <>
            <div
                className={`hero-wrapper`}
                style={{
                    backgroundImage: `url(${heroImg})`,
                    height: `${heroHeight + headerHeight}px`,
                }}
            >
                <div className="hero-text">
                    <div className="hero-title">
                        <h1>{sectionOne.title || ''}</h1>
                    </div>
                    <div className="hero-desc">
                        {sectionOne.description || ''}
                    </div>
                </div>
                <div className="hero-image" id="hero-image">
                    <img
                        src={`${assetDomain}${
                            sectionOne?.familyImage?.url ?? ''
                        }`}
                    />
                    {/* <div id="hero-icon-all" className="hero-icon-all"> */}
                    <div
                        id="icon-inpatient"
                        className={'hero-icon hero-icon--inpatient animate'}
                        style={{
                            width: `${iconWrapperSize.width}px`,
                            height: `${iconWrapperSize.height}px`,
                        }}
                    >
                        <div
                            style={{
                                width: `${iconWrapperSize.width}px`,
                                height: `${iconWrapperSize.height}px`,
                            }}
                        >
                            <img
                                style={{
                                    width: `${iconHeight.inpatient}px`,
                                }}
                                src={`${assetDomain}${
                                    sectionOne?.inpatientIcon?.url ?? ''
                                }`}
                            />
                        </div>
                    </div>
                    <div
                        id="icon-maternity"
                        className={'hero-icon hero-icon--maternity animate'}
                        style={{
                            width: `${iconWrapperSize.width}px`,
                            height: `${iconWrapperSize.height}px`,
                        }}
                    >
                        <div
                            style={{
                                width: `${iconWrapperSize.width}px`,
                                height: `${iconWrapperSize.height}px`,
                            }}
                        >
                            <img
                                style={{
                                    width: `${iconHeight.maternity}px`,
                                }}
                                src={`${assetDomain}${
                                    sectionOne?.maternityIcon?.url ?? ''
                                }`}
                            />
                        </div>
                    </div>
                    <div
                        id="icon-outpatient"
                        className={'hero-icon hero-icon--outpatient animate'}
                        style={{
                            width: `${iconWrapperSize.width}px`,
                            height: `${iconWrapperSize.height}px`,
                        }}
                    >
                        <div
                            style={{
                                width: `${iconWrapperSize.width}px`,
                                height: `${iconWrapperSize.height}px`,
                            }}
                        >
                            <img
                                style={{
                                    width: `${iconHeight.outpatient}px`,
                                }}
                                src={`${assetDomain}${
                                    sectionOne?.outpatientIcon?.url ?? ''
                                }`}
                            />
                        </div>
                    </div>

                    <div
                        id="icon-dental"
                        className={'hero-icon hero-icon--dental animate'}
                        style={{
                            width: `${iconWrapperSize.width}px`,
                            height: `${iconWrapperSize.height}px`,
                        }}
                    >
                        <div
                            style={{
                                width: `${iconWrapperSize.width}px`,
                                height: `${iconWrapperSize.height}px`,
                            }}
                        >
                            <img
                                style={{
                                    width: `${iconHeight.dental}px`,
                                }}
                                src={`${assetDomain}${
                                    sectionOne?.dentalIcon?.url ?? ''
                                }`}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {sectionTwo && (
                <div id="second-wrapper" className="second-wrapper">
                    <div className="second-text">
                        <div className="second-title">
                            <h2> {sectionTwo.title || ''}</h2>
                        </div>
                        <div className="second-desc">
                            {sectionTwo.description || ''}
                        </div>
                    </div>
                    <img
                        id="second-bg"
                        className="second-bg"
                        src={`${assetDomain}${
                            sectionTwo?.backgroundImage?.url ?? ''
                        }`}
                    />

                    <img
                        id="overlay-image"
                        className="overlay-image"
                        src={`${assetDomain}${
                            sectionTwo?.familyImage?.url ?? ''
                        }`}
                    />
                </div>
            )}

            <style jsx>{styles}</style>
        </>
    )
}
