import { useState, useEffect } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getHomeData } from 'services/home'
import { getCookie } from 'utils/global-util'
import Loader from 'components/loader'
import styles from './styles'
import Footer from 'components/footer'
import ParallaxDesktop from './parallax-desktop'
import SectionOne from '../section-one'
import SectionTwo from '../section-two'
import SectionThree from '../section-three'
const assetPrefix = process.env.config?.assetPrefix ?? '',
    assetDomain = process.env.config?.baseEndpoint ?? ''

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
            <SectionOne />
            <SectionTwo />

            <div className="content-wrapper">
                <SectionThree />
            </div>

            <Footer />
            <style jsx>{styles}</style>
        </>
    )
}
