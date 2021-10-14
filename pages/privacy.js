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
            isWebView={isWebView}
            title="Vida - Privacy Policy"
            headerWithBg={true}
        >
            <PrivacyScreen title="Privacy Policy" />
        </Layout>
    )
}
