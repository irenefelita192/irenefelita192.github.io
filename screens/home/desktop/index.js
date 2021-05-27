import { Fragment, useState, useEffect } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getHero, getStats } from '../../../services/home'
import { getFooter } from '../../../services/common'
import { getCookie } from '../../../util/global-util'

import { CSSTransition } from 'react-transition-group'
import styles from './styles'
import globalStyles from './global-styles'

export default function HomeScreen() {
    const [isWebp, setIsWebp] = useState(true)
    const [isWide, setIsWide] = useState(false)

    const [hovHeroId, setHovHeroId] = useState(0)
    const [heroData, setHeroData] = useState([])
    const [homeData, setHomeData] = useState([])
    const [footerData, setFooterData] = useState(null)

    useAsyncEffect(async (isMounted) => {
        let langId
        if (process.browser) {
            langId = getCookie('lang')
        }
        const hero = await getHero(langId ? langId : 'id')
        const home = await getStats(langId ? langId : 'id')
        const footerDt = await getFooter(langId ? langId : 'id')

        if (!isMounted()) return
        setHeroData(hero)
        setHomeData(home)
        setFooterData(footerDt)
    }, [])

    useEffect(() => {
        if (process.browser) {
            if (window.Modernizr.webp) {
                setIsWebp(true)
            } else {
                setIsWebp(false)
            }

            if (window.innerWidth / window.innerHeight > 2) {
                setIsWide(true)
            }
        }
    }, [])

    const onMouseEnter = (id) => {
        const selData = heroData.find((dt) => {
            return dt.heroID === id
        })
        const selId = selData && selData.heroID

        setHovHeroId(selId)
    }

    const onMouseLeave = () => {
        setHovHeroId(0)
    }

    const assetDomain = process.env.config?.endpoints?.asset ?? ''
    let imgSrc = null,
        defaultImgSrc = null,
        heroTitle = ''
    if (heroData && heroData.length > 0) {
        defaultImgSrc = isWebp
            ? `${assetDomain}${heroData[0]?.heroImgWebp?.url ?? ''}`
            : `${assetDomain}${heroData[0]?.heroImg?.ur ?? ''}`
        imgSrc = isWebp
            ? `${assetDomain}${heroData[hovHeroId]?.heroImgWebp?.url ?? ''}`
            : `${assetDomain}${heroData[hovHeroId]?.heroImg?.ur ?? ''}`

        heroTitle = heroData[hovHeroId]?.heroTitle ?? ''
    }
    return (
        <>
            {imgSrc && (
                <div className="hero-img-wrapper">
                    <CSSTransition
                        in={hovHeroId == 0}
                        timeout={100}
                        classNames="default-img-transition"
                    >
                        <img
                            src={defaultImgSrc}
                            className={`default-hero-img ${
                                isWide ? 'is-wide' : ''
                            }`}
                        />
                    </CSSTransition>
                    <CSSTransition
                        in={hovHeroId != 0}
                        timeout={100}
                        classNames="img-transition"
                    >
                        <img
                            src={imgSrc}
                            className={`hero-img ${isWide ? 'is-wide' : ''}`}
                        />
                    </CSSTransition>
                    <div className="background-overlay" />
                    <div className="background-bottom" />
                    {/* <img
                            src={defaultImgSrc}
                            className={`default-hero-img ${
                                hovHeroId === 0 ? 'is-active' : ''
                            }`}
                        />
                    <img
                            src={imgSrc}
                            className={`hero-img ${
                                hovHeroId !== 0 ? 'is-active' : ''
                            }`}
                        /> */}
                    {/* <SwitchTransition mode="out-in"> */}

                    {/* <CSSTransition
                        in={hovHeroId != 0}
                        timeout={100}
                        // key={hovHeroId}
                        // addEndListener={(node, done) =>
                        //     node.addEventListener('transitionend', done, false)
                        // }
                        classNames="default-img-transition"
                    >
                        <img
                            src={defaultImgSrc}
                            className={`default-hero-img `}
                        />
                    </CSSTransition>

                    <CSSTransition
                        in={hovHeroId != 0}
                        timeout={300}
                        s
                        classNames="img-transition"
                    >
                        <img src={imgSrc} className={`hero-img `} />
                    </CSSTransition> */}

                    {/* </SwitchTransition> */}
                </div>
            )}

            <CSSTransition
                in={hovHeroId != 0}
                timeout={100}
                classNames="title-transition"
            >
                <div className={`hero-title`}>{heroTitle}</div>
            </CSSTransition>

            <div className="bottom-wrapper">
                <div className="stats-wrapper">
                    <div className="columns">
                        {homeData &&
                            homeData.map((dt) => {
                                return (
                                    <div
                                        key={dt.statsID}
                                        className="column"
                                        onMouseEnter={() =>
                                            onMouseEnter(dt.statsID)
                                        }
                                        onMouseLeave={() =>
                                            onMouseLeave(dt.statsID)
                                        }
                                    >
                                        <div className="stats-top-desc">
                                            <span>{dt.statsDesc}</span>
                                        </div>
                                        <div className="stats-top">
                                            {dt.statsTitle}
                                        </div>
                                        <div
                                            className="stats-bottom"
                                            onClick={() =>
                                                (window.location.href =
                                                    '/solutions')
                                            }
                                        >
                                            <div className="stats-num">
                                                {dt.statsNum}
                                            </div>
                                            <div className="stats-desc">
                                                {dt.statsShortDesc}
                                            </div>
                                            <i></i>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
                {footerData && (
                    <div className="footer-wrapper">
                        <div className="footer">
                            <span>{footerData.ojkText}</span>
                            {footerData.ojkImageHome && (
                                <img
                                    src={`${assetDomain}${footerData.ojkImageHome.url}`}
                                    alt="OJK-logo"
                                />
                            )}
                        </div>
                    </div>
                )}
            </div>
            {/* <div className="background-overlay" /> */}
            {/* <div className="background-bottom" /> */}

            <style jsx>{styles}</style>
            <style jsx global>
                {globalStyles}
            </style>
        </>
    )
}
