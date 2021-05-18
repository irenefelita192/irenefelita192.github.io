import styles from './styles'
import Sidebar from '../../../components/sidebar'
import Hero from '../../../components/hero-header'
export default function FSScreen() {
    return (
        <>
            <Hero title="About LippoLife" />
            <div className="wrapper">
                <Sidebar activeId="financial-statement" />
                <div className="content-wrapper">
                    <h1 className="content-title">Financial Statement</h1>
                    <div className="content-description">
                        <div className="content-item">
                            <img src="/images/company/Financial-Statement-2021.png" />
                            <div className="desc">Financial Statement 2021</div>
                        </div>
                        <div className="content-item">
                            <img src="/images/company/Financial-Statement-2020.png" />
                            <div className="desc">Financial Statement 2020</div>
                        </div>
                        <div className="content-item">
                            <img src="/images/company/Financial-Statement-2019.png" />
                            <div className="desc">Financial Statement 2019</div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{styles}</style>
        </>
    )
}
