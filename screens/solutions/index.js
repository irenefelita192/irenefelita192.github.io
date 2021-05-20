import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import ReactMarkdown from 'react-markdown'
import { getSolutions } from '../../services/solutions'
import { getCookie } from '../../util/global-util'
import styles from './styles'

import Hero from '../../components/hero-header'
import Footer from '../../components/footer'
import { set } from 'lodash'

export default function SolutionScreen() {
    const [solutionData, setSolutionData] = useState(null)

    useAsyncEffect(async (isMounted) => {
        let langId
        if (process.browser) {
            langId = getCookie('lang')
        }
        const sData = await getSolutions(langId ? langId : 'id')
        console.log('sData', sData)
        if (!isMounted()) return

        setSolutionData(sData)
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
