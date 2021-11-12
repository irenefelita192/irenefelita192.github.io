import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getFooter } from 'services/common'
import { getCookie } from 'utils/global-util'
import FooterDesktop from './desktop'
import FooterMobile from './mobile'

export default function Footer({ loadedCallback }) {
    const [isDesktop, setIsDesktop] = useState(true)
    const [footerData, setFooterData] = useState(null)

    useAsyncEffect(async (isMounted) => {
        let langId, paramLocale
        if (process.browser) {
            const urlParams = new URLSearchParams(
                window?.location?.search ?? ''
            )
            paramLocale = urlParams.get('locale')
            langId = getCookie('lang')
            //< 1024 because ipad pro 1024 can use desktop layout
            if (window.innerWidth < 1024) {
                setIsDesktop(false)
            } else {
                setIsDesktop(true)
            }
        }
        const footerDt = await getFooter(paramLocale || langId)

        if (!isMounted()) return
        setFooterData(footerDt)
        if (loadedCallback) {
            loadedCallback(true)
        }
    }, [])

    return (
        <>
            {!isDesktop && <FooterMobile data={footerData} />}
            {isDesktop && <FooterDesktop data={footerData} />}
        </>
    )
}
