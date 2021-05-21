import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getKeyStatistic } from '../../../services/company'
import { getCookie } from '../../../util/global-util'

import styles from './styles'
import Sidebar from '../../../components/sidebar'
import Hero from '../../../components/hero-header'
import Footer from '../../../components/footer'
import PageWrapper from '../../../components/layout/page-wrapper'

const data = [
    {
        id: 1,
        image: '/images/company/Key-Statistic-1.png',
        title: 'Protecting Many Families',
        shortDescription: 'Rp27 billion Claims & Benefits Paid',
        description:
            'LippoLife always cares for the people of Indonesia. During this pandemic, LippoLife continues to maintain its commitment to help affected families by paying claims and benefits totaling 27 billion in 2020.',
    },
    {
        id: 2,
        image: '/images/company/Key-Statistic-2.png',
        title: 'Solid Financial Strength',
        shortDescription: '774% RBC',
        description:
            'The company has RBC 774% in 2020, far above the limit required by OJK of 120%',
    },
    {
        id: 3,
        image: '/images/company/Key-Statistic-3.png',
        title: 'Well Capitalised Company',
        shortDescription: 'Rp200 billion Share Capital',
        description:
            'Shareholders are committed to continuing to strengthen the company. Over the last few years, shareholders have added capital of 85 billion.',
    },
    {
        id: 4,
        image: '/images/company/Key-Statistic-4.png',
        title: 'Good Business Growth',
        shortDescription: 'Rp49 billion GWP',
        description:
            'Business that continues to grow, premiums grew by 106% from the previous year.',
    },
]
export default function KSScreen() {
    const [keyStatisticData, setKeyStatisticData] = useState(null)
    useAsyncEffect(async (isMounted) => {
        let langId
        if (process.browser) {
            langId = getCookie('lang')
        }
        const ksData = await getKeyStatistic(langId ? langId : 'id')
        console.log('data', ksData)
        if (!isMounted()) return

        setKeyStatisticData(ksData)
    }, [])

    const assetDomain = process.env.config?.endpoints?.asset ?? ''
    return (
        <>
            <Hero id="company" />
            <PageWrapper>
                <>
                    <Sidebar activeId="key-statistics" />
                    <div className="content-wrapper">
                        <h1 className="content-title">Key Statistics</h1>
                        <div className="content-description">
                            {keyStatisticData &&
                                keyStatisticData.map((dt, index) => (
                                    <div
                                        key={dt.id}
                                        className={`card-item ${
                                            (index + 1) % 2 == 0
                                                ? 'card-even'
                                                : 'card-odd'
                                        }`}
                                    >
                                        <img
                                            src={`${assetDomain}${dt.image?.url}`}
                                            alt={dt.alternativeText}
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
                    </div>
                </>
            </PageWrapper>
            <Footer />
            <style jsx>{styles}</style>
        </>
    )
}
