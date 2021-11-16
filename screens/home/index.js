import { useState, useEffect } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getHomeData } from 'services/home'
import { getCookie } from 'utils/global-util'
import Loader from 'components/loader'
import Footer from 'components/footer'
import ParallaxDesktop from './parallax-desktop'
import ParallaxMobile from './parallax-mobile'
import ParallaxTablet from './parallax-tablet'
import ProductSection from './product-section'
import ProductSectionMobile from './product-section-mobile'
import AppSection from './app-section'
import BannerCTA from 'components/banner-cta'

export default function HomeScreen({ homeData }) {
    // const [homeData, setHomeData] = useState(null)

    const [isDesktop, setIsDesktop] = useState(true)
    const [isTablet, setIsTablet] = useState(false)

    useAsyncEffect(async (isMounted) => {
        let langId
        if (window) {
            langId = getCookie('lang')

            // if (
            //     window.innerWidth < window.innerHeight ||
            //     (window.innerHeight < 450 && window.innerWidth < 950)
            // ) {
            //     setIsDesktop(false)
            //     if (window.innerWidth >= 600 && window.innerHeight > 600) {
            //         setIsTablet(true)
            //     }
            // }
            if (window.innerWidth < window.innerHeight) {
                setIsDesktop(false)
                if (window.innerWidth >= 500) {
                    setIsTablet(true)
                }
            }
        }
        // const homeDt = await getHomeData(langId)

        if (!isMounted()) return

        // setHomeData(homeDt)
    }, [])

    // useEffect(() => {
    //     if (homeData && homeData.SectionOne) {
    //         if (typeof gtag !== 'undefined') {
    //             const gaId = process.env.config?.gaId ?? ''
    //             gtag('config', `${gaId}`, {
    //                 page_title: `Vida | ${homeData.SectionOne?.title ?? ''}`,
    //             })
    //         }
    //     }
    // }, [homeData])

    useEffect(() => {
        const urlParams = new URLSearchParams(window?.location?.search ?? ''),
            scrollParam = urlParams.get('pos')

        //just non desktop only
        //desktop scroll func is after image load
        //inside   <ParallaxDesktop/> component
        if (!isDesktop && homeData && scrollParam) {
            setTimeout(() => {
                const offsetTop = document.getElementById(scrollParam).offsetTop
                window.scrollTo({
                    top: offsetTop - 40,
                    left: 0,
                    behavior: 'smooth',
                })
            }, 500)
        }
    }, [homeData, isDesktop])

    if (!homeData) return <Loader />

    return (
        <div>
            {homeData.SectionOne && homeData.SectionTwo && (
                <>
                    {/* Section 1 and 2 start */}
                    {isDesktop && (
                        <ParallaxDesktop
                            sectionOne={homeData.SectionOne}
                            sectionTwo={homeData.SectionTwo}
                        />
                    )}
                    {!isDesktop && (
                        <>
                            {isTablet && (
                                <ParallaxTablet
                                    sectionOne={homeData.SectionOne}
                                    sectionTwo={homeData.SectionTwo}
                                />
                            )}
                            {!isTablet && (
                                <ParallaxMobile
                                    sectionOne={homeData.SectionOne}
                                    sectionTwo={homeData.SectionTwo}
                                />
                            )}
                        </>
                    )}
                    {/* Section 1 and 2 end */}
                </>
            )}

            {/* Section 3 start */}
            {homeData.SectionThree && (
                <>
                    {isDesktop && (
                        <ProductSection data={homeData.SectionThree} />
                    )}
                    {!isDesktop && (
                        <ProductSectionMobile
                            isTablet={isTablet}
                            data={homeData.SectionThree}
                        />
                    )}
                </>
            )}
            {/* Section 3 end */}

            {/* Section 4 start */}
            {homeData.SectionFour && (
                <AppSection data={homeData.SectionFour} isDesktop={isDesktop} />
            )}
            {/* Section 4 end */}
            {homeData.BottomBanner && (
                <BannerCTA data={homeData.BottomBanner} isDesktop={isDesktop} />
            )}
            <Footer />
        </div>
    )
}
