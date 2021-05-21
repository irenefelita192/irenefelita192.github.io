import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getMilestone } from '../../../services/company'
import { getCookie } from '../../../util/global-util'
import styles from './styles'

import Sidebar from '../../../components/sidebar'
import Hero from '../../../components/hero-header'
import Footer from '../../../components/footer'
import PageWrapper from '../../../components/layout/page-wrapper'

export default function MilestonesScreen() {
    const [milestoneData, setMilestoneData] = useState(null)

    useAsyncEffect(async (isMounted) => {
        let langId
        if (process.browser) {
            langId = getCookie('lang')
        }
        const msData = await getMilestone(langId ? langId : 'id')

        if (!isMounted()) return

        setMilestoneData(msData)
    }, [])
    return (
        <>
            <Hero id="company" />
            <PageWrapper>
                <>
                    <Sidebar activeId="milestones" />
                    <div className="content-wrapper">
                        {milestoneData && (
                            <>
                                <h1 className="content-title">
                                    {milestoneData.title}
                                </h1>

                                <div className="timeline-container">
                                    <div className="timeline-inner">
                                        {milestoneData.milestone.map((dt) => (
                                            <div
                                                className="timeline-item"
                                                key={dt.id}
                                            >
                                                <i className="timeline-icon" />
                                                <div className="timeline-content">
                                                    <div className="timeline-title">
                                                        {dt.year}
                                                    </div>
                                                    <div className="timeline-description">
                                                        {dt.description}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
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
