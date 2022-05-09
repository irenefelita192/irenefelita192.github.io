import { useState, useEffect } from 'react'
// import { useAsyncEffect } from 'use-async-effect'
// import { getAppData } from 'services/app'
// import { getCookie } from 'utils/global-util'
import Footer from 'components/footer'
import Loader from 'components/loader'
import AppSection from './app-section'
import AppSectionMobile from './app-section-mobile'
import ProductSection from './product-section'
import ProductSectionMobile from './product-section-mobile'
import BannerCTA from 'components/banner-cta'
import styles from './styles'
const assetDomain = process.env.config?.baseEndpoint ?? '',
    assetPrefix = process.env.config?.assetPrefix ?? ''

export default function App({ appData }) {
    // const [appData, setAppData] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [heroHeight, setHeroHeight] = useState(0)
    const [isWebpSupport, setIsWebpSupport] = useState(true)
    const [isDesktop, setIsDesktop] = useState(true)
    const [searchParam, setSearchParam] = useState('')

    // useAsyncEffect(async (isMounted) => {
    //     let langId
    //     if (window) {
    //         langId = getCookie('lang')

    //         if (window.innerWidth < window.innerHeight) {
    //             setIsDesktop(false)
    //             // if (window.innerWidth >= 500) {
    //             //     setIsTablet(true)
    //             // }
    //         }
    //     }
    //     const appDt = await getAppData(langId)

    //     if (!isMounted()) return

    //     setAppData(appD)
    // }, [])

    useEffect(() => {
        if (appData) {
            setTimeout(() => {
                setIsLoaded(true)
            }, 200)

            const urlParams = new URLSearchParams(
                    window?.location?.search ?? ''
                ),
                scrollParam = urlParams.get('pos')
            if (scrollParam) {
                setTimeout(() => {
                    const offsetTop =
                        document.getElementById(scrollParam).offsetTop
                    window.scrollTo({
                        top: offsetTop,
                        left: 0,
                        behavior: 'smooth',
                    })
                }, 500)
            }
        }
    }, [appData])

    useEffect(() => {
        if (window) {
            if (window.innerWidth < window.innerHeight) {
                setIsDesktop(false)
            }
            setHeroHeight(window.innerHeight)
            if (window.Modernizr.webp) {
                setIsWebpSupport(true)
            } else {
                setIsWebpSupport(false)
            }

            setSearchParam(window.location.search)
        }

        return () => {
            document.removeEventListener('click', () => {})
        }
    }, [])

    if (!appData || !isLoaded) return <Loader />
    const { SectionOne: heroData } = appData
    let heroImage = `${assetDomain}${heroData?.image?.url ?? ''}`
    if (heroData) {
        if (isDesktop) {
            if (!heroData.imageWebp || !isWebpSupport) {
                heroImage = `${assetDomain}${heroData?.image?.url ?? ''}`
            } else {
                heroImage = `${assetDomain}${heroData?.imageWebp?.url ?? ''}`
            }
        } else {
            if (!heroData.imageMobileWebp || !isWebpSupport) {
                heroImage = `${assetDomain}${heroData?.imageMobile?.url ?? ''}`
            } else {
                heroImage = `${assetDomain}${
                    heroData?.imageMobileWebp?.url ?? ''
                }`
            }
        }
    }
    return (
        <>
            {heroData && (
                <div
                    className={`hero-wrapper ${isDesktop ? '' : 'is-mobile'}`}
                    style={{
                        height: `${heroHeight}px`,
                        backgroundImage: `url(${heroImage})`,
                    }}
                >
                    <div className="hero-text">
                        <h1>{heroData?.title ?? ''}</h1>
                        <div>{heroData?.description ?? ''}</div>
                    </div>
                </div>
            )}
            {appData.SectionTwo && (
                <>
                    {isDesktop && (
                        <AppSection
                            data={appData.SectionTwo.appAnimation}
                            title={appData.SectionTwo.title || ''}
                            isDesktop={isDesktop}
                        />
                    )}
                    {!isDesktop && (
                        <AppSectionMobile
                            data={appData.SectionTwo.appAnimation}
                            title={appData.SectionTwo.title || ''}
                            isDesktop={isDesktop}
                        />
                    )}
                </>
            )}

            {appData.SectionThree && (
                <>
                    {isDesktop && (
                        <ProductSection
                            data={appData.SectionThree.productAnimation}
                            content={appData.SectionThree.content || ''}
                            isDesktop={isDesktop}
                        />
                    )}
                    {!isDesktop && (
                        <ProductSectionMobile
                            data={appData.SectionThree.productAnimation}
                            content={appData.SectionThree.content || ''}
                            isDesktop={isDesktop}
                        />
                    )}
                </>
            )}
            {appData.BottomBanner && (
                <BannerCTA
                    data={appData.BottomBanner}
                    isDesktop={isDesktop}
                    searchParam={searchParam}
                />
            )}

            <Footer />
            <style jsx>{styles}</style>
        </>
    )
}
