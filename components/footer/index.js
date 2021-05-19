import styles from './styles'
const topicData = {
    title: 'Topics',
    data: [
        { id: 1, title: 'Company', href: '/company' },
        { id: 2, title: 'Solutions', href: '/solutions' },
        { id: 3, title: 'Careers', href: '/careers' },
        { id: 4, title: 'Contact', href: '/contact' },
    ],
}

const moreData = {
    title: 'More',
    data: [
        { id: 1, title: 'Vida', href: '/vida' },
        { id: 2, title: 'Privacy Policy', href: '/privacy-policy' },
        { id: 3, title: 'Terms & Conditions', href: '/tnc' },
        { id: 4, title: 'Sitemap', href: '/sitemap' },
    ],
}
export default function Footer() {
    return (
        <>
            <footer>
                <div className="columns">
                    <div
                        className="column logo-wrapper"
                        onClick={() => {
                            window.location.href = '/'
                        }}
                    >
                        <img
                            src="/images/logo/LippoLife-Logo-White.png"
                            alt="Lippo-logo"
                        />
                    </div>
                    <div className="column">
                        <div className="title"> {topicData.title}</div>
                        {topicData.data.map((topic) => (
                            <a
                                className="list"
                                key={topic.id}
                                href={topic.href}
                            >
                                {topic.title}
                            </a>
                        ))}
                    </div>
                    <div className="column">
                        <div className="title"> {moreData.title}</div>
                        {moreData.data.map((more) => (
                            <a className="list" key={more.id} href={more.href}>
                                {more.title}
                            </a>
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
