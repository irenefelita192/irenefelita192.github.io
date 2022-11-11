import { useState, useEffect } from 'react'
import { getCookie } from 'utils/global-util'
import styles from './styles'
import { constant } from './constant'
const assetDomain = process.env.config?.baseEndpoint ?? '',
    assetPrefix = process.env.config?.assetPrefix ?? ''

export default function ParallaxMobile({ sectionOne, sectionTwo }) {
    if (!sectionOne) return <></>

    const [heroHeight, setHeroHeight] = useState(0)
    // const [iconHeight, setIconHeight] = useState({
    //     inpatient: 0,
    //     maternity: 0,
    //     dental: 0,
    //     outpatient: 0,
    // })
    const [imgHeight, setImgHeight] = useState(0)
    const [iconWrapperSize, setIconWrapperSize] = useState({
        width: 600,
        height: 300,
    })

    let headerHeight = 80,
        secondPosTop = 0,
        stickyPosTop = 0,
        inpatientTopView = 0,
        calcX = 8,
        calcY = 80,
        mCalcX = 15,
        mCalcY = 85,
        hCalcX = 15,
        hCalcY = 85,
        oCalcX = 17,
        oCalcY = 85

    useEffect(() => {
        if (window) {
            setHeroHeight(window.innerHeight)
            // setIconHeight({
            //     inpatient: (7.6 / 100) * window.innerWidth,
            //     maternity: (6 / 100) * window.innerWidth,
            //     dental: (7.6 / 100) * window.innerWidth,
            //     outpatient: (6 / 100) * window.innerWidth,
            // })
            setIconWrapperSize({
                width: (73 / 100) * window.innerWidth,
                height: (60 / 100) * window.innerWidth,
            })
        }
    }, [])

    useEffect(() => {
        if (window && heroHeight > 0) {
            setImgHeight((window.innerWidth * 71) / 92)
            const secondWrapper = document.getElementById('second-wrapper')

            if (secondWrapper) {
                secondPosTop = secondWrapper.offsetTop
                const imgEl = document.querySelector(`#second-bg`)
                const overlayImg = document.getElementById('overlay-image')
                if (imgEl.complete) {
                    window.addEventListener('scroll', handleScroll)
                    overlayImg.style.opacity = '1'
                } else {
                    imgEl.onload = () => {
                        window.addEventListener('scroll', handleScroll)
                        overlayImg.style.opacity = '1'
                    }
                }

                stickyPosTop = secondPosTop + (50 / 100) * window.innerHeight
                const windowRatio = window.innerWidth / window.innerHeight

                if (windowRatio > 0.65) {
                    stickyPosTop =
                        secondPosTop + (20 / 100) * window.innerHeight
                    mCalcX = 22
                    mCalcY = 60
                    calcX = 10
                    calcY = 60
                    hCalcX = 5
                    hCalcY = 90
                    oCalcX = 35
                    oCalcY = 60
                } else if (windowRatio > 0.55) {
                    stickyPosTop =
                        secondPosTop + (45 / 100) * window.innerHeight
                    mCalcX = 17
                    mCalcY = 80
                    calcX = 10
                    calcY = 80
                    oCalcY = 80
                } else if (windowRatio > 0.48) {
                    stickyPosTop =
                        secondPosTop + (45 / 100) * window.innerHeight

                    mCalcX = 20
                    mCalcY = 75
                    calcX = 6
                    calcY = 60
                    oCalcX = 19
                    oCalcY = 50
                    hCalcX = 10
                    hCalcY = 85
                    if (window.innerHeight > 780) {
                        mCalcX = 8
                        mCalcY = 28
                        calcX = 6
                        calcY = 20
                        oCalcX = 13
                        oCalcY = 10
                        hCalcX = 6
                        hCalcY = 35
                    }

                    // mCalcX = 17
                    // mCalcY = 50
                    // calcX = 10
                    // calcY = 50
                    // oCalcY = 50
                } else if (windowRatio > 0.43) {
                    stickyPosTop =
                        secondPosTop + (45 / 100) * window.innerHeight
                    mCalcX = 2
                    mCalcY = 35
                    calcX = 3
                    calcY = 38
                    hCalcX = 5
                    hCalcY = 48
                    oCalcX = 10
                    oCalcY = 18
                } else {
                    stickyPosTop =
                        secondPosTop + (45 / 100) * window.innerHeight
                    mCalcX = 2
                    mCalcY = 68
                    calcX = 3
                    calcY = 65
                    hCalcX = 5
                    hCalcY = 60
                    oCalcX = 10
                    oCalcY = 55
                }
            }

            setTimeout(() => {
                resetInitialAnimation()
            }, 1000)
        }

        return () => {
            window.removeEventListener('scroll', handleScroll)
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
        dAnimatePosX = 0,
        dAnimatePosY = 0,
        animateRightPosX = 0,
        animateScale = 0,
        mAnimatePosX = 0,
        mAnimatePosY = 0,
        hAnimatePosX = 0,
        hAnimatePosY = 0,
        oAnimatePosX = 0,
        oAnimatePosY = 0

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
                    hemat = document.getElementById('icon-hemat'),
                    outpatientDiv = document.querySelector(
                        '#icon-outpatient > div'
                    ),
                    heroImage = document.getElementById('hero-image')

                if (!inpatientTopView) {
                    inpatientTopView = inpatient.offsetTop + heroImage.offsetTop
                    const calcScrollTop = stickyPosTop - inpatientTopView
                    animatePosX = calcScrollTop * 0.018
                    animatePosY = calcScrollTop * 0.41
                    dAnimatePosX = calcScrollTop * 0.012
                    dAnimatePosY = calcScrollTop * 0.38
                    mAnimatePosX = calcScrollTop * 0.09
                    mAnimatePosY = calcScrollTop * 0.38
                    hAnimatePosX = calcScrollTop * 0.05
                    hAnimatePosY = calcScrollTop * 0.45
                    oAnimatePosX = calcScrollTop * 0.08
                    oAnimatePosY = calcScrollTop * 0.41

                    animateRightPosX = calcScrollTop * 0.05
                    animateScale = 1 - calcScrollTop * 0.0002
                }
                let inpatientTop = inpatientTopView + scrollTop

                const posX = scrollTop * 0.018,
                    posY = scrollTop * 0.41,
                    dPosX = scrollTop * 0.012,
                    dPosY = scrollTop * 0.38,
                    mPosX = scrollTop * 0.09,
                    mPosY = scrollTop * 0.38,
                    hPosX = scrollTop * 0.05,
                    hPosY = scrollTop * 0.45,
                    oPosX = scrollTop * 0.08,
                    oPosY = scrollTop * 0.41,
                    scale = 1 - scrollTop * 0.0002,
                    opRightPos = constant.opRight - scrollTop * 0.021

                if (inpatientTop <= stickyPosTop && stickyPosTop > 0) {
                    if (inpatient.classList.contains('revolve')) {
                        inpatient.classList.remove('revolve')
                        dental.classList.remove('revolve')
                        maternity.classList.remove('revolve')
                        outpatient.classList.remove('revolve')
                        hemat.classList.remove('revolve')
                    } else {
                        inpatient.style.transition = `transform 0.1s linear`
                        dental.style.transition = `transform 0.1s linear`
                        maternity.style.transition = `transform 0.1s linear`
                        outpatient.style.transition = `transform 0.1s linear`
                        hemat.style.transition = `transform 0.1s linear`
                    }
                    inpatient.style.transform = `translate( ${posX}%, ${posY}%) scale(${scale})`
                    dental.style.transform = `translate( ${dPosX}%, ${dPosY}%) scale(${scale})`
                    maternity.style.transform = `translate( ${mPosX}%, ${mPosY}%) scale(${scale})`
                    hemat.style.transform = `translate( ${hPosX}%, ${hPosY}%) scale(${scale})`
                    outpatient.style.transform = `translate( ${oPosX}%, ${oPosY}%) scale(${scale})`
                    outpatientDiv.style.right = `${opRightPos}%`
                } else if (stickyPosTop > 0) {
                    if (inpatient.classList.contains('revolve')) {
                    } else {
                        inpatient.style.transition = `all 0.5s ease-in`
                        inpatient.style.transform = `translate( ${
                            animatePosX + calcX
                        }%, ${animatePosY + calcY}%) scale(${animateScale})`
                        inpatient.classList.add('revolve')

                        dental.style.transition = `all 0.5s ease-in`
                        dental.style.transform = `translate( ${
                            dAnimatePosX + calcX
                        }%, ${dAnimatePosY + calcY}%) scale(${animateScale})`

                        dental.classList.add('revolve')

                        maternity.style.transition = `all 0.5s ease-in`
                        maternity.style.transform = `translate( ${
                            mAnimatePosX + mCalcX
                        }%, ${mAnimatePosY + mCalcY}%) scale(${animateScale})`

                        maternity.classList.add('revolve')

                        hemat.style.transition = `all 0.5s ease-in`
                        hemat.style.transform = `translate( ${
                            hAnimatePosX + hCalcX
                        }%, ${hAnimatePosY + hCalcY}%) scale(${animateScale})`

                        hemat.classList.add('revolve')

                        outpatient.style.transition = `all 0.5s ease-in`
                        outpatient.style.transform = `translate( ${
                            oAnimatePosX + oCalcX
                        }%, ${oAnimatePosY + oCalcY}%) scale(${animateScale})`

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

    let heroImg = sectionOne.shamrockImage
        ? `${assetDomain}${sectionOne.shamrockImageMobile.url}`
        : ''

    return (
        <>
            <div
                className={`hero-wrapper`}
                style={{
                    backgroundImage: `url(${heroImg})`,
                    height: `${heroHeight}px`,
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
                            sectionOne?.familyImageMobile?.url ?? ''
                        }`}
                        alt="family-image"
                        style={{ minHeight: `${imgHeight}px` }}
                    />
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
                                src={`${assetDomain}${
                                    sectionOne?.inpatientIcon?.url ?? ''
                                }`}
                                alt="inpatient-icon"
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
                                src={`${assetDomain}${
                                    sectionOne?.dentalIcon?.url ?? ''
                                }`}
                                alt="dental-icon"
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
                                src={`${assetDomain}${
                                    sectionOne?.maternityIcon?.url ?? ''
                                }`}
                                alt="maternity-icon"
                            />
                        </div>
                    </div>
                    <div
                        id="icon-hemat"
                        className={'hero-icon hero-icon--hemat animate'}
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
                                src={`${assetDomain}${
                                    sectionOne?.hematIcon?.url ?? ''
                                }`}
                                alt="hemat-icon"
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
                                src={`${assetDomain}${
                                    sectionOne?.outpatientIcon?.url ?? ''
                                }`}
                                alt="outpatient-icon"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {sectionTwo && (
                <div
                    id="second-wrapper"
                    className="second-wrapper"
                    style={{
                        height: `${heroHeight + headerHeight}px`,
                    }}
                >
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
                            sectionTwo?.backgroundImageMobile?.url ?? ''
                        }`}
                        alt="living-room-image"
                    />

                    <img
                        id="overlay-image"
                        className="overlay-image"
                        src={`${assetDomain}${
                            sectionTwo?.familyImage?.url ?? ''
                        }`}
                        alt="family-revolve-image"
                    />
                </div>
            )}

            <style jsx>{styles}</style>
        </>
    )
}
