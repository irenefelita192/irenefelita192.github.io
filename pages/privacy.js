import { useEffect, useState } from 'react'
import Layout from 'components/layout'
import PrivacyScreen from 'screens/privacy'

export default function Privacy() {
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
            title="Privacy Policy"
            isWebView={isWebView}
            headerWithBg={true}
        >
            <PrivacyScreen />
        </Layout>
    )
}
