import { useEffect, useState } from 'react'
import Layout from 'components/layout'
import TermsScreen from 'screens/terms'

export default function TermsConditions() {
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
            title="Vida - Terms and Conditions"
            isWebView={isWebView}
            headerWithBg={true}
        >
            <TermsScreen />
        </Layout>
    )
}
