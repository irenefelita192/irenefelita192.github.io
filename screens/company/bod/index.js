import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import ReactMarkdown from 'react-markdown'
import { getBOD } from '../../../services/company'
import { getCookie } from '../../../util/global-util'
import styles from './styles'
import Sidebar from '../../../components/sidebar'
import Hero from '../../../components/hero-header'
import PageWrapper from '../../../components/layout/page-wrapper'

export default function BODScreen() {
    const [bodData, setBodData] = useState(null)

    useAsyncEffect(async (isMounted) => {
        let langId
        if (process.browser) {
            langId = getCookie('lang')
        }
        const bodDt = await getBOD(langId ? langId : 'id')
        console.log('data', bodDt)
        if (!isMounted()) return
        setBodData(bodDt)
    }, [])
    const assetDomain = process.env.config?.endpoints?.asset ?? ''
    return (
        <>
            <Hero id="company" />
            <PageWrapper>
                <>
                    <Sidebar activeId="bod" />
                    {bodData && (
                        <div className="content-wrapper">
                            <h1 className="content-title">
                                {bodData.title || 'Board of Directors'}
                            </h1>
                            <div className="content-description">
                                {bodData.people.map((dt, index) => (
                                    <div key={dt.id} className={`card-item`}>
                                        <img
                                            src={`${assetDomain}${dt.image.url}`}
                                            alt={dt.alternativeText}
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
