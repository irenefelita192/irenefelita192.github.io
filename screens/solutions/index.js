import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import ReactMarkdown from 'react-markdown'
import { getSolutions, getSolutionPage } from '../../services/solutions'
import { getCookie } from '../../util/global-util'
import styles from './styles'

import Hero from '../../components/hero-header'
import Footer from '../../components/footer'

export default function SolutionScreen() {
    const [solutionData, setSolutionData] = useState(null)
    const [contactData, setContactData] = useState(null)

    useAsyncEffect(async (isMounted) => {
        let langId
        if (process.browser) {
            langId = getCookie('lang')
        }
        const sData = await getSolutions(langId ? langId : 'id')
        const cData = await getSolutionPage(langId ? langId : 'id')

        if (!isMounted()) return

        setSolutionData(sData)
        setContactData(cData)
    }, [])
    const assetDomain = process.env.config?.endpoints?.asset ?? ''
    return (
        <>
            <Hero id="solutions" />
            {solutionData && (
                <div className="wrapper">
                    {solutionData.map((dt) => (
                        <div className="content-item">
                            <div className="title">
                                <span>{dt.title}</span>
                            </div>{' '}
                            <div className="short-desc">
                                {dt.shortDescription}
                            </div>
                            <div className="highlight">{dt.highlight}</div>
                            <div className="desc">
                                <ReactMarkdown>{dt.description}</ReactMarkdown>
                            </div>
                            <div className="benefit-title">
                                {dt.insuranceBenefitTitle}
                            </div>
                            <div className="desc">
                                <ReactMarkdown>
                                    {dt.insuranceBenefit}
                                </ReactMarkdown>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {contactData && (
                <div className="contact-wrapper">
                    <div>{contactData.contactDescription}</div>
                    <button
                        onClick={() =>
                            (window.location.href =
                                contactData.buttonLink || '/contact')
                        }
                    >
                        {contactData.buttonText}
                    </button>
                </div>
            )}
            <Footer />
            <style jsx>{styles}</style>
            <style jsx global>
                {`
                    .desc p {
                        font-size: 16px;
                        line-height: 1.5;
                        padding-bottom: 24px;
                        margin: 0;
                    }

                    .desc p:last-child {
                        padding: 0;
                        margin: 0;
                    }
                `}
            </style>
        </>
    )
}
