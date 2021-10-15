import { useEffect, useState } from 'react'
import Layout from 'components/layout'
import PartnerScreen from 'screens/partner'

// export async function getStaticProps({ locale }) {
//     console.log('locale', locale)
//     return {
//         props: {},
//     }
// }

export default function Partner() {
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
            title="Vida - Our Partners"
            headerWithBg={true}
        >
            <PartnerScreen />
        </Layout>
    )
}
