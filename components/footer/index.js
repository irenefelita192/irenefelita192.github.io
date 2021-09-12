import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getFooter } from '../../services/common'
import { getCookie } from '../../util/global-util'
import FooterDesktop from './desktop'
import FooterMobile from './mobile'

export default function Footer() {
    const [isPortrait, setIsPortrait] = useState(false)
    const [footerData, setFooterData] = useState(null)

    useAsyncEffect(async (isMounted) => {
        let langId
        if (process.browser) {
            langId = getCookie('lang')
            if (window.innerWidth < window.innerHeight) {
                setIsPortrait(true)
            } else {
                setIsPortrait(false)
            }
        }
        const footerDt = await getFooter(langId ? langId : 'id')

        if (!isMounted()) return
        setFooterData(footerDt)
    }, [])

    return (
        <>
            {isPortrait && <FooterMobile data={footerData} />}
            {!isPortrait && <FooterDesktop data={footerData} />}
        </>
    )
}
