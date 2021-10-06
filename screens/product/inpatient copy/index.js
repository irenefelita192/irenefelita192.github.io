import { useState, useEffect } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getProductData } from 'services/product'
import { getCookie } from 'utils/global-util'
import Loader from 'components/loader'
import Footer from 'components/footer'
import SectionOne from '../section-one'
import SectionTwo from '../section-two'
import SectionThree from '../section-three'
import OtherProducts from '../other-products'
import BannerCTA from 'components/banner-cta'

export default function Inpatient() {
    const [productData, setProductData] = useState(null)
    const [isDesktop, setIsDesktop] = useState(true)
    useAsyncEffect(async (isMounted) => {
        let langId
        if (process.browser) {
            langId = getCookie('lang')

            if (window.innerWidth < window.innerHeight) {
                setIsDesktop(false)
                // if (window.innerWidth >= 600) {
                //     setIsTablet(true)
                // }
            }
        }
        const prdDt = await getProductData('outpatient', langId)

        if (!isMounted()) return

        setProductData(prdDt)
    }, [])

    if (!productData) return <Loader />

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
