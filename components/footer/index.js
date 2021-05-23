import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getFooter } from '../../services/common'
import { getCookie } from '../../util/global-util'
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
    const [footerData, setFooterData] = useState(null)

    useAsyncEffect(async (isMounted) => {
        let langId
        if (process.browser) {
            langId = getCookie('lang')
        }
        const footerDt = await getFooter(langId ? langId : 'id')

        if (!isMounted()) return
        setFooterData(footerDt)
    }, [])

    const assetDomain = process.env.config?.endpoints?.asset ?? ''
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
                    {footerData && (
                        <>
                            <div className="column">
                                <div className="title">
                                    {footerData.topicTitle}
                                </div>
                                {footerData.topics.map((topic) => (
                                    <a
                                        className="list"
                                        key={topic.id}
                                        href={topic.link}
                                    >
                                        {topic.title}
                                    </a>
                                ))}
                            </div>
                            <div className="column">
                                <div className="title">
                                    {footerData.moreTitle}
                                </div>
                                {footerData.more.map((more) => (
                                    <a
                                        className="list"
                                        key={more.id}
                                        href={more.link}
                                    >
                                        {more.title}
                                    </a>
                                ))}
                            </div>
                        </>
                    )}
                    <div className="column ojk-wrapper">
                        {footerData && (
                            <>
                                <div>{footerData.ojkText}</div>
                                <img
                                    src={`${assetDomain}${
                                        footerData.ojkImage?.url ?? ''
                                    }`}
                                    alt={
                                        footerData.ojkImage?.alternativeText ??
                                        ''
                                    }
                                />
                            </>
                        )}
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
