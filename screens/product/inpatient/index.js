import { useState, useEffect } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getHomeData } from 'services/home'
import { getCookie } from 'utils/global-util'
import Loader from 'components/loader'
import styles from './styles'
import Footer from 'components/footer'
import ParallaxDesktop from './parallax-desktop'
const assetPrefix = process.env.config?.assetPrefix ?? '',
    assetDomain = process.env.config?.baseEndpoint ?? ''

const questionsDummy = [
    {
        id: '1',
        questionText: '"What if my health condition changes?"',
        questionTextOne: '"What if my health',
        questionTextTwo: 'condition changes?"',
        bubbleImg: '../../images/parallax/bubble1.png',
        bubbleId: 'bubble1',
        portraitImg: '../../images/parallax/portrait-01.png',
    },
    {
        id: '2',
        questionText: `"It's common to get lung cancer. What if i already get one?"`,
        questionTextOne: `"It's common to get lung cancer.`,
        questionTextTwo: 'What if i already get one?"',
        bubbleImg: '../../images/parallax/bubble2.png',
        bubbleId: 'bubble2',
        portraitImg: '../../images/parallax/portrait-02.png',
        portraitId: 'portrait2',
    },
    {
        id: '3',
        questionText:
            '"I lost my sight at 30. What if the same thing happen to you?"',
        questionTextOne: `"I lost my sight at 30. What if the`,
        questionTextTwo: 'same thing happen to you?"',
        bubbleImg: '../../images/parallax/bubble3.png',
        bubbleId: 'bubble3',
        portraitImg: '../../images/parallax/portrait-03.png',
        portraitId: 'portrait3',
    },
]

export default function Inpatient() {
    const [homeData, setHomeData] = useState(null)
    const [isMobile, setIsMobile] = useState(false)
    const [isPortrait, setIsPortrait] = useState(false)
    const [isIos, setIsIos] = useState(false)
    const [heroHeight, setHeroHeight] = useState(0)

    let headerHeight = 80

    useAsyncEffect(async (isMounted) => {
        let langId
        if (process.browser) {
            langId = getCookie('lang')
            const mob =
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                )
            setIsMobile(mob)

            if (window.innerWidth <= 768) {
                setIsPortrait(true)
                setHeroHeight(window.innerHeight - headerHeight)
            }

            const ios = /(iPad|iPhone|iPod)/g.test(navigator.userAgent)
            setIsIos(ios)
        }
        const homeDt = await getHomeData(langId ? langId : 'id')

        if (!isMounted()) return

        setHomeData(homeDt)
    }, [])

    if (!homeData) return <Loader />

    const { header } = homeData
    // let heroImg = header.desktopImage
    //     ? `${assetDomain}${header.desktopImage.url}`
    //     : ''
    // if (isPortrait) {
    //     heroImg = header.mobileImage
    //         ? `${assetDomain}${header.mobileImage.url}`
    //         : ''
    // }
    let heroImg = `${assetPrefix}/images/inpatient/hero.jpg`
    return (
        <>
            {/* {header && ( */}
            <div
                className={`hero-wrapper`}
                style={{
                    backgroundImage: `url(${heroImg})`,
                    height: isPortrait ? `${heroHeight}px` : 'auto',
                }}
            >
                <div className="hero-title"> {header?.title ?? ''}</div>
                <div className="hero-desc">{header?.description ?? ''}</div>
            </div>
            {/* )} */}

            <div className="stats-wrapper">
                <div className="stats-header">You might don't know</div>
                <div className="counter">
                    <ul className="counter-content">
                        <li className="counter-content-digit">
                            <span className="counter-item counter-item--9 counter-item-digit"></span>
                        </li>
                        <li className="counter-content-digit">
                            <span className="counter-item counter-item--commapoint">
                                ,
                            </span>
                            <span className="counter-item counter-item--6 counter-item-digit"></span>
                        </li>
                        <li className="counter-content-digit">
                            <span className="counter-item counter-item--0 counter-item-digit"></span>
                        </li>
                        <li className="counter-content-digit">
                            <span className="counter-item counter-item--0 counter-item-digit"></span>
                        </li>
                        <li className="counter-content-digit">
                            <span className="counter-item counter-item--commapoint">
                                ,
                            </span>
                            <span className="counter-item counter-item--0 counter-item-digit"></span>
                        </li>
                        <li className="counter-content-digit">
                            <span className="counter-item counter-item--0 counter-item-digit"></span>
                        </li>

                        <li className="counter-content-digit">
                            <span className="counter-item counter-item--0 counter-item-digit"></span>
                        </li>
                    </ul>
                </div>
                <div className="stats-title">
                    People are estimated to have died from cancer
                </div>
                <div className="stats-note">Data provided by WHO</div>
                <div className="stats-desc">
                    You have a long wait and multiple tests, the open-ended
                    waiting makes you frustrated.
                </div>
            </div>
            <div className="content-wrapper">
                <div className="content-opening">
                    There is always some trauma, The fear of going to the
                    hospital.
                </div>
                <div className="content-opening-2">
                    If you have cancer, there’s always a question….
                </div>

                <ParallaxDesktop data={questionsDummy} />
            </div>

            <Footer />
            <style jsx>{styles}</style>
        </>
    )
}
