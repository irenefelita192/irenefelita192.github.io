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
    // const [inpatientSecondPos, setInpatientSecondPos] = useState(0)

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
                inpatientSecondPos = secondPosTop
                // const inpatient = document.getElementById('icon-inpatient')
                // inpatientTopView = inpatient.getBoundingClientRect().top
                // console.log('inpatientTopView', inpatientTopView)
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
            .querySelectorAll('#hero-icon-all .animate')
            .forEach((el) => el.classList.remove('animate'))
    }
    let timeout = false,
        startX = -220,
        startY = -100,
        heroIconTopView = null,
        currentPosX = 0,
        currentPosY = 0

    const handleScroll = (e) => {
        if (!timeout) {
            timeout = setTimeout(function () {
                clearTimeout(timeout)
                timeout = false

                let scrollTop = window.pageYOffset
                console.log('scrollTop', scrollTop)
                const inpatient = document.getElementById('icon-inpatient'),
                    heroIcon = document.getElementById('hero-icon-all'),
                    isFix = inpatient.classList.contains('is-fix')
                // if (!inpatientTopView)
                //     inpatientTopView = inpatient.getBoundingClientRect().top
                if (!heroIconTopView)
                    heroIconTopView = heroIcon.getBoundingClientRect().top
                let heroIconTop = heroIconTopView + scrollTop
                // let inpatientTop = inpatientTopView + scrollTop
                // isFix? : inpatient.getBoundingClientRect().top + scrollTop
                inpatient.classList.remove('animate')

                console.log(
                    'heroIconTop',
                    heroIconTop,
                    'inpatientSecondPos',
                    inpatientSecondPos
                )
                const posX = constant.iconPosX + scrollTop * 0.04,
                    posY = constant.iconPosY + scrollTop * 0.3

                if (
                    heroIconTop + 150 <= inpatientSecondPos &&
                    inpatientSecondPos > 0
                ) {
                    currentPosX = 0
                    currentPosY = 0
                    if (heroIcon.classList.contains('revolve')) {
                        heroIcon.classList.remove('revolve')
                    } else {
                        heroIcon.style.transition = `transform 0.1s ease-in`
                    }
                    heroIcon.style.transform = `translate3d( ${posX}%, ${posY}%, 0)`
                } else if (inpatientSecondPos > 0) {
                    if (heroIcon.classList.contains('revolve')) {
                    } else {
                        if (currentPosX == 0 && currentPosY == 0) {
                            currentPosX = posX
                            currentPosY = posY
                        }
                        heroIcon.style.transition = `all 0.5s ease-in`
                        heroIcon.style.transform = `translate3d( ${currentPosX}%, ${
                            currentPosY + 50
                        }%, 0)`
                        heroIcon.classList.add('revolve')
                    }
                } else {
                    heroIcon.classList.remove('revolve')
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
                        <div id="hero-icon-all" className="hero-icon-all">
                            <div
                                id="icon-inpatient"
                                className={
                                    'hero-icon hero-icon--inpatient animate'
                                }
                            >
                                <div>
                                    <img
                                        style={{
                                            width: `${iconHeight.inpatient}px`,
                                        }}
                                        src={`${assetPrefix}/images/home/inpatient.png`}
                                    />
                                </div>
                            </div>
                            <div
                                id="icon-maternity"
                                className={
                                    'hero-icon hero-icon--maternity animate'
                                }
                            >
                                <div>
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
                            >
                                <div>
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
                                className={
                                    'hero-icon hero-icon--dental animate'
                                }
                            >
                                <div>
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
                </div>
            )}
            <div
                className="second-title-wrapper"
                style={{
                    height: `350px`,
                }}
            >
                {/* 'https://strapi-y5loyvex6a-et.a.run.app/uploads/home_hero_sample_bf7bfdf187.jpg?18236546' */}
                <div className="second-title">
                    <h2> Everything Revolves Around You</h2>
                </div>
                <div className="second-desc">
                    No one knows you better than yourself. That’s why we deliver
                    a health service where you can seamlessly tailor it
                    according to your needs.{' '}
                </div>
            </div>
            <div
                id="second-wrapper"
                className="second-wrapper"
                // style={{
                //     backgroundImage: `url(${assetPrefix}/images/home/room.png)`,
                //     height: `${heroHeight}px`,
                // }}
            >
                <img src={`${assetPrefix}/images/home/room.png`} />

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
