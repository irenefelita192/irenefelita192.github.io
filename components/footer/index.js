import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getFooter } from 'services/common'
import { getCookie } from 'utils/global-util'
import FooterDesktop from './desktop'
import FooterMobile from './mobile'

export default function Footer() {
    const [isMobile, setIsMobile] = useState(false)
    const [footerData, setFooterData] = useState(null)

    useAsyncEffect(async (isMounted) => {
        let langId
        if (process.browser) {
            langId = getCookie('lang')
            if (window.innerWidth <= 1024) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }
        const footerDt = await getFooter(langId ? langId : 'id')

        if (!isMounted()) return
        setFooterData(footerDt)
    }, [])

    return (
        <>
            {isMobile && <FooterMobile data={footerData} />}
            {!isMobile && <FooterDesktop data={footerData} />}
        </>
    )
}
