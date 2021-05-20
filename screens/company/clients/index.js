import styles from './styles'
import Sidebar from '../../../components/sidebar'
import Hero from '../../../components/hero-header'
import Footer from '../../../components/footer'
import PageWrapper from '../../../components/layout/page-wrapper'

export default function ClientScreen() {
    return (
        <>
            <Hero id="company" />
            <PageWrapper>
                <>
                    <Sidebar activeId="clients" />
                    <div className="content-wrapper">
                        <h1 className="content-title">Clients</h1>
                        <div className="content-description">
                            <p>
                                We have the honour in safeguarding some of the
                                best companies in Indonesia, protecting those
                                that matter the most: their customers, employees
                                and/or management.
                            </p>
                            <div className="logo-wrapper">
                                <div className="logo-image-wrapper">
                                    <img
                                        src="/images/company/Siloam-Logo.png"
                                        alt="siloam-logo"
                                    />
                                </div>
                                <div className="logo-image-wrapper">
                                    <img
                                        src="/images/company/Lippo-Logo.png"
                                        alt="lippo-logo"
                                    />
                                </div>
                                <div className="logo-image-wrapper">
                                    <img
                                        src="/images/company/Nobu-Logo.png"
                                        alt="nobu-logo"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </PageWrapper>
            <Footer />
            <style jsx>{styles}</style>
        </>
    )
}
