import Layout from 'components/layout'
import PartnerScreen from 'screens/partner_old'

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

/*** BACKUP ***/
/** AXA API **/
// import { useEffect, useState } from 'react'
// import Layout from 'components/layout'

// import PartnerScreen from 'screens/partner'

// import { getAXAPartnerCMS } from 'services/partner'
// import { getCookieLocale } from 'utils/global-util'
// export async function getServerSideProps({ req, res, query }) {
//     let langId = getCookieLocale(req, res) || ''
//     const cmsData = await getAXAPartnerCMS(query?.locale ?? langId)
//     //buat strapi type baru untuk yg axa api
//     // const partnerDt = await getProviderList(0, '-7.7974565', '110.370697', '')

//     return {
//         props: {
//             cmsData,
//             query,
//         },
//     }
// }

// export default function Partner({ cmsData, query }) {
//     const [sessionToken, setSessionToken] = useState({})
//     const [position, setPosition] = useState(null)
//     const isWebView = query?.isWebView ?? false

//     const positionErrorCallback = (error) => {
//         console.error('error', error)
//         setPosition({
//             lat: cmsData?.lat ?? '-7.2574719',
//             long: cmsData?.long ?? '112.7520883',
//         })
//     }
//     const showPosition = (pos) => {
//         const latPos = pos?.coords?.latitude ?? '',
//             longPos = pos?.coords?.longitude ?? ''
//         setPosition({ lat: latPos, long: longPos })
//     }

//     const getSessionToken = () => {
//         return (
//             Math.random()
//                 .toString(36)
//                 .slice(2)
//                 .split('')
//                 .map((e) =>
//                     Math.random() < Math.random() ? e.toUpperCase() : e
//                 )
//                 .join()
//                 .replaceAll(',', '') +
//             Math.random()
//                 .toString(36)
//                 .slice(2)
//                 .split('')
//                 .map((e) =>
//                     Math.random() < Math.random() ? e.toUpperCase() : e
//                 )
//                 .join()
//                 .replaceAll(',', '')
//         )
//     }

//     useEffect(() => {
//         if (navigator && navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//                 showPosition,
//                 positionErrorCallback
//             )
//         } else {
//             console.error('geolocation not supported')
//             positionErrorCallback()
//         }

//         if (window) {
//             setSessionToken(getSessionToken())
//         }
//     }, [])

//     return (
//         <Layout
//             isWebView={isWebView}
//             title={cmsData?.header?.title ?? ''}
//             headerWithBg={true}
//         >
//             <PartnerScreen
//                 cmsData={cmsData}
//                 userPosition={position}
//                 sessionToken={sessionToken}
//             />
//         </Layout>
//     )
// }
