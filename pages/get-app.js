import { useAsyncEffect } from 'use-async-effect'
import { getFooter } from 'services/common'
import { getCookie } from 'utils/global-util'

// import Loader from 'components/loader'

export default function GetApp() {
    useAsyncEffect(async (isMounted) => {
        let langId,
            paramLocale,
            ios = false,
            isDesktop = true
        if (process.browser) {
            const urlParams = new URLSearchParams(
                window?.location?.search ?? ''
            )
            paramLocale = urlParams.get('locale')
            langId = getCookie('lang')

            ios = /(iPad|iPhone|iPod)/g.test(navigator.userAgent)
            if (window.innerWidth < window.innerHeight) {
                isDesktop = false
            }
        }

        const footerDt = await getFooter(paramLocale || langId)
        // window.open("market://details?id=com.your.app","_system")
        if (!isMounted()) return
        // setFooterData(footerDt)
        if (isDesktop) {
            window.location.href = footerDt?.homeUrl ?? 'https://kenalvida.com/'
        } else {
            if (ios) {
                const appStoreLink = footerDt
                    ? footerDt.AppStoreLink.replace(
                          'https://apps.apple.com/',
                          'itms-apps://'
                      )
                    : 'https://kenalvida.com/'
                window.location.href = appStoreLink
            } else if (!ios) {
                const playStoreLink = footerDt
                    ? `https://play.app.goo.gl/?link=${footerDt.PlayStoreLink}`
                    : 'https://kenalvida.com/'

                window.location.href = playStoreLink
            }
        }
    }, [])

    return <></>
}
