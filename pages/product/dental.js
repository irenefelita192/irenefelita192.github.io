import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import Layout from 'components/layout'
import ProductScreen from 'screens/product'

import { getProductData } from 'services/product'
import { getCookie } from 'utils/global-util'
export default function Product() {
    const [productData, setProductData] = useState(null)
    useAsyncEffect(async (isMounted) => {
        let langId,
            productName = ''
        if (process.browser) {
            langId = getCookie('lang')

            if (window.innerWidth < window.innerHeight) {
                setIsDesktop(false)
            }
        }

        const prdDt = await getProductData('dental', langId)
        console.log('prdDt', prdDt)
        if (!isMounted()) return

        setProductData(prdDt)
    }, [])
    return (
        <Layout title={productData?.SectionOne?.title ?? ''}>
            <ProductScreen />
        </Layout>
    )
}
