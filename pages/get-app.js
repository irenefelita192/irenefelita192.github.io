import { useAsyncEffect } from 'use-async-effect'
import { getFooter } from 'services/common'
import { getCookie } from 'utils/global-util'

import Loader from 'components/loader'

export default function GetApp() {
    useAsyncEffect(async (isMounted) => {
        let langId, paramLocale
        if (process.browser) {
            const urlParams = new URLSearchParams(
                window?.location?.search ?? ''
            )
            paramLocale = urlParams.get('locale')
            langId = getCookie('lang')
        }
        const footerDt = await getFooter(paramLocale || langId)
        let ios = false
        if (process.browser) {
            ios = /(iPad|iPhone|iPod|Mac OS)/g.test(navigator.userAgent)
        }

        if (!isMounted()) return
        // setFooterData(footerDt)
        window.location.href = ios
            ? footerDt.AppStoreLink
            : footerDt.PlayStoreLink
    }, [])

    return <Loader />
}
