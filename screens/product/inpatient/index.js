import { useState, useEffect } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getProductData } from 'services/product'
import { getCookie } from 'utils/global-util'
import Loader from 'components/loader'
import styles from './styles'
import Footer from 'components/footer'
import SectionOne from '../section-one'
import SectionTwo from '../section-two'
import SectionThree from '../section-three'
import OtherProducts from '../other-products'
import BannerCTA from 'components/banner-cta'

export default function Inpatient() {
    const [productData, setProductData] = useState(null)
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
        const prdDt = await getProductData('inpatient', langId)

        if (!isMounted()) return

        setProductData(prdDt)
    }, [])

    if (!productData) return <Loader />

    return (
        <>
            {productData.SectionOne && (
                <SectionOne data={productData.SectionOne} />
            )}
            {productData.SectionTwo && (
                <SectionTwo data={productData.SectionTwo} />
            )}
            {productData.SectionThree && (
                <SectionThree data={productData.SectionThree} />
            )}
            {productData.BottomBanner && (
                <BannerCTA data={productData.BottomBanner} />
            )}
            {productData.productCards && (
                <OtherProducts
                    data={productData.productCards}
                    title={productData.productCardTitle}
                />
            )}
            <Footer />
            <style jsx>{styles}</style>
        </>
    )
}
