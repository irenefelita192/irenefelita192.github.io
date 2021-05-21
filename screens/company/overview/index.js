import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import ReactMarkdown from 'react-markdown'
import { getOverview } from '../../../services/company'
import { getCookie } from '../../../util/global-util'
import styles from './styles'

import Sidebar from '../../../components/sidebar'
import Hero from '../../../components/hero-header'
import Footer from '../../../components/footer'
import PageWrapper from '../../../components/layout/page-wrapper'

export default function OverviewScreen() {
    const [overviewData, setOverviewData] = useState(null)

    useAsyncEffect(async (isMounted) => {
        let langId
        if (process.browser) {
            langId = getCookie('lang')
        }
        const overviewData = await getOverview(langId ? langId : 'id')

        if (!isMounted()) return

        setOverviewData(overviewData)
    }, [])
    const assetDomain = process.env.config?.endpoints?.asset ?? ''
    return (
        <>
            <Hero id="company" />
            {overviewData && (
                <PageWrapper>
                    <>
                        <Sidebar activeId="overview" />
                        <div className="content-wrapper">
                            <h1 className="content-title">
                                {overviewData?.title ?? 'Overview'}
                            </h1>

                            <div className="content-description">
                                <ReactMarkdown>
                                    {overviewData?.description ?? ''}
                                </ReactMarkdown>
                                <div className="logo-wrapper">
                                    {overviewData &&
                                        overviewData.images.map((dt) => (
                                            <div
                                                className="logo-image-wrapper"
                                                key={dt.id}
                                            >
                                                <img
                                                    src={`${assetDomain}${dt.url}`}
                                                    alt={dt.alternativeText}
                                                />
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </>
                </PageWrapper>
            )}
            <Footer />
            <style jsx>{styles}</style>
            <style jsx global>
                {`
                    .content-description p {
                        padding-bottom: 20px;
                    }
                `}
            </style>
        </>
    )
}
