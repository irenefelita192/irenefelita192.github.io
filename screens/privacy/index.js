import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import ReactMarkdown from 'react-markdown'
import { getPrivacy } from '../../services/common'
import { getCookie } from '../../util/global-util'
import styles from './styles'

import Loader from '../../components/loader'
import Hero from '../../components/hero-header'
import Footer from '../../components/footer'

export default function TnCScreen() {
    const [privacyData, setPrivacyData] = useState(null)

    useAsyncEffect(async (isMounted) => {
        let langId
        if (process.browser) {
            langId = getCookie('lang')
        }
        const privacyDt = await getPrivacy(langId ? langId : 'id')

        if (!isMounted()) return
        setPrivacyData(privacyDt)
    }, [])

    if (!privacyData) return <Loader />
    return (
        <>
            <Hero id="privacy" />
            {privacyData && (
                <div className="wrapper">
                    <ReactMarkdown>{privacyData.description}</ReactMarkdown>
                </div>
            )}
            <Footer />
            <style jsx>{styles}</style>
            <style jsx global>
                {`
                    .wrapper p {
                        padding-bottom: 20px;
                    }
                `}
            </style>
        </>
    )
}
