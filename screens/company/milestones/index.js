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
        console.log('data', msData)
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
                        <h1 className="content-title">Milestones</h1>
                        {milestoneData && (
                            <div className="timeline-container">
                                <div className="timeline-inner">
                                    {milestoneData.map((dt) => (
                                        <div className="timeline-item">
                                            <i className="timeline-icon" />
                                            <div className="timeline-content">
                                                <div className="timeline-title">
                                                    {dt.title}
                                                </div>
                                                <div className="timeline-description">
                                                    {dt.description}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </>
            </PageWrapper>
            <Footer />
            <style jsx>{styles}</style>
        </>
    )
}
