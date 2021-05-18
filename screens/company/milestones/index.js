import styles from './styles'
import Sidebar from '../../../components/sidebar'
import Hero from '../../../components/hero-header'

export default function MilestonesScreen() {
    return (
        <>
            <Hero title="About LippoLife" />
            <div className="wrapper">
                <Sidebar activeId="milestones" />
                <div className="content-wrapper">
                    <h1 className="content-title">Milestones</h1>
                    <div className="timeline-container">
                        <div className="timeline-inner">
                            <div className="timeline-item">
                                <i className="timeline-icon" />
                                <div className="timeline-content">
                                    <div className="timeline-title">2010</div>
                                    <div className="timeline-description">
                                        First Established as NOBU Life in month
                                        of 2010. The shareholders believe life
                                        insurance sector in Indonesia has a
                                        bright future where insurance
                                        penetration is still around 2%.{' '}
                                    </div>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <i className="timeline-icon" />
                                <div className="timeline-content">
                                    <div className="timeline-title">2010</div>
                                    <div className="timeline-description">
                                        First Established as NOBU Life in month
                                        of 2010. The shareholders believe life
                                        insurance sector in Indonesia has a
                                        bright future where insurance
                                        penetration is still around 2%.{' '}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{styles}</style>
        </>
    )
}
