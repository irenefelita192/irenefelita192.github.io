import { useEffect, useState } from 'react'
import Layout from 'components/layout'
import ProductInfoScreen from 'screens/product-information'

export default function ProductInfo() {
    const [isWebView, setIsWebView] = useState(false)
    useEffect(() => {
        if (window) {
            const urlParams = new URLSearchParams(
                    window?.location?.search ?? ''
                ),
                param = urlParams.get('isWebView')

            setIsWebView(param)
        }
    }, [])

    return (
        <Layout
            title="Product Information"
            isWebView={isWebView}
            headerWithBg={true}
        >
            <ProductInfoScreen isWebView={isWebView} />
        </Layout>
    )
}
