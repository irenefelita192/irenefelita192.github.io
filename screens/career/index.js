import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import ReactMarkdown from 'react-markdown'
import { getCareer } from '../../services/career'
import { getCookie } from '../../util/global-util'
import styles from './styles'

import Hero from '../../components/hero-header'
import Footer from '../../components/footer'

export default function TnCScreen() {
    const [careerData, setCareerData] = useState(null)

    useAsyncEffect(async (isMounted) => {
        let langId
        if (process.browser) {
            langId = getCookie('lang')
        }
        const careerDt = await getCareer(langId ? langId : 'id')

        if (!isMounted()) return
        setCareerData(careerDt)
    }, [])
    return (
        <>
            <Hero id="career" />
            {careerData && (
                <div className="wrapper">
                    <div className="title">
                        {careerData.emptyState?.title ?? ''}
                    </div>
                    <div className="description">
                        <ReactMarkdown>
                            {careerData.emptyState?.description ?? ''}
                        </ReactMarkdown>
                    </div>
                </div>
            )}
            <Footer />
            <style jsx>{styles}</style>
            <style jsx global>
                {`
                    .wrapper p {
                        padding-bottom: 20px;
                    }
                `}
            </style>
        </>
    )
}
