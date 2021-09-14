import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getAboutData } from 'services/about'
import { getCookie } from 'utils/global-util'
import Loader from 'components/loader'
import styles from './styles'
import Footer from 'components/footer'

export default function HomeScreen() {
    const [aboutData, setAboutData] = useState(null)
    const [isPortrait, setIsPortrait] = useState(false)
    const [heroHeight, setHeroHeight] = useState(null)
    let headerHeight = 80

    useAsyncEffect(async (isMounted) => {
        let langId
        if (process.browser) {
            langId = getCookie('lang')

            if (window.innerWidth <= 768) {
                setIsPortrait(true)
                setHeroHeight(window.innerHeight - headerHeight)
            } else {
                setIsPortrait(false)
                setHeroHeight(0)
            }
        }
        const aboutDt = await getAboutData(langId ? langId : 'id')

        if (!isMounted()) return

        setAboutData(aboutDt)
    }, [])

    const assetDomain = process.env.config?.baseEndpoint ?? '',
        assetPrefix = process.env.config?.assetPrefix ?? ''

    if (!aboutData) return <Loader />

    let heroImg = aboutData.desktopHeroImage
        ? `${assetDomain}${aboutData.desktopHeroImage.url}`
        : ''
    if (isPortrait) {
        heroImg = aboutData.mobileHeroImage
            ? `${assetDomain}${aboutData.mobileHeroImage.url}`
            : ''
    }
    return (
        <>
            {aboutData && (
                <>
                    <div
                        className={`hero-wrapper`}
                        style={{
                            backgroundImage: `url(${heroImg})`,
                            height: isPortrait ? `${heroHeight}px` : 'auto',
                        }}
                    >
                        <div className="hero-text">
                            <div className="hero-vida">
                                {aboutData.vidaLogo && (
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
                            {!isPortrait && (
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

                        {isPortrait && (
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

                    <div className="content-wrapper vision-mission">
                        {!isPortrait && (
                            <div className="static-blob">
                                <img
                                    src={`${assetPrefix}/images/blob/blob-about-1.png`}
                                />
                            </div>
                        )}
                        <div className="content-cards">
                            <div className="card-item card-odd">
                                <img
                                    src={`${assetDomain}${
                                        aboutData.visionImage?.url ?? ''
                                    }`}
                                    alt={
                                        aboutData.visionImage
                                            ?.alternativeText ?? ''
                                    }
                                />

                                <div className="card-content">
                                    <div className="card-title">
                                        {aboutData.visionTitle}
                                    </div>

                                    <div className="card-desc">
                                        {aboutData.visionDescription}
                                    </div>
                                </div>
                            </div>

                            <div className="card-item card-even">
                                <img
                                    src={`${assetDomain}${
                                        aboutData.missionImage?.url ?? ''
                                    }`}
                                    alt={
                                        aboutData.missionImage
                                            ?.alternativeText ?? ''
                                    }
                                />

                                <div className="card-content">
                                    <div className="card-title">
                                        {aboutData.missionTitle}
                                    </div>

                                    <div className="card-desc">
                                        {aboutData.missionValue &&
                                            aboutData.missionValue.map(
                                                (msVal) => (
                                                    <>
                                                        <div className="card-desc-title">
                                                            {msVal.title}
                                                        </div>
                                                        <div>
                                                            {msVal.description}
                                                        </div>
                                                    </>
                                                )
                                            )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-wrapper vida-value">
                        <div className="value-title">
                            {aboutData.valueTitle}
                        </div>
                        <div className="value-desc">
                            {aboutData.valueDescription}
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
                                        {dt.linkText && (
                                            <a
                                                className="card-link"
                                                href={dt.link}
                                            >
                                                {dt.linkText}
                                            </a>
                                        )}
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
