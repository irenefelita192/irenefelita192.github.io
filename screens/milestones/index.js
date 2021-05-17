import styles from './styles'

import Sidebar from '../../components/sidebar'
export default function MilestonesScreen() {
    return (
        <>
            <div className="hero-wrapper">
                <span>About LippoLife</span>
            </div>
            <div className="wrapper">
                <Sidebar />
                <div className="content-wrapper">
                    <div className="title">Milestones</div>
                </div>
            </div>
            <style jsx>{styles}</style>
        </>
    )
}
