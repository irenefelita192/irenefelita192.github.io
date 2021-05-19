import styles from './styles'
const topicData = {
    title: 'Topics',
    data: [
        { id: 1, title: 'Company' },
        { id: 2, title: 'Solutions' },
        { id: 3, title: 'Careers' },
        { id: 4, title: 'Contact' },
    ],
}

const moreData = {
    title: 'More',
    data: [
        { id: 1, title: 'Vida' },
        { id: 2, title: 'Privacy Policy' },
        { id: 3, title: 'Terms & Conditions' },
        { id: 4, title: 'Sitemap' },
    ],
}
export default function Footer() {
    return (
        <>
            <footer>
                <div className="columns">
                    <div className="column logo-wrapper">
                        <img
                            src="/images/logo/LippoLife-Logo-White.png"
                            alt="Lippo-logo"
                        />
                    </div>
                    <div className="column">
                        <div className="title"> {topicData.title}</div>
                        {topicData.data.map((topic) => (
                            <div className="list" key={topic.id}>
                                {topic.title}
                            </div>
                        ))}
                    </div>
                    <div className="column">
                        <div className="title"> {moreData.title}</div>
                        {moreData.data.map((more) => (
                            <div className="list" key={more.id}>
                                {more.title}
                            </div>
                        ))}
                    </div>
                    <div className="column ojk-wrapper">
                        <div>Registered & supervised by:</div>
                        <img
                            src="/images/logo/OJK-Logo-White.png"
                            alt="Lippo-logo"
                        />
                    </div>
                </div>
                <div className="copyright">
                    All Rights Reserved © 2021 PT. Lippo Life Assurance - We
                    Love You
                </div>
            </footer>
            <style jsx>{styles}</style>
        </>
    )
}
