import styles from './styles'
import Sidebar from '../../../components/sidebar'
import Hero from '../../../components/hero-header'
const data = [
    {
        id: 1,
        image: '/images/company/Key-Statistic-1.png',
        title: 'Protecting Many Families',
        shortDescription: 'Rp27 billion Claims & Benefits Paid',
        description:
            'LippoLife always cares for the people of Indonesia. During this pandemic, LippoLife continues to maintain its commitment to help affected families by paying claims and benefits totaling 27 billion in 2020.',
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
export default function KSScreen() {
    return (
        <>
            <Hero title="About LippoLife" />
            <div className="wrapper">
                <Sidebar activeId="key-statistics" />
                <div className="content-wrapper">
                    <h1 className="content-title">Key Statistics</h1>
                    <div className="content-description">
                        {data &&
                            data.map((dt, index) => (
                                <div
                                    key={dt.id}
                                    className={`card-item ${
                                        (index + 1) % 2 == 0
                                            ? 'card-even'
                                            : 'card-odd'
                                    }`}
                                >
                                    <img src={dt.image} alt={dt.title} />

                                    <div className="card-content">
                                        <div className="card-title">
                                            {dt.title}
                                        </div>
                                        <div className="card-short">
                                            {dt.shortDescription}
                                        </div>
                                        <div className="card-desc">
                                            {dt.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
            <style jsx>{styles}</style>
        </>
    )
}
