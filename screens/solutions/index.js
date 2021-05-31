import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import ReactMarkdown from 'react-markdown'
import { getSolutionPage } from '../../services/solutions'
import { getCookie } from '../../util/global-util'
import styles from './styles'
import Loader from '../../components/loader'
import Hero from '../../components/hero-header'
import Footer from '../../components/footer'

export default function SolutionScreen() {
    const [solutionData, setSolutionData] = useState(null)

    useAsyncEffect(async (isMounted) => {
        let langId
        if (process.browser) {
            langId = getCookie('lang')
        }
        const solData = await getSolutionPage(langId ? langId : 'id')

        if (!isMounted()) return

        setSolutionData(solData)
    }, [])
    if (!solutionData) return <Loader />
    return (
        <>
            <Hero id="solutions" />

            <div className="wrapper">
                {solutionData &&
                    solutionData.solutions.map((dt) => (
                        <div key={dt.id} className="content-item">
                            <div className="title">
                                <span>{dt.title}</span>
                            </div>
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

            {solutionData && (
                <div className="contact-wrapper">
                    <div>{solutionData.contactDescription}</div>
                    <button
                        onClick={() =>
                            (window.location.href =
                                solutionData.buttonLink || '/contact')
                        }
                    >
                        {solutionData.buttonText}
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
