import { useState, useEffect } from 'react'
import styles from './styles'
import globalStyles from './global-styles'

const heroData = [
    {
        id: 0,
        heroTitle: 'asasBest Protection Solution at Every Stage of Life',
        heroTitleEn: 'Best Protection Solution at Every Stage of Life',
        heroImg: '/images/Hero-Image-0.webp',
        heroImgNoWebp: '/images/Hero-Image-0.png',
    },
    {
        id: 1,
        heroTitle: 'sssLippoLife Protects Many Indonesian Families',
        heroTitleEn: 'Best Protection Solution at Every Stage of Life',
        heroImg: '/images/Hero-Image-1.webp',
        heroImgNoWebp: '/images/Hero-Image-1.png',
    },
    {
        id: 2,
        heroTitle: 'ddddA Life Insurance with Solid Financial Strength',
        heroTitleEn: 'Best Protection Solution at Every Stage of Life',
        heroImg: '/images/Hero-Image-2.webp',
        heroImgNoWebp: '/images/Hero-Image-2.png',
    },
    {
        id: 3,
        heroTitle: 'asdaThe Company is Well Capitalized to Further Expand',
        heroTitleEn: 'Best Protection Solution at Every Stage of Life',
        heroImg: '/images/Hero-Image-3.webp',
        heroImgNoWebp: '/images/Hero-Image-3.png',
    },
    {
        id: 4,
        heroTitle:
            'sadsLippoLife Experience Good Business Growth Over the Years',
        heroTitleEn: 'Best Protection Solution at Every Stage of Life',
        heroImg: '/images/Hero-Image-4.webp',
        heroImgNoWebp: '/images/Hero-Image-4.png',
    },
]
const homeData = [
    {
        id: 1,
        statsDesc:
            'LippoLife always cares for the people of Indonesia. During this pandemic, LippoLife continues to maintain its commitment to help affected families by paying claims and benefits totaling 27 billion in 2020.',
        statsTitle: 'Protecting Many Families',
        statsNum: 'Rp27bn',
        statsShortDesc: 'Claims & Benefits Paid',
    },
    {
        id: 2,

        statsDesc:
            'The company has RBC 774% in 2020, far above the limit required by OJK of 120%',
        statsTitle: 'Solid Financial Strength',
        statsNum: '774%',
        statsShortDesc: 'RBC',
    },
    {
        id: 3,
        statsDesc:
            'The company has RBC 774% in 2020, far above the limit required by OJK of 120%',
        statsTitle: 'Solid Financial Strength',
        statsNum: '774%',
        statsShortDesc: 'RBC',
    },
    {
        id: 4,
        statsDesc:
            'The company has RBC 774% in 2020, far above the limit required by OJK of 120%',
        statsTitle: 'Solid Financial Strength',
        statsNum: '774%',
        statsShortDesc: 'RBC',
    },
]

export default function HomeScreen() {
    const [isWebp, setIsWebp] = useState(true)

    const [isDesktop, setIsDesktop] = useState(true)

    const defaultHeroImg = isWebp
        ? heroData[0].heroImg
        : heroData[0].heroImgNoWebp
    const [hovHeroId, setHovHeroId] = useState(0)
    // const [heroTitle, setHeroTitle] = useState('')
    const [isHovered, setIsHovered] = useState(false)
    useEffect(() => {
        if (process.browser) {
            if (document && document.body.clientWidth < 1024) {
                setIsDesktop(false)
            }
            if (window.Modernizr.webp) {
                setIsWebp(true)
            } else {
                setIsWebp(false)
            }
        }
        console.log('configg', process.env.config)
    }, [])

    const onMouseEnter = (id) => {
        const selData = heroData.find((dt) => {
            return dt.id === id
        })
        const selId = selData && selData.id,
            selTitle = selData && selData.heroTitle

        setHovHeroId(selId)
        // setHeroTitle(selTitle)
        setIsHovered(true)
    }

    const onMouseLeave = () => {
        setHovHeroId(0)
        // setHeroTitle(heroData[0].heroTitle)
        setIsHovered(false)
    }

    return (
        <>
            {heroData &&
                heroData.map((dt) => (
                    <img
                        key={dt.id}
                        src={isWebp ? dt.heroImg : dt.heroImgNoWebp}
                        className={`${dt.id == 0 ? 'default' : ''} hero-img ${
                            hovHeroId === dt.id ? 'is-active' : ''
                        }`}
                    />
                ))}

            {heroData &&
                heroData.map((dt) => (
                    <div
                        key={dt.id}
                        className={`${dt.id == 0 ? 'default' : ''} hero-title ${
                            hovHeroId === dt.id ? 'is-active' : ''
                        }`}
                    >
                        {dt.heroTitle}
                    </div>
                ))}
            {/* <div className="hero-title">{heroTitle}</div> */}
            <div className="grid-wrapper">
                <div className="blank-wrapper" />
                <div className="stats-wrapper">
                    <div className="columns">
                        {homeData &&
                            homeData.map((dt) => {
                                return (
                                    <div
                                        key={dt.id}
                                        className="column"
                                        onMouseEnter={() => onMouseEnter(dt.id)}
                                        onMouseLeave={() => onMouseLeave(dt.id)}
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
                                            <i></i>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
                <div className="footer">
                    <span>Terdaftar & Diawasi Oleh:</span>
                    <img src="/images/logo/OJK-Logo.png" alt="OJK-logo" />
                </div>
            </div>
            <div className="background-overlay" />
            <div className="background-bottom" />

            <style jsx>{styles}</style>
            <style jsx global>
                {globalStyles}
            </style>
        </>
    )
}
