import ReactMarkdown from 'react-markdown'
import styles from './styles'
import Sidebar from '../../../components/sidebar'
import Hero from '../../../components/hero-header'
import Footer from '../../../components/footer'
import PageWrapper from '../../../components/layout/page-wrapper'

const data = [
    {
        id: 1,
        image: '/images/company/Cecil.png',
        title: 'Cecil Mundisugih',
        shortDescription: 'President Director',
        description:
            'Cecil joined LippoLife as CEO in [Jun 2021] and subsequently appointed as President Director in [Jul 2021]. Cecil is accomplished professional with 20 years of local and multinational experience within the financial services sector. He has held senior positions in the past and was awarded the Best CFO in Finance Transformation in 2020 by CNBC Indonesia.\n\nCecil holds a Bachelor of Commerce degree (Accounting & Finance) with Merit from UNSW and a Global Executive MBA from INSEAD with Dean’s List honour. He is also a Fellow of the Institute of Actuaries of Australia.',
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
export default function BODScreen() {
    return (
        <>
            <Hero id="company" />
            <PageWrapper>
                <>
                    <Sidebar activeId="bod" />
                    <div className="content-wrapper">
                        <h1 className="content-title">Board of Directors</h1>
                        <div className="content-description">
                            {data &&
                                data.map((dt, index) => (
                                    <div key={dt.id} className={`card-item`}>
                                        <img src={dt.image} alt={dt.title} />

                                        <div className="card-content">
                                            <div className="card-title">
                                                {dt.title}
                                            </div>
                                            <div className="card-short">
                                                {dt.shortDescription}
                                            </div>
                                            <div className="card-desc">
                                                <ReactMarkdown>
                                                    {dt.description}
                                                </ReactMarkdown>
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
            <style jsx global>
                {`
                    .card-desc p {
                        padding-bottom: 20px;
                    }
                `}
            </style>
        </>
    )
}
