import { useEffect, useState } from 'react'
import { getFooter } from 'services/common'
import { validUrlWithUTM } from 'utils/url'

import { getCookieLocale } from 'utils/global-util'
export async function getServerSideProps({ req, res, query }) {
    let paramLocale = query?.locale || null,
        lang = paramLocale ? paramLocale : getCookieLocale(req, res) || ''
    const footerDt = await getFooter(lang)

    return {
        props: {
            data: { ...footerDt },
        },
    }
}

export default function GetApp({ data }) {
    function redirectApp(searchParam) {
        let ios = false,
            isDesktop = true
        if (window) {
            ios = /(iPad|iPhone|iPod)/g.test(navigator.userAgent)

            if (window.innerWidth < window.innerHeight) {
                isDesktop = false
            }
        }
        if (isDesktop) {
            window.location.href = data?.homeUrl ?? 'https://kenalvida.com/'
        } else {
            if (ios) {
                const storeUrl = searchParam
                    ? validUrlWithUTM(data.AppStoreLink, searchParam, true)
                    : data.AppStoreLink.replace(
                          'https://apps.apple.com/',
                          'itms-apps://'
                      )
                const appStoreLink =
                    data && data.AppStoreLink
                        ? storeUrl
                        : 'https://kenalvida.com/'

                // console.log('appStoreLink', appStoreLink)
                window.location.href = appStoreLink
            } else if (!ios) {
                const playStoreLink =
                    data && data.PlayStoreLink
                        ? validUrlWithUTM(data.PlayStoreLink, searchParam)
                        : 'https://kenalvida.com/'
                // console.log('playStoreLink', playStoreLink)
                // validUrlWithUTM(
                //     `https://play.app.goo.gl/?link=${data.PlayStoreLink}`,
                //     searchParam
                // )
                window.location.href = playStoreLink
            }
        }
    }

    useEffect(() => {
        const searchParam = window.location.search
        const domain = window ? window.location.host : ''
        if (searchParam) {
            if (domain.indexOf('localhost') > -1) {
                document.cookie = `_sp=${searchParam};path=/`
            } else {
                document.cookie = `_sp=${searchParam};path=/;domain=.${domain}`
            }
        }

        setTimeout(() => {
            redirectApp(searchParam)
        }, 300)
    }, [])

    return <></>
}

// import Layout from 'components/layout'
// import { useAsyncEffect } from 'use-async-effect'
// import { getFooter } from 'services/common'
// import { getCookie } from 'utils/global-util'

// export default function GetApp() {
//     useAsyncEffect(async (isMounted) => {
//         let langId,
//             paramLocale,
//             ios = false,
//             isDesktop = true
//         if (process.browser) {
//             const urlParams = new URLSearchParams(
//                 window?.location?.search ?? ''
//             )
//             paramLocale = urlParams.get('locale')
//             langId = getCookie('lang')

//             ios = /(iPad|iPhone|iPod)/g.test(navigator.userAgent)
//             if (window.innerWidth < window.innerHeight) {
//                 isDesktop = false
//             }
//         }

//         const footerDt = await getFooter(paramLocale || langId)
//         // window.open("market://details?id=com.your.app","_system")
//         if (!isMounted()) return
//         // setFooterData(footerDt)
//         if (isDesktop) {
//             window.location.href = footerDt?.homeUrl ?? 'https://kenalvida.com/'
//         } else {
//             if (ios) {
//                 const appStoreLink =
//                     footerDt && footerDt.AppStoreLink
//                         ? footerDt.AppStoreLink.replace(
//                               'https://apps.apple.com/',
//                               'itms-apps://'
//                           )
//                         : 'https://kenalvida.com/'
//                 window.location.href = appStoreLink
//             } else if (!ios) {
//                 const playStoreLink =
//                     footerDt && footerDt.PlayStoreLink
//                         ? `https://play.app.goo.gl/?link=${footerDt.PlayStoreLink}`
//                         : 'https://kenalvida.com/'

//                 window.location.href = playStoreLink
//             }
//         }
//     }, [])

//     return <></>
// }
