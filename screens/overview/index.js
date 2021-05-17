import styles from './styles'
import Sidebar from '../../components/sidebar'

export async function getStaticProps({ locale }) {
    console.log('locale overview', locale)
    return {
        props: {},
    }
}

export default function OverviewScreen() {
    return (
        <>
            <div className="hero-wrapper">
                <span>About LippoLife</span>
            </div>
            <div className="wrapper">
                <Sidebar data={''} />
                <div className="content-wrapper">
                    <h1 className="content-title">Overview</h1>
                    <div className="content-description">
                        <p>
                            Established since 2010, NOBU Life which later
                            changed its name to PT Lippo Life Assurance is a
                            life insurance company in Indonesia, and a
                            subsidiary of the Lippo Group, which has experience
                            in providing life insurance programs, health
                            insurance, personal accident insurance,
                            investment-related insurance, employee welfare
                            programs and credit life insurance.{' '}
                        </p>
                        <p>
                            PT Lippo Life Assurance was built with hard work and
                            dynamic professionalism, becoming stronger in the
                            face of increasingly aggressive business
                            competition. In establishing professional
                            relationships, the company adheres to trust,
                            mutually beneficial cooperation and ethical business
                            values. Supported by a strong capital structure and
                            excellent experience, the company is motivated to
                            further increase its commitment and consistency in
                            understanding customer needs and providing the best
                            for all stakeholders.
                        </p>
                    </div>
                </div>
            </div>
            <style jsx>{styles}</style>
        </>
    )
}
