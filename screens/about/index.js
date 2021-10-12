import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getAboutData } from 'services/about'
import { getCookie } from 'utils/global-util'
import Loader from 'components/loader'
import styles from './styles'
import Footer from 'components/footer'

const assetDomain = process.env.config?.baseEndpoint ?? '',
    assetPrefix = process.env.config?.assetPrefix ?? ''
export default function HomeScreen() {
    const [aboutData, setAboutData] = useState(null)
    const [isDesktop, setIsDesktop] = useState(true)
    const [isWebpSupport, setIsWebpSupport] = useState(true)
    const [heroHeight, setHeroHeight] = useState(null)
    let headerHeight = 80

    useAsyncEffect(async (isMounted) => {
        let langId
        if (process.browser) {
            langId = getCookie('lang')
            setHeroHeight(window.innerHeight)
            if (window.innerWidth < window.innerHeight) {
                setIsDesktop(false)
            }
            if (window.Modernizr.webp) {
                setIsWebpSupport(true)
            } else {
                setIsWebpSupport(false)
            }
        }
        const aboutDt = await getAboutData(langId)

        if (!isMounted()) return

        setAboutData(aboutDt)
    }, [])

    if (!aboutData) return <Loader />

    let heroImg = '',
        visionImg = '',
        missionImg = ''
    if (isDesktop) {
        if (!aboutData.heroImageWebp || !isWebpSupport) {
            heroImg = `${assetDomain}${aboutData?.heroImage?.url ?? ''}`
        } else {
            heroImg = `${assetDomain}${aboutData?.heroImageWebp?.url ?? ''}`
        }

        visionImg = `${assetDomain}${aboutData?.visionImage?.url ?? ''}`
        missionImg = `${assetDomain}${aboutData?.missionImage?.url ?? ''}`
    } else {
        if (!aboutData.heroImageMobileWebp || !isWebpSupport) {
            heroImg = `${assetDomain}${aboutData?.heroImageMobile?.url ?? ''}`
        } else {
            heroImg = `${assetDomain}${
                aboutData?.heroImageMobileWebp?.url ?? ''
            }`
        }

        visionImg = `${assetDomain}${aboutData?.visionImageMobile?.url ?? ''}`
        missionImg = `${assetDomain}${aboutData?.missionImageMobile?.url ?? ''}`
    }
    return (
        <>
            {aboutData && (
                <>
                    <div
                        className={`hero-wrapper`}
                        style={{
                            backgroundImage: `url(${heroImg})`,
                            height: `${heroHeight}px`,
                        }}
                    >
                        <div className="hero-text">
                            <div className="hero-vida">
                                {aboutData.vidaLogo && isDesktop && (
                                    <div className="hero-vida-logo">
                                        <img
                                            src={`${assetDomain}${aboutData.vidaLogo.url}`}
                                            alt={
                                                aboutData.vidaLogo
                                                    ?.alternativeText ?? ''
                                            }
                                        />
                                    </div>
                                )}
                                <div className="hero-vida-text">
                                    {aboutData?.vidaText ?? ''}
                                </div>
                            </div>
                            <div className="hero-title">
                                {aboutData?.heroDescription ?? ''}
                            </div>
                            {isDesktop && (
                                <>
                                    <div className="founder-name">
                                        {aboutData?.founderName ?? ''}
                                    </div>
                                    <div className="founder-title">
                                        {aboutData?.founderTitle ?? ''}
                                    </div>
                                </>
                            )}
                        </div>

                        {!isDesktop && (
                            <div className="portrait-founder">
                                <div className="founder-name">
                                    {aboutData?.founderName ?? ''}
                                </div>
                                <div className="founder-title">
                                    {aboutData?.founderTitle ?? ''}
                                </div>
                            </div>
                        )}
                    </div>

                    {/*vision*/}
                    <div
                        className="content-wrapper"
                        style={{
                            backgroundImage: `url(${visionImg})`,
                            height: `${heroHeight}px`,
                        }}
                    >
                        <div>{aboutData.visionTitle}</div>
                        <div>{aboutData.visionDescription}</div>
                    </div>

                    {/*mission*/}
                    <div
                        className="content-wrapper"
                        style={{
                            backgroundImage: `url(${missionImg})`,
                            height: `${heroHeight}px`,
                        }}
                    >
                        <div>{aboutData.missionTitle}</div>
                        <div>{aboutData.missionDescription}</div>
                    </div>
                    <div className="value-wrapper">
                        <div className="value-title">
                            {aboutData.valueTitle}
                        </div>

                        <div className="content-cards">
                            {aboutData.valueList.map((dt, index) => (
                                <div
                                    key={dt.id}
                                    className={`card-item ${
                                        (index + 1) % 2 == 0
                                            ? 'card-even'
                                            : 'card-odd'
                                    }`}
                                >
                                    <img
                                        src={`${assetDomain}${
                                            dt.image?.url ?? ''
                                        }`}
                                        alt={dt.image?.alternativeText ?? ''}
                                    />

                                    <div className="card-content">
                                        <div className="card-title">
                                            {dt.title}
                                        </div>

                                        <div className="card-desc">
                                            {dt.description}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
            <Footer />
            <style jsx>{styles}</style>
        </>
    )
}
