import { useEffect, useState } from 'react'
import Layout from 'components/layout'
import TermsScreen from 'screens/terms'
import { getTerms } from 'services/privacy-terms'
import { getCookieLocale } from 'utils/global-util'

export async function getServerSideProps({ req, res }) {
    // Fetch data from external API
    console.log('process.env.BASE_API', process.env.BASE_API)
    const api = process.env.BASE_API
    let langId
    if (process.browser) {
        langId = getCookieLocale(req, res)
    }
    const privacyDt = await getTerms(langId)

    // Pass data to the page via props
    return { props: { privacyDt, api } }
}

export default function TermsConditions(props) {
    const [isWebView, setIsWebView] = useState(false)
    useEffect(() => {
        // if (window) {
        //     const urlParams = new URLSearchParams(
        //             window?.location?.search ?? ''
        //         ),
        //         param = urlParams.get('isWebView')

        //     setIsWebView(param)
        // }
        console.log('PROPS', props)
    }, [])

    return <Layout title="Vida - Terms and Conditions"></Layout>
}
