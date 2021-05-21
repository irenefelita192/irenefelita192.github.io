import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getFinancialStatement } from '../../../services/company'
import { getCookie } from '../../../util/global-util'

import styles from './styles'
import Sidebar from '../../../components/sidebar'
import Hero from '../../../components/hero-header'
import Footer from '../../../components/footer'
import PageWrapper from '../../../components/layout/page-wrapper'

export default function FSScreen() {
    const [fsData, setFSData] = useState(null)

    useAsyncEffect(async (isMounted) => {
        let langId
        if (process.browser) {
            langId = getCookie('lang')
        }
        const fData = await getFinancialStatement(langId ? langId : 'id')

        if (!isMounted()) return

        setFSData(fData)
    }, [])

    const assetDomain = process.env.config?.endpoints?.asset ?? ''
    return (
        <>
            <Hero id="company" />
            <PageWrapper>
                <>
                    <Sidebar activeId="financial-statement" />
                    <div className="content-wrapper">
                        {fsData && (
                            <>
                                <h1 className="content-title">
                                    {fsData.title}
                                </h1>
                                <div className="content-description">
                                    {fsData.financialStatements.map((dt) => (
                                        <div
                                            key={dt.id}
                                            className="content-item"
                                            onClick={() => {
                                                dt.imageDetail
                                                    ? window.open(
                                                          `${assetDomain}${dt.imageDetail.url}`
                                                      )
                                                    : ''
                                            }}
                                        >
                                            <img
                                                src={`${assetDomain}${
                                                    dt.image?.url ?? ''
                                                }`}
                                            />
                                            <div className="desc">
                                                {dt.title}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </>
            </PageWrapper>
            <Footer />
            <style jsx>{styles}</style>
        </>
    )
}
