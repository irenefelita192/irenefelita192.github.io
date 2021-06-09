import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import ReactMarkdown from 'react-markdown'
import { getBOC } from '../../../services/company'
import { getCookie } from '../../../util/global-util'

import Loader from '../../../components/loader'
import styles from './styles'
import Sidebar from '../../../components/sidebar'
import Hero from '../../../components/hero-header'
import Footer from '../../../components/footer'
import PageWrapper from '../../../components/layout/page-wrapper'

export default function BOCScreen() {
    const [bocData, setBocData] = useState(null)

    useAsyncEffect(async (isMounted) => {
        let langId
        if (process.browser) {
            langId = getCookie('lang')
        }
        const bocDt = await getBOC(langId ? langId : 'id')

        if (!isMounted()) return
        setBocData(bocDt)
    }, [])
    const assetDomain = process.env.config?.baseEndpoint ?? ''

    if (!bocData) return <Loader />
    return (
        <>
            <Hero id="company" />
            <PageWrapper>
                <>
                    <Sidebar activeId="boc" />
                    {bocData && (
                        <div className="content-wrapper">
                            <h1 className="content-title">
                                {bocData.title || 'Board of Commisioners'}
                            </h1>
                            <div className="content-description">
                                {bocData.people.map((dt, index) => (
                                    <div key={dt.id} className={`card-item`}>
                                        <img
                                            src={`${assetDomain}${
                                                dt.image?.url ?? ''
                                            }`}
                                            alt={
                                                dt.image?.alternativeText ?? ''
                                            }
                                        />

                                        <div className="card-content">
                                            <div className="card-title">
                                                {dt.name}
                                            </div>
                                            <div className="card-short">
                                                {dt.title}
                                            </div>
                                            <div className="card-desc">
                                                <ReactMarkdown>
                                                    {dt.description}
                                                </ReactMarkdown>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </>
            </PageWrapper>
            <Footer />
            <style jsx>{styles}</style>
            <style jsx global>
                {`
                    .card-desc p {
                        padding-bottom: 20px;
                    }
                `}
            </style>
        </>
    )
}
