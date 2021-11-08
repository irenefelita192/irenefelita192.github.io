import { useEffect, useState } from 'react'
import Layout from 'components/layout'
import BenefitTableScreen from 'screens/benefit-table'

export default function BenefitTable() {
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
        <Layout title="Benefit Table" isWebView={isWebView} headerWithBg={true}>
            <BenefitTableScreen isWebView={isWebView} />
        </Layout>
    )
}
