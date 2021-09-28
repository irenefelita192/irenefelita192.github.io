import { useState, useEffect } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getHomeData } from 'services/home'
import { getCookie } from 'utils/global-util'
import Loader from 'components/loader'
import styles from './styles'
import Footer from 'components/footer'
import ParallaxSection from './parallax-desktop'
import ProductSection from './product-section'
import AppSection from './app-section'
import BannerCTA from 'components/banner-cta'
// import { constant } from './parallax-desktop/constant'
const assetDomain = process.env.config?.baseEndpoint ?? '',
    assetPrefix = process.env.config?.assetPrefix ?? ''

export default function HomeScreen() {
    const [homeData, setHomeData] = useState(null)
    const [isMobile, setIsMobile] = useState(false)
    const [isPortrait, setIsPortrait] = useState(false)
    const [isIos, setIsIos] = useState(false)

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

    if (!homeData) return <Loader />

    return (
        <div>
            {/* Section 1 and 2 start */}
            <ParallaxSection isPortrait={isPortrait} homeData={homeData} />
            {/* Section 1 and 2 end */}
            {/* Section 3 start */}
            <ProductSection />
            {/* Section 3 end */}
            {/* Section 4 start */}
            <AppSection />
            {/* Section 4 end */}

            <BannerCTA data={homeData} />
            <Footer />
            <style jsx>{styles}</style>
        </div>
    )
}
