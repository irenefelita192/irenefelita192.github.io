import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import DOMPurify from 'dompurify'
import { getPrivacy } from 'services/privacy-terms'
import { getCookie } from 'utils/global-util'
import styles from './styles'
import globalStyles from './global-styles'

import Loader from 'components/loader'
import Footer from 'components/footer'

export default function TnCScreen() {
    const [privacyData, setPrivacyData] = useState(null)

    useAsyncEffect(async (isMounted) => {
        const urlParams = new URLSearchParams(window?.location?.search ?? ''),
            paramLocale = urlParams.get('locale')

        let langId
        if (process.browser) {
            langId = getCookie('lang')
        }
        const privacyDt = await getPrivacy(paramLocale || langId)

        if (!isMounted()) return
        setPrivacyData(privacyDt)
    }, [])

    if (!privacyData) return <Loader />

    const sanitizedContent = DOMPurify.sanitize(privacyData.content, {
        USE_PROFILES: { html: true },
    })
    return (
        <>
            {privacyData && (
                <div className="wrapper">
                    <h1>{privacyData.title}</h1>
                    <div
                        className="content"
                        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                    />
                </div>
            )}
            <Footer />
            <style jsx>{styles}</style>
            <style jsx global>
                {globalStyles}
            </style>
        </>
    )
}
