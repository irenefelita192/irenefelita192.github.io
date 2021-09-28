import { useState, useEffect } from 'react'
import { getCookie } from 'utils/global-util'
import styles from './styles'
import { constant } from './constant'
const assetDomain = process.env.config?.baseEndpoint ?? '',
    assetPrefix = process.env.config?.assetPrefix ?? ''

export default function HomeScreen({ homeData, isPortrait }) {
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

    // const [stickyPosTop, setStickyPosTop] = useState(0)

    let headerHeight = 80,
        secondPosTop = 0,
        stickyPosTop = 0,
        // inpatientSecondPos = 0,
        inpatientTopView = 0

    useEffect(() => {
        let langId
        if (window) {
            langId = getCookie('lang')
            // const mob =
            //     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            //         navigator.userAgent
            //     )
            // console.log('ismobile', mob)
            // setIsMobile(mob)
            setHeroHeight(window.innerHeight)
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

            // const secondWrapper = document.getElementById('second-wrapper')
            // console.log('secondWrapper', secondWrapper)
            // if (secondWrapper) {
            //     secondPosTop = secondWrapper.offsetTop

            //     inpatientSecondPos =
            //         secondPosTop + (8 / 100) * window.innerWidth // 10% for title offset
            //     const imgEl = document.querySelector(`#second-bg`)
            //     const overlayImg = document.getElementById('overlay-image')
            //     if (imgEl.complete) {
            //         const imgHeight =
            //             (imgEl.naturalHeight / imgEl.naturalWidth) *
            //             window.innerWidth
            //         secondWrapper.style.height = `${imgHeight}px`
            //         overlayImg.style.opacity = '1'
            //     } else {
            //         imgEl.onload = () => {
            //             const imgHeight =
            //                 (imgEl.naturalHeight / imgEl.naturalWidth) *
            //                 window.innerWidth
            //             secondWrapper.style.height = `${imgHeight}px`
            //             overlayImg.style.opacity = '1'
            //         }
            //     }
            // }

            // setTimeout(() => {
            //     resetInitialAnimation()
            // }, 1000)
        }
    }, [homeData])

    useEffect(() => {
        if (window && heroHeight > 0) {
            window.addEventListener('scroll', handleScroll)
            const secondWrapper = document.getElementById('second-wrapper')

            if (secondWrapper) {
                secondPosTop = secondWrapper.offsetTop
                stickyPosTop = secondPosTop + (8 / 100) * window.innerWidth
                // setStickyPosTop(inpatientSecondPos) // 10% for title offset
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
            console.log('secondPosTop', secondPosTop)
        }
    }, [heroHeight])

    const resetInitialAnimation = () => {
        document
            .querySelectorAll('.hero-image .animate')
            .forEach((el) => el.classList.remove('animate'))
    }
    let timeout = false,
        animatePosX = 0,
        animatePosY = 0,
        animateRightPosX = 0,
        animateScale = 1

    const handleScroll = (e) => {
        if (!timeout) {
            timeout = setTimeout(function () {
                clearTimeout(timeout)
                timeout = false

                let scrollTop = window.pageYOffset
                // console.log('scrollTop', scrollTop)
                const inpatient = document.getElementById('icon-inpatient'),
                    dental = document.getElementById('icon-dental'),
                    maternity = document.getElementById('icon-maternity'),
                    outpatient = document.getElementById('icon-outpatient'),
                    outpatientDiv = document.querySelector(
                        '#icon-outpatient > div'
                    ),
                    heroIcon = document.getElementById('hero-icon-all'),
                    isFix = inpatient.classList.contains('is-fix')

                if (!inpatientTopView) {
                    inpatientTopView = inpatient.getBoundingClientRect().top
                    //kadang masi ngebug kalo scroll cepet
                    const calcScrollTop = stickyPosTop - inpatientTopView
                    animatePosX = calcScrollTop * 0.035
                    animatePosY = calcScrollTop * 0.3
                    animateRightPosX = calcScrollTop * 0.05
                    animateScale = 1 - calcScrollTop * 0.0002
                }
                // if (!heroIconTopView)
                //     heroIconTopView = heroIcon.getBoundingClientRect().top
                // let heroIconTop = heroIconTopView + scrollTop
                let inpatientTop = inpatientTopView + scrollTop
                // isFix? : inpatient.getBoundingClientRect().top + scrollTop

                // const posX = constant.iconPosX + scrollTop * 0.04,
                //     posY = constant.iconPosY + scrollTop * 0.3

                const posX = scrollTop * 0.035,
                    posY = scrollTop * 0.3,
                    rightPosX = scrollTop * 0.05,
                    scale = 1 - scrollTop * 0.0002,
                    opRightPos = constant.opRight - scrollTop * 0.021

                // if (scrollTop + 70 <= secondPosTop) {
                //     if (navbar && !navbar.classList.contains('is-trans')) {
                //         navbar.classList.add('is-trans')
                //     }
                // } else {
                //     if (navbar && navbar.classList.contains('is-trans')) {
                //         navbar.classList.remove('is-trans')
                //     }
                // }

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

    const { header } = homeData
    let heroImg = header.desktopImage
        ? `${assetDomain}${header.desktopImage.url}`
        : ''
    if (isPortrait) {
        heroImg = header.mobileImage
            ? `${assetDomain}${header.mobileImage.url}`
            : ''
    }
    if (!homeData) return <></>
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
                        <h1>A Health Service with Only You In Mind.</h1>
                    </div>
                    <div className="hero-desc">
                        Designed to always be with you & your loved ones.
                    </div>
                </div>
                <div className="hero-image">
                    <img src={`${assetPrefix}/images/home/hero-1.png`} />
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
                            {/* <div className={'hero-icon-child'}> */}
                            <img
                                style={{
                                    width: `${iconHeight.inpatient}px`,
                                }}
                                src={`${assetPrefix}/images/home/inpatient.png`}
                            />
                            {/* </div> */}
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
                                src={`${assetPrefix}/images/home/maternity.png`}
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
                                src={`${assetPrefix}/images/home/outpatient.png`}
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
                                src={`${assetPrefix}/images/home/dental.png`}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div id="second-wrapper" className="second-wrapper">
                <div className="second-text">
                    <div className="second-title">
                        <h2> Everything Revolves Around You</h2>
                    </div>
                    <div className="second-desc">
                        No one knows you better than yourself. That’s why we
                        deliver a health service where you can seamlessly tailor
                        it according to your needs.{' '}
                    </div>
                </div>
                <img
                    id="second-bg"
                    className="second-bg"
                    src={`${assetPrefix}/images/home/room.png`}
                />

                <img
                    id="overlay-image"
                    className="overlay-image"
                    src={`${assetPrefix}/images/home/family.png`}
                />
            </div>

            <style jsx>{styles}</style>
        </>
    )
}
