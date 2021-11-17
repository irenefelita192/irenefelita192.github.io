import Layout from 'components/layout'
import TermsScreen from 'screens/terms'

import { getCookieLocale } from 'utils/global-util'
export async function getServerSideProps({ req, res, query }) {
    let langId = getCookieLocale(req, res) || ''
    return {
        props: {
            locale: langId,
            query,
        },
    }
}
export default function TermsConditions({ locale, query }) {
    // const [isWebView, setIsWebView] = useState(false)
    // useEffect(() => {
    //     if (window) {
    //         const urlParams = new URLSearchParams(
    //                 window?.location?.search ?? ''
    //             ),
    //             param = urlParams.get('isWebView')

    //         setIsWebView(param)
    //     }
    // }, [])
    const isWebView = query?.isWebView ?? false,
        paramLocale = query?.locale ?? null,
        finalLocale = paramLocale || locale
    const title =
        finalLocale == 'id' ? 'Syarat dan Ketentuan' : 'Terms and Conditions'
    return (
        <Layout title={title} isWebView={isWebView} headerWithBg={true}>
            <TermsScreen isWebView={isWebView} />
        </Layout>
    )
}
