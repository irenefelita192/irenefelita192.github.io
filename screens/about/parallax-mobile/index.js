import { useState, useEffect } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getAboutData } from 'services/about'
import { getCookie } from 'utils/global-util'
import Loader from 'components/loader'
import styles from './styles'
import Footer from 'components/footer'
import Carousel from 'nuka-carousel'
import { after } from 'lodash'

const assetDomain = process.env.config?.baseEndpoint ?? '',
    assetPrefix = process.env.config?.assetPrefix ?? ''
export default function HomeScreen({
    aboutData,
    isSafari,
    isDesktop,
    isWebpSupport,
}) {
    const { heroList } = aboutData
    const [windowHeight, setWindowHeight] = useState(null)
    const [isScroll, setIsScroll] = useState(false)
    useEffect(() => {
        console.log('THIS IS MOBILE')
        if (window) {
            setWindowHeight(window.innerHeight)
            window.addEventListener('scroll', handleScroll)
        }

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const TIME_OUT = 1500 // It should be the same transition time of the sections
    const body = document.querySelector('body')
    // const sectionsQty = document.querySelectorAll('section').length
    // const sectionStick = document.querySelector('.section-stick')

    let startFlag = true
    let initialScroll = window.pageYOffset
    let pageOffset = window.pageYOffset
    let qty = 1,
        main = null,
        next = null

    // // Add child elements in .section-stick as number of sections exist
    // Array(sectionsQty)
    //   .fill()
    //   .forEach(() => {
    //     sectionStick.innerHTML = sectionStick.innerHTML + '<div class="stick"></div>'
    //   })

    // if (!isSafari)
    body.style.overflowY = 'scroll'
    // Listening to scroll event
    const handleScroll = (e) => {
        console.log(' window.pageYOffset', window.pageYOffset)

        // if (startFlag) {
        const scrollDown = window.pageYOffset > initialScroll
        console.log('initialScroll', initialScroll)
        console.log('scrollDown', scrollDown)
        //     const scrollLimit = qty >= 1 && qty <= sectionsQty

        //     // Verify that the scroll does not exceed the number of sections
        //     if (scrollLimit) {
        //         // if (!isSafari)

        //         body.style.overflowY = 'hidden' // Lock el scroll
        //         console.log('initialScroll', initialScroll)
        //         window.scrollTo(0, 0)
        if (!scrollDown && window.pageYOffset <= 0) {
            console.log('MASUK SINI GAAA')
            const sliderFrame = document.getElementsByClassName('slider-frame')
            if (sliderFrame && sliderFrame.length > 0) {
                sliderFrame[0].style.pointerEvents = 'auto'
            }
        }
        initialScroll = window.pageYOffset
        //             main = document.querySelector(`section.s${qty - 1}`)
        //             next = document.querySelector(`section.s${qty}`)

        //             // main.style.transform = 'translate3d(0,0,0)'
        //             // next.style.transform = 'translate3d(0,100vh,0)'
        //             if (layout) {
        //                 layout.style.transform = `translate3d(0,-${
        //                     qty * window.innerHeight
        //                 }px,0)`
        //                 window.scrollTo(0, qty * window.innerHeight)
        //             }
        //             qty--
        //         }

        //         // Scroll progressbar
        //         // const active = document.querySelector('.section-stick .stick.active')
        //         // active.style.top = (62 + 30) * (qty - 1) + 'px'
        // }

        //     // Wait for the scrolling to finish to reset the values
        // setTimeout(() => {
        //     // startFlag = true
        //     initialScroll = window.pageYOffset
        //     // if (qty !== sectionsQty) body.style.overflowY = 'scroll' // Unlock scroll
        // }, TIME_OUT)

        // startFlag = false
        // }

        // Keep scrollbar in the middle of the viewport
        // window.scroll(0, window.screen.height)
    }
    const settings = {
        vertical: true,
        swiping: true,
        dragging: true,
        withoutControls: true,
    }

    const afterSlide = (slideIndex) => {
        console.log('slideIndex', slideIndex)
        if (slideIndex == 8) {
            const sliderFrame = document.getElementsByClassName('slider-frame')
            if (sliderFrame && sliderFrame.length > 0) {
                sliderFrame[0].style.pointerEvents = 'none'
            }
        }
    }
    return (
        <>
            <div
                className={`layout ${isSafari ? 'is-safari' : ''}`}
                id="layout"
            >
                <Carousel {...settings} afterSlide={afterSlide}>
                    {heroList &&
                        heroList.map((dt, index) => {
                            let heroImg = ''
                            if (isDesktop) {
                                heroImg = `${assetDomain}${
                                    dt?.imageWebp?.url ?? ''
                                }`
                                if (!dt.imageWebp || !isWebpSupport) {
                                    heroImg = `${assetDomain}${
                                        dt?.image?.url ?? ''
                                    }`
                                }
                            } else {
                                heroImg = `${assetDomain}${
                                    dt?.imageMobileWebp?.url ?? ''
                                }`
                                if (!dt.imageMobileWebp || !isWebpSupport) {
                                    heroImg = `${assetDomain}${
                                        dt?.imageMobile?.url ?? ''
                                    }`
                                }
                            }
                            const lastSection = index + 1 == heroList.length
                            return (
                                <section
                                    style={{
                                        backgroundColor: '#DEB196',
                                        height: `${windowHeight}px`,
                                    }}
                                    key={dt.id}
                                    className={`s${index + 1} ${
                                        isDesktop ? '' : 'is-mobile'
                                    } ${index == 0 ? 'first-section' : ''} ${
                                        isDesktop &&
                                        dt.isRightPosition &&
                                        index > 0
                                            ? 'even-section'
                                            : ''
                                    } ${lastSection ? 'last-section' : ''}`}
                                >
                                    <div
                                        className={`section-content  ${
                                            lastSection ? 'full-height' : ''
                                        }`}
                                    >
                                        <img src={heroImg} alt={'hero-img'} />
                                        {index === 0 && (
                                            <div className="section-text">
                                                {dt.headline}
                                            </div>
                                        )}
                                        {index !== 0 && (
                                            <div className="section-text">
                                                <div>{dt.headline}</div>
                                                <div>{dt.name}</div>
                                                <div>{dt.position}</div>
                                            </div>
                                        )}
                                    </div>

                                    {/* {lastSection && (
                                      
                                    )} */}
                                </section>
                            )
                        })}
                </Carousel>
                <>
                    <div id="value" className="value-wrapper">
                        <div className="value-title">
                            {aboutData.valueTitle}
                        </div>

                        <div className="content-cards">
                            {aboutData.valueList.map((dt, index) => (
                                <div
                                    key={dt.id}
                                    className={`card-item ${
                                        (index + 1) % 2 == 0
                                            ? 'card-even'
                                            : 'card-odd'
                                    }`}
                                >
                                    <img
                                        src={`${assetDomain}${
                                            dt.image?.url ?? ''
                                        }`}
                                        alt={dt.image?.alternativeText ?? ''}
                                    />

                                    <div className="card-content">
                                        <div className="card-title">
                                            {dt.title}
                                        </div>

                                        <div className="card-desc">
                                            {dt.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Footer />
                </>
                {/* <section className="s2">
                    <div className="section-content">
                        <img
                            src={`${assetPrefix}/images/about${
                                isDesktop ? '' : '/mobile'
                            }/hero-2.png`}
                            alt={'hero'}
                        />
                    </div>
                </section>
                <section className="s3">
                    <div className="section-content">
                        <img
                            src={`${assetPrefix}/images/about${
                                isDesktop ? '' : '/mobile'
                            }/hero-3.png`}
                            alt={'hero'}
                        />
                    </div>
                </section>

                <section className="s4 last-section">
                    <div className="section-content full-height">
                        <img
                            src={`${assetPrefix}/images/about${
                                isDesktop ? '' : '/mobile'
                            }/hero-4.png`}
                            alt={'hero'}
                        />
                    </div>
                    <div id="value" className="value-wrapper">
                        <div className="value-title">
                            {aboutData.valueTitle}
                        </div>

                        <div className="content-cards">
                            {aboutData.valueList.map((dt, index) => (
                                <div
                                    key={dt.id}
                                    className={`card-item ${
                                        (index + 1) % 2 == 0
                                            ? 'card-even'
                                            : 'card-odd'
                                    }`}
                                >
                                    <img
                                        src={`${assetDomain}${
                                            dt.image?.url ?? ''
                                        }`}
                                        alt={dt.image?.alternativeText ?? ''}
                                    />

                                    <div className="card-content">
                                        <div className="card-title">
                                            {dt.title}
                                        </div>

                                        <div className="card-desc">
                                            {dt.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Footer />
                </section> */}
            </div>

            <style jsx>{styles}</style>
            <style jsx global>
                {`
                    html {
                        scrollbar-width: none;
                    }

                    body {
                        margin: 0;
                        padding: 0;
                        font-family: sans-serif;
                        // overflow: hidden;
                        -ms-overflow-style: none;
                    }

                    body::-webkit-scrollbar {
                        display: none;
                    }
                `}
            </style>
        </>
    )
}
