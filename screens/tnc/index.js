import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import ReactMarkdown from 'react-markdown'
import { getTnc } from '../../services/common'
import { getCookie } from '../../util/global-util'
import styles from './styles'

import Hero from '../../components/hero-header'
import Footer from '../../components/footer'

export default function TnCScreen() {
    const [tncData, setTncData] = useState(null)

    useAsyncEffect(async (isMounted) => {
        let langId
        if (process.browser) {
            langId = getCookie('lang')
        }
        const tncDt = await getTnc(langId ? langId : 'id')

        if (!isMounted()) return
        setTncData(tncDt)
    }, [])
    return (
        <>
            <Hero id="tnc" />
            {tncData && (
                <div className="wrapper">
                    <ReactMarkdown>{tncData.description}</ReactMarkdown>
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
