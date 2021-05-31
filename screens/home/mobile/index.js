import { Fragment, useState, useEffect } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import Carousel from 'nuka-carousel'
import { getHero, getStats } from '../../../services/home'
import { getFooter } from '../../../services/common'
import { getCookie } from '../../../util/global-util'
import Loader from '../../../components/loader'

import styles from './styles'
import globalStyles from './global-styles'

export default function HomeScreen() {
    const [isWebp, setIsWebp] = useState(true)
    const [isPortrait, setIsPortrait] = useState(false)

    const [heroData, setHeroData] = useState(null)
    const [homeData, setHomeData] = useState(null)
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

            if (window.innerWidth < window.innerHeight) {
                setIsPortrait(true)
            }
        }
    }, [])

    const assetDomain = process.env.config?.endpoints?.asset ?? ''

    if (!homeData) {
        return <Loader />
    }
    return (
        <>
            <Carousel
                autoplay
                wrapAround={true}
                renderCenterLeftControls={({ previousSlide }) => (
                    <div onClick={previousSlide}></div>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                    <div onClick={nextSlide}></div>
                )}
            >
                {heroData &&
                    heroData.map((dt, index) => {
                        let imgSrc = isWebp
                            ? `${assetDomain}${dt.heroImgWebpMobile?.url ?? ''}`
                            : `${assetDomain}${dt.heroImgMobile?.url ?? ''}`
                        let statsData = null
                        if (homeData && homeData.length > 0 && index > 0) {
                            statsData = homeData[index - 1]
                        }

                        return (
                            <div key={dt.id}>
                                <img src={imgSrc} />
                                <div className="background-bottom" />
                                <div className="hero-title">{dt.heroTitle}</div>
                                {statsData && index > 0 && (
                                    <div className="stats-wrapper">
                                        {/* <div className="stats-top-desc">
                                            <span>{statsData.statsDesc}</span>
                                        </div> */}
                                        <div className="stats-top">
                                            {statsData.statsTitle}
                                        </div>
                                        <div className="stats-bottom">
                                            <div className="stats-num">
                                                {statsData.statsNum}
                                            </div>
                                            <div className="stats-desc">
                                                {statsData.statsShortDesc}
                                            </div>
                                            <i
                                                onClick={() =>
                                                    (window.location.href =
                                                        '/solutions')
                                                }
                                            ></i>
                                        </div>
                                    </div>
                                )}
                                {index == 0 && footerData && (
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
                        )
                    })}
            </Carousel>

            <style jsx>{styles}</style>
            <style jsx global>
                {globalStyles}
            </style>
        </>
    )
}
