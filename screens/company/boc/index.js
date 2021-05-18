import styles from './styles'
import Sidebar from '../../../components/sidebar'
import Hero from '../../../components/hero-header'
import ReactMarkdown from 'react-markdown'
const data = [
    {
        id: 1,
        image: '/images/company/Totok.png',
        title: 'Totok',
        shortDescription: 'President Commisioner',
        description:
            'Totok was appointed as President Commissioner* of LippoLife on [xxx]. Totok is accomplished professional with more than 20 years experience across numerous sectors. He held many senior positions in sector such as: insurance, multi-finance, securities, oil & gas, and consumer goods distribution. He has also significant experience taking oversight and commissioner roles in the financial services industry.\n\nTotok holds Bachelor of Accounting from Universitas Jenderal Sudirman and also Master of Philosophy and Doctor of Business Administration from Maastricht School of Management, Netherland.',
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
export default function BOCScreen() {
    return (
        <>
            <Hero title="About LippoLife" />
            <div className="wrapper">
                <Sidebar activeId="boc" />
                <div className="content-wrapper">
                    <h1 className="content-title">Board of Commisioners</h1>
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
            </div>
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
