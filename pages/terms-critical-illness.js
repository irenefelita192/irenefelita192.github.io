import { useEffect, useState } from 'react'
import Layout from 'components/layout'
import TermsCriticalIllness from 'screens/terms-critical-illness'

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
            title="Syarat dan Ketentuan untuk Mendapatkan Santunan Penyakit Kritis"
            isWebView={isWebView}
            headerWithBg={true}
        >
            <TermsCriticalIllness isWebView={isWebView} />
        </Layout>
    )
}
