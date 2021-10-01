import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getFooter } from 'services/common'
import { getCookie } from 'utils/global-util'
import FooterDesktop from './desktop'
import FooterMobile from './mobile'

export default function Footer() {
    const [isDesktop, setIsDesktop] = useState(true)
    const [footerData, setFooterData] = useState(null)

    useAsyncEffect(async (isMounted) => {
        let langId
        if (process.browser) {
            langId = getCookie('lang')
            //< 1024 because ipad pro 1024 can use desktop layout
            if (window.innerWidth < 1024) {
                setIsDesktop(false)
            } else {
                setIsDesktop(true)
            }
        }
        const footerDt = await getFooter(langId ? langId : 'id')

        if (!isMounted()) return
        setFooterData(footerDt)
    }, [])

    return (
        <>
            {!isDesktop && <FooterMobile data={footerData} />}
            {isDesktop && <FooterDesktop data={footerData} />}
        </>
    )
}
