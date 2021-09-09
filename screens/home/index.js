import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getKeyStatistic } from '../../services/company'
import { getCookie } from '../../util/global-util'
import Loader from '../../components/loader'
import styles from './styles'
import Sidebar from '../../components/sidebar'
import Hero from '../../components/hero-header'
import Footer from '../../components/footer'
import PageWrapper from '../../components/layout/page-wrapper'

export default function HomeScreen() {
    const [keyStatisticData, setKeyStatisticData] = useState(null)
    useAsyncEffect(async (isMounted) => {
        let langId
        if (process.browser) {
            langId = getCookie('lang')
        }
        const ksData = await getKeyStatistic(langId ? langId : 'id')

        if (!isMounted()) return

        setKeyStatisticData(ksData)
    }, [])

    const assetDomain = process.env.config?.baseEndpoint ?? ''

    if (!keyStatisticData) return <Loader />
    return (
        <>
            <Hero id="company" />

            <div className="content-wrapper">
                {keyStatisticData && (
                    <>
                        <div className="content-description">
                            {keyStatisticData.keyStatistics.map((dt, index) => (
                                <div
                                    key={dt.id}
                                    className={`card-item ${
                                        (index + 1) % 2 == 0
                                            ? 'card-even'
                                            : 'card-odd'
                                    }`}
                                >
                                    <img
                                        src={`${assetDomain}${
                                            dt.image?.url ?? ''
                                        }`}
                                        alt={dt.image?.alternativeText ?? ''}
                                    />

                                    <div className="card-content">
                                        <div className="card-title">
                                            {dt.title}
                                        </div>
                                        <div className="card-short">
                                            {dt.shortDescription}
                                        </div>
                                        <div className="card-desc">
                                            {dt.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
            <Footer />
            <style jsx>{styles}</style>
        </>
    )
}
