import { useState, useEffect } from 'react'
// import { useAsyncEffect } from 'use-async-effect'
// import { getProductData } from 'services/product'
// import { getCookie } from 'utils/global-util'
import Loader from 'components/loader'
import Footer from 'components/footer'
import SectionOne from './section-one'
import SectionTwo from './section-two'
import SectionThree from './section-three'
import OtherProducts from './other-products'
import BannerCTA from 'components/banner-cta'

export default function Product({ productData }) {
    // const [productData, setProductData] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [isDesktop, setIsDesktop] = useState(true)
    // useAsyncEffect(async (isMounted) => {
    //     let langId,
    //         productName = ''
    //     if (process.browser) {
    //         langId = getCookie('lang')
    //         const pathname = window.location.pathname,
    //             productSlug = pathname.replace('/product/', '')
    //         productName =
    //             productSlug.lastIndexOf('/') == productSlug.length - 1
    //                 ? productSlug.slice(0, productSlug.lastIndexOf('/'))
    //                 : productSlug
    //         if (window.innerWidth < window.innerHeight) {
    //             setIsDesktop(false)
    //         }
    //     }

    //     const prdDt = await getProductData(productName, langId)

    //     if (!isMounted()) return

    //     setProductData(prdDt)
    // }, [])

    useEffect(() => {
        if (window && window.innerWidth < window.innerHeight) {
            setIsDesktop(false)
        }
    }, [])

    useEffect(() => {
        if (productData) {
            setTimeout(() => {
                setIsLoaded(true)
            }, 200)
        }
    }, [productData])

    // useEffect(() => {
    //     if (productData && productData.SectionOne) {
    //         if (typeof gtag !== 'undefined') {
    //             const gaId = process.env.config?.gaId ?? ''
    //             gtag('config', `${gaId}`, {
    //                 page_title: `Vida | ${productData.SectionOne?.title ?? ''}`,
    //             })
    //         }
    //     }
    // }, [productData])

    if (!productData || !isLoaded) return <Loader />

    return (
        <>
            {productData.SectionOne && (
                <SectionOne
                    data={productData.SectionOne}
                    isDesktop={isDesktop}
                />
            )}
            {productData.SectionTwo && (
                <SectionTwo
                    data={productData.SectionTwo}
                    isDesktop={isDesktop}
                />
            )}
            {productData.SectionThree && (
                <SectionThree
                    data={productData.SectionThree}
                    isDesktop={isDesktop}
                />
            )}
            {productData.BottomBanner && (
                <BannerCTA
                    data={productData.BottomBanner}
                    isDesktop={isDesktop}
                    isProduct
                />
            )}
            {productData.productCards && (
                <OtherProducts
                    data={productData.productCards}
                    title={productData.productCardTitle}
                    isDesktop={isDesktop}
                />
            )}
            <Footer />
        </>
    )
}
