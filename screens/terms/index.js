import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import DOMPurify from 'dompurify'
import { getTerms } from 'services/privacy-terms'
import { getCookie } from 'utils/global-util'
import styles from './styles'

import Loader from 'components/loader'
import Footer from 'components/footer'

export default function PrivacyScreen() {
    const [termsData, setTermsData] = useState(null)

    useAsyncEffect(async (isMounted) => {
        let langId
        if (process.browser) {
            langId = getCookie('lang')
        }
        const termsDt = await getTerms(langId)

        if (!isMounted()) return
        setTermsData(termsDt)
    }, [])

    if (!termsData) return <Loader />

    const sanitizedContent = DOMPurify.sanitize(termsData.content, {
        USE_PROFILES: { html: true },
    })
    return (
        <>
            {termsData && (
                <div className="wrapper">
                    <h1>{termsData.title}</h1>
                    <div
                        className="content"
                        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
                    />
                </div>
            )}
            <Footer />
            <style jsx>{styles}</style>
        </>
    )
}
