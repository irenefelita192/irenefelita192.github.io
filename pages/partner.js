import { useEffect, useState } from 'react'
import Layout from 'components/layout'
import PartnerScreen from 'screens/partner'

import { getPartnerCMS } from 'services/partner'
import { getCookieLocale } from 'utils/global-util'
export async function getServerSideProps({ req, res, query }) {
    let langId = getCookieLocale(req, res) || ''
    const partnerDt = await getPartnerCMS(query?.locale ?? langId)
    return {
        props: {
            data: { ...partnerDt },
            query,
        },
    }
}

export default function Partner({ data, query }) {
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
    const isWebView = query?.isWebView ?? false

    return (
        <Layout
            isWebView={isWebView}
            title={data?.header?.title ?? ''}
            headerWithBg={true}
        >
            <PartnerScreen partnerData={data} />
        </Layout>
    )
}
