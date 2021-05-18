import styles from './styles'
import Sidebar from '../../../components/sidebar'
import Hero from '../../../components/hero-header'
import Footer from '../../../components/footer'
export default function OverviewScreen() {
    return (
        <>
            <Hero title="About LippoLife" />
            <div className="wrapper">
                <Sidebar activeId="overview" />
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
                        <div className="logo-wrapper">
                            <div className="logo-image-wrapper">
                                <img
                                    src="/images/logo/LippoGroup-Logo.png"
                                    alt="lippo-group"
                                />
                            </div>
                            <div className="logo-image-wrapper">
                                <img
                                    src="/images/logo/LippoLife-Logo-Black.png"
                                    alt="lippo-life-group"
                                />
                            </div>
                            <div className="logo-image-wrapper">
                                <img
                                    src="/images/logo/LippoInsurance-Logo.png"
                                    alt="lippo-insurance"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
            <style jsx>{styles}</style>
        </>
    )
}
