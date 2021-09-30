import { useState, useEffect } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getHomeData } from 'services/home'
import { getCookie } from 'utils/global-util'
import Loader from 'components/loader'
// import styles from './styles'
import Footer from 'components/footer'
import ParallaxDesktop from './parallax-desktop'
import ParallaxMobile from './parallax-mobile'
import ProductSection from './product-section'
import ProductSectionMobile from './product-section-mobile'
import AppSection from './app-section'
import BannerCTA from 'components/banner-cta'
// import { constant } from './parallax-desktop/constant'
const assetDomain = process.env.config?.baseEndpoint ?? '',
    assetPrefix = process.env.config?.assetPrefix ?? ''

export default function HomeScreen() {
    const [homeData, setHomeData] = useState(null)

    const [isDesktop, setIsDesktop] = useState(true)
    const [isIos, setIsIos] = useState(false)

    useAsyncEffect(async (isMounted) => {
        let langId
        if (window) {
            langId = getCookie('lang')

            if (window.innerWidth <= 1024) {
                setIsDesktop(false)
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
            {isDesktop && (
                <ParallaxDesktop
                    sectionOne={homeData.SectionOne}
                    sectionTwo={homeData.SectionTwo}
                />
            )}
            {!isDesktop && (
                <ParallaxMobile
                    sectionOne={homeData.SectionOne}
                    sectionTwo={homeData.SectionTwo}
                />
            )}
            {/* Section 1 and 2 end */}

            {/* Section 3 start */}
            {isDesktop && <ProductSection data={homeData.SectionThree} />}
            {!isDesktop && (
                <ProductSectionMobile data={homeData.SectionThree} />
            )}
            {/* Section 3 end */}

            {/* Section 4 start */}
            <AppSection data={homeData.SectionFour} />
            {/* Section 4 end */}

            <BannerCTA data={homeData.BottomBanner} />
            <Footer />
            {/* <style jsx>{styles}</style> */}
        </div>
    )
}
