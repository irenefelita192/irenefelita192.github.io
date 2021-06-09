import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import ReactMarkdown from 'react-markdown'
import { getClients } from '../../../services/company'
import { getCookie } from '../../../util/global-util'

import Loader from '../../../components/loader'
import styles from './styles'
import Sidebar from '../../../components/sidebar'
import Hero from '../../../components/hero-header'
import Footer from '../../../components/footer'
import PageWrapper from '../../../components/layout/page-wrapper'

export default function ClientScreen() {
    const [clientData, setClientData] = useState(null)

    useAsyncEffect(async (isMounted) => {
        let langId
        if (process.browser) {
            langId = getCookie('lang')
        }
        const clientDt = await getClients(langId ? langId : 'id')

        if (!isMounted()) return
        setClientData(clientDt)
    }, [])
    const assetDomain = process.env.config?.baseEndpoint ?? ''
    if (!clientData) return <Loader />
    return (
        <>
            <Hero id="company" />
            <PageWrapper>
                <>
                    <Sidebar activeId="clients" />
                    {clientData && (
                        <div className="content-wrapper">
                            <h1 className="content-title">
                                {clientData.title}
                            </h1>
                            <div className="content-description">
                                <ReactMarkdown>
                                    {clientData.description}
                                </ReactMarkdown>
                                <div className="logo-wrapper">
                                    {clientData.images.map((dt, index) => {
                                        const imgHov = clientData.imagesHover[
                                            index
                                        ]
                                            ? `${assetDomain}${clientData.imagesHover[index].url}`
                                            : null
                                        return (
                                            <div
                                                className="logo-image-wrapper"
                                                key={dt.id}
                                            >
                                                <img
                                                    src={`${assetDomain}${dt.url}`}
                                                    alt={dt.alternativeText}
                                                />
                                                {imgHov && (
                                                    <img
                                                        className="img-hover"
                                                        src={`${assetDomain}${clientData.imagesHover[index].url}`}
                                                        alt={
                                                            clientData
                                                                .imagesHover[
                                                                index
                                                            ].alternativeText
                                                        }
                                                    />
                                                )}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
                </>
            </PageWrapper>
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
