import { useState, useEffect } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getHomeData } from 'services/home'
import { getCookie } from 'utils/global-util'
import Loader from 'components/loader'
import styles from './styles'
import Footer from 'components/footer'
import { constant } from './constant'
const assetDomain = process.env.config?.baseEndpoint ?? '',
    assetPrefix = process.env.config?.assetPrefix ?? ''
export default function HomeScreen() {
    const [homeData, setHomeData] = useState(null)
    const [isMobile, setIsMobile] = useState(false)
    const [isPortrait, setIsPortrait] = useState(false)
    const [isIos, setIsIos] = useState(false)
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
        inpatientSecondPos = 0,
        inpatientTopView = 0

    useAsyncEffect(async (isMounted) => {
        let langId
        if (window) {
            langId = getCookie('lang')
            const mob =
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                )
            // console.log('ismobile', mob)
            setIsMobile(mob)
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
            if (window.innerWidth <= 768) {
                setIsPortrait(true)
                // setHeroHeight(window.innerHeight - headerHeight)
            }

            const ios = /(iPad|iPhone|iPod)/g.test(navigator.userAgent)
            setIsIos(ios)
        }
        const homeDt = await getHomeData(langId ? langId : 'id')

        if (!isMounted()) return

        setHomeData(homeDt)
    }, [])

    useEffect(() => {
        if (window && homeData) {
            window.addEventListener('scroll', handleScroll)

            const secondWrapper = document.getElementById('second-wrapper')
            // console.log('secondWrapper', secondWrapper)
            if (secondWrapper) {
                secondPosTop = secondWrapper.offsetTop
                // setInpatientSecondPos(secondPosTop + 100
                inpatientSecondPos =
                    secondPosTop + (8 / 100) * window.innerWidth // 10% for title offset
                // const inpatient = document.getElementById('icon-inpatient')
                // inpatientTopView = inpatient.getBoundingClientRect().top
                // console.log('inpatientTopView', inpatientTopView)
                const imgEl = document.querySelector(`#second-bg`)
                console.log('imgEl', imgEl)
                if (imgEl.complete) {
                    const imgHeight =
                        (imgEl.naturalHeight / imgEl.naturalWidth) *
                        window.innerWidth
                    secondWrapper.style.height = `${imgHeight}px`
                    console.log('complete imgHeight', imgHeight)
                } else {
                    imgEl.onload = () => {
                        const imgHeight =
                            (imgEl.naturalHeight / imgEl.naturalWidth) *
                            window.innerWidth
                        secondWrapper.style.height = `${imgHeight}px`
                        console.log('imgHeight', imgHeight)
                        // el.style.height = `${imgHeight}px`
                        // const leftPos = (screenWidth - imgWidth) / 2
                        // el.style.left = `${leftPos}px`
                    }
                }
            }

            setTimeout(() => {
                resetInitialAnimation()
            }, 1000)
            console.log('secondPosTop', secondPosTop)
        }

        return () => {}
    }, [homeData])

    const resetInitialAnimation = () => {
        document
            .querySelectorAll('.hero-image .animate')
            .forEach((el) => el.classList.remove('animate'))
    }
    let timeout = false,
        startX = -220,
        startY = -100,
        heroIconTopView = null,
        currentPosX = 0,
        currentPosY = 0,
        currentRightPosX = 0,
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
                console.log('scrollTop', scrollTop)
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
                    const calcScrollTop = inpatientSecondPos - inpatientTopView
                    animatePosX = calcScrollTop * 0.03
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

                const posX = scrollTop * 0.03,
                    posY = scrollTop * 0.3,
                    rightPosX = scrollTop * 0.05,
                    scale = 1 - scrollTop * 0.0002,
                    opRightPos = constant.opRight - scrollTop * 0.021

                console.log('scale', scale)
                if (
                    inpatientTop <= inpatientSecondPos &&
                    inpatientSecondPos > 0
                ) {
                    currentPosX = 0
                    currentPosY = 0
                    currentRightPosX = 0
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
                } else if (inpatientSecondPos > 0) {
                    if (inpatient.classList.contains('revolve')) {
                    } else {
                        if (currentPosX == 0 && currentPosY == 0) {
                            currentPosX = posX
                            currentPosY = posY
                            currentRightPosX = rightPosX
                        }
                        inpatient.style.transition = `all 0.5s ease-in`
                        inpatient.style.transform = `translate( ${animatePosX}%, ${
                            animatePosY + 70
                        }%) scale(${animateScale})`
                        inpatient.classList.add('revolve')

                        dental.style.transition = `all 0.5s ease-in`
                        dental.style.transform = `translate( ${animatePosX}%, ${
                            animatePosY + 85
                        }%) scale(${animateScale})`

                        dental.classList.add('revolve')

                        maternity.style.transition = `all 0.5s ease-in`
                        maternity.style.transform = `translate( ${
                            animateRightPosX + 8
                        }%, ${animatePosY + 55}%) scale(${animateScale})`

                        maternity.classList.add('revolve')

                        outpatient.style.transition = `all 0.5s ease-in`
                        outpatient.style.transform = `translate( ${
                            animateRightPosX + 10
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

    if (!homeData) return <Loader />

    const { header } = homeData
    let heroImg = header.desktopImage
        ? `${assetDomain}${header.desktopImage.url}`
        : ''
    if (isPortrait) {
        heroImg = header.mobileImage
            ? `${assetDomain}${header.mobileImage.url}`
            : ''
    }

    return (
        <div>
            {header && (
                <div
                    className={`hero-wrapper`}
                    style={{
                        backgroundImage: `url(${heroImg})`,
                        // height: isPortrait ? `${heroHeight}px` : 'auto',
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
                            className={
                                'hero-icon hero-icon--outpatient animate'
                            }
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
                // </div>
            )}
            {/* <div
                className="second-title-wrapper"
                style={{
                    height: `280px`,
                }}
            >

                <div className="second-title">
                    <h2> Everything Revolves Around You</h2>
                </div>
                <div className="second-desc">
                    No one knows you better than yourself. That’s why we deliver
                    a health service where you can seamlessly tailor it
                    according to your needs.{' '}
                </div>
            </div> */}
            <div
                id="second-wrapper"
                className="second-wrapper"
                // style={{
                //     backgroundImage: `url(${assetPrefix}/images/home/room.png)`,
                //     height: `${heroHeight}px`,
                // }}
            >
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

                {/* <div className={'overlay-wrapper'}> */}
                <img
                    className="overlay-image"
                    src={`${assetPrefix}/images/home/family.png`}
                />
                {/* </div> */}

                {/* <div className={'hero-icon-all-sc'}> */}
                {/* <div className={'hero-icon-sc hero-icon-sc--inpatient'}>
                        <div>
                            <img
                                style={{
                                    width: `${iconHeight.inpatient}px`,
                                }}
                                src={`${assetPrefix}/images/home/inpatient.png`}
                            />
                        </div>
                    </div>
                    <div className={'hero-icon-sc hero-icon-sc--maternity'}>
                        <div>
                            <img
                                style={{
                                    width: `${iconHeight.maternity}px`,
                                }}
                                src={`${assetPrefix}/images/home/maternity.png`}
                            />
                        </div>
                    </div>
                    <div className={'hero-icon-sc hero-icon-sc--outpatient'}>
                        <div>
                            <img
                                style={{
                                    width: `${iconHeight.outpatient}px`,
                                }}
                                src={`${assetPrefix}/images/home/outpatient.png`}
                            />
                        </div>
                    </div>

                    <div className={'hero-icon-sc hero-icon-sc--dental'}>
                        <div>
                            <img
                                style={{
                                    width: `${iconHeight.dental}px`,
                                }}
                                src={`${assetPrefix}/images/home/dental.png`}
                            />
                        </div>
                    </div> */}
            </div>
            {/* </div> */}

            {/* 'https://strapi-y5loyvex6a-et.a.run.app/uploads/home_hero_sample_bf7bfdf187.jpg?18236546' */}
            {/* </div> */}
            {/* <div className="content-wrapper">
                {!isPortrait && (
                    <div className="static-blob">
                        <img src="./images/blob/blob-home.png" />
                    </div>
                )}
                <div className="content-cards">
                    {homeData.key.map((dt, index) => (
                        <div
                            key={dt.id}
                            className={`card-item ${
                                (index + 1) % 2 == 0 ? 'card-even' : 'card-odd'
                            }`}
                        >
                            <img
                                src={`${assetDomain}${dt.image?.url ?? ''}`}
                                alt={dt.image?.alternativeText ?? ''}
                            />

                            <div className="card-content">
                                <div className="card-title">{dt.title}</div>

                                <div className="card-desc">
                                    {dt.description}
                                </div>
                                {dt.linkText && (
                                    <a className="card-link" href={dt.link}>
                                        {dt.linkText}
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
            <div className="bottom-section">
                <div className="bottom-title">{homeData.bottomTitle}</div>
                {homeData.bottomLinkText && (
                    <div className="bottom-button">
                        <a href={homeData.bottomLink}>
                            {homeData.bottomLinkText}
                        </a>
                    </div>
                )}
            </div>
            <Footer />
            <style jsx>{styles}</style>
        </div>
    )
}
