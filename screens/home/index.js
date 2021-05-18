import { useState } from 'react'
import styles from './styles'
import globalStyles from './global-styles'

const heroData = [
    {
        id: 0,
        heroTitle: 'Best Protection Solution at Every Stage of Life',
        heroImg: '/images/Hero-Image-0.webp',
    },
    {
        id: 1,
        heroTitle: 'LippoLife Protects Many Indonesian Families',
        heroImg: '/images/Hero-Image-1.webp',
    },
    {
        id: 2,
        heroTitle: 'A Life Insurance with Solid Financial Strength',
        heroImg: '/images/Hero-Image-2.webp',
    },
    {
        id: 3,
        heroTitle: 'The Company is Well Capitalized to Further Expand',
        heroImg: '/images/Hero-Image-3.webp',
    },
    {
        id: 4,
        heroTitle: 'LippoLife Experience Good Business Growth Over the Years',
        heroImg: '/images/Hero-Image-4.webp',
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
    // const [hoverRef, isHovered] = useHover()
    const [heroTitle, setHeroTitle] = useState(heroData[0].heroTitle)
    const [heroImage, setHeroImage] = useState(heroData[0].heroImg)
    const onMouseEnter = (id) => {
        const selData = heroData.find((dt) => {
            return dt.id === id
        })
        const selImg = selData && selData.heroImg,
            selTitle = selData && selData.heroTitle
        console.log('selImg', selImg)
        setHeroImage(selImg)
        setHeroTitle(selTitle)
    }

    const onMouseLeave = () => {
        setHeroImage(heroData[0].heroImg)
        setHeroTitle(heroData[0].heroTitle)
    }

    // useEffect(() => {
    //     console.log('using effect')
    // }, [])
    // if (Modernizr.webp) {
    //     console.log('amann')
    // }
    console.log('heroImage', heroImage)
    if (process.browser) console.log('window.Modernizr', window.Modernizr)
    return (
        <>
            {/* <div className="hero-wrapper"></div> */}

            <img src={heroImage} className="hero-img" />

            <div className="hero-title">{heroTitle}</div>
            <div className="grid-wrapper">
                <div className="blank-wrapper" />
                <div className="stats-wrapper">
                    <div className="columns">
                        {/* <div className="column">
                            <div className="stats-top-desc">
                                <span>
                                    LippoLife always cares for the people of
                                    Indonesia. During this pandemic, LippoLife
                                    continues to maintain its commitment to help
                                    affected families by paying claims and
                                    benefits totaling 27 billion in 2020.
                                </span>
                            </div>
                            <div className="stats-top">
                                <span>Protecting Many Families</span>
                            </div>
                            <div className="stats-bottom">
                                <div className="stats-num">Rp27bn</div>
                                <div className="stats-desc">
                                    Claims & Benefits Paid
                                </div>
                                <i></i>
                            </div>
                        </div>
                        <div className="column">
                            <div className="stats-top-desc">
                                <span>
                                    The company has RBC 774% in 2020, far above
                                    the limit required by OJK of 120%
                                </span>
                            </div>
                            <div className="stats-top">
                                Solid Financial Strength
                            </div>
                            <div className="stats-bottom">
                                <div className="stats-num">774%</div>
                                <div className="stats-desc">RBC</div>
                                <i></i>
                            </div>
                        </div>
                        <div className="column">
                            <div className="stats-top-desc">
                                <span>
                                    Shareholders are committed to continuing to
                                    strengthen the company. Over the last few
                                    years, shareholders have added capital of 85
                                    billion.
                                </span>
                            </div>
                            <div className="stats-top">
                                Well Capitalised Company
                            </div>
                            <div className="stats-bottom">
                                <div className="stats-num">Rp200bn</div>
                                <div className="stats-desc">Share Capital</div>
                                <i></i>
                            </div>
                        </div>
                        <div className="column">
                            <div className="stats-top-desc">
                                <span>
                                    The company has RBC 774% in 2020, far above
                                    the limit required by OJK of 120%
                                </span>
                            </div>
                            <div className="stats-top">
                                Good Business Growth
                            </div>
                            <div className="stats-bottom">
                                <div className="stats-num">Rp49bn</div>
                                <div className="stats-desc">GWP</div>
                                <i></i>
                            </div>
                        </div>*/}

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
