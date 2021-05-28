import { Fragment, useState, useEffect } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getHero, getStats } from '../../../services/home'
import { getFooter } from '../../../services/common'
import { getCookie } from '../../../util/global-util'

import styles from './styles'

export default function HomeScreen() {
    const [isWebp, setIsWebp] = useState(true)
    const [isPortrait, setIsPortrait] = useState(false)

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

            if (window.innerWidth < window.innerHeight) {
                setIsPortrait(true)
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

    return (
        <>
            {heroData &&
                heroData.map((dt) => {
                    let imgSrc = isWebp
                        ? `${assetDomain}${dt.heroImgWebp?.url ?? ''}`
                        : `${assetDomain}${dt.heroImg?.ur ?? ''}`

                    if (isPortrait) {
                        imgSrc = isWebp
                            ? `${assetDomain}${dt.heroImgWebpMobile?.url ?? ''}`
                            : `${assetDomain}${dt.heroImgMobile?.url ?? ''}`
                    }
                    return (
                        <Fragment key={dt.heroID}>
                            <img
                                src={imgSrc}
                                className={`${
                                    dt.heroID == 0 ? 'default' : ''
                                } hero-img ${
                                    hovHeroId === dt.heroID ? 'is-active' : ''
                                }`}
                            />
                            <div
                                className={`${
                                    dt.heroID == 0 ? 'default' : ''
                                } hero-title ${
                                    hovHeroId === dt.heroID ? 'is-active' : ''
                                }`}
                            >
                                {dt.heroTitle}
                            </div>
                        </Fragment>
                    )
                })}

            <div className="grid-wrapper">
                <div className="blank-wrapper" />
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
                                        <div className="stats-bottom">
                                            <div className="stats-num">
                                                {dt.statsNum}
                                            </div>
                                            <div className="stats-desc">
                                                {dt.statsShortDesc}
                                            </div>
                                            <i
                                                onClick={() =>
                                                    (window.location.href =
                                                        '/solutions')
                                                }
                                            ></i>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
                {footerData && (
                    <div className="footer">
                        <span>{footerData.ojkText}</span>
                        {footerData.ojkImageHome && (
                            <img
                                src={`${assetDomain}${footerData.ojkImageHome.url}`}
                                alt="OJK-logo"
                            />
                        )}
                    </div>
                )}
            </div>
            {/* <div className="background-overlay" /> */}
            <div className="background-bottom" />

            <style jsx>{styles}</style>
        </>
    )
}
