import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getHomeData } from '../../services/home'
import { getCookie } from '../../util/global-util'
import Loader from '../../components/loader'
import styles from './styles'
import Sidebar from '../../components/sidebar'
import Hero from '../../components/hero-header'
import Footer from '../../components/footer'
import PageWrapper from '../../components/layout/page-wrapper'

export default function HomeScreen() {
    const [homeData, setHomeData] = useState(null)
    const [isPortrait, setIsPortrait] = useState(false)

    useAsyncEffect(async (isMounted) => {
        let langId
        if (process.browser) {
            langId = getCookie('lang')
            if (window.innerWidth < window.innerHeight) {
                setIsPortrait(true)
            } else {
                setIsPortrait(false)
            }
        }
        const homeDt = await getHomeData(langId ? langId : 'id')

        if (!isMounted()) return

        setHomeData(homeDt)
    }, [])

    const navigateAway = () => {
        try {
            document.location =
                'intent://mola.tv/watch?v=vd75881280#Intent;scheme=molaapp;end'
            document.location = 'molaapp://mola.tv/watch?v=vd75881280'
        } catch (e) {
            console.log('deeplink failed watch?v=vd75881280')
        } finally {
        }
    }

    const assetDomain = process.env.config?.baseEndpoint ?? ''

    if (!homeData) return <Loader />

    const { header } = homeData
    let heroImg = header.desktopImage
        ? `${assetDomain}${header.desktopImage.url}`
        : ''
    if (isPortrait) {
        heroImg = header.mobileImage
            ? `${assetDomain}${header.mobileImage.url}`
            : ''
    }
    return (
        <>
            {header && (
                <div
                    className={`hero-wrapper ${
                        isPortrait ? 'is-portrait' : ''
                    }`}
                    style={{ backgroundImage: `url(${heroImg})` }}
                >
                    <div className="hero-title"> {header?.title ?? ''}</div>
                    <div className="hero-desc">{header?.description ?? ''}</div>
                    <div className="hero-button-text">
                        {header?.buttonHeaderText ?? ''}
                    </div>
                    <div className="hero-button">
                        {header.AppStoreText && (
                            <a href={header.AppStoreLink}>
                                {header.AppStoreText}
                            </a>
                        )}
                        {header.PlayStoreText && (
                            <a href={header.PlayStoreLink}>
                                {header.PlayStoreText}
                            </a>
                        )}
                    </div>

                    {header.buttonLink && (
                        <div className="hero-single-button">
                            <a href={header.buttonLink}>{header.buttonText}</a>
                        </div>
                    )}
                </div>
            )}

            <div className="content-wrapper">
                <div className="static-blob">
                    <img src="./images/blob/blob-home.png" />
                </div>
                <div className="content-cards">
                    {homeData.key.map((dt, index) => (
                        <>
                            <div
                                key={dt.id}
                                className={`card-item ${
                                    (index + 1) % 2 == 0
                                        ? 'card-even'
                                        : 'card-odd'
                                }`}
                            >
                                <img
                                    src={`${assetDomain}${dt.image?.url ?? ''}`}
                                    alt={dt.image?.alternativeText ?? ''}
                                />

                                <div className="card-content">
                                    <div className="card-title">{dt.title}</div>

                                    <div className="card-desc">
                                        {dt.description}
                                    </div>
                                    {dt.linkText && (
                                        <a className="card-link" href={dt.link}>
                                            {dt.linkText}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
            <div className="bottom-section">
                <div className="bottom-title">{homeData.bottomTitle}</div>
                {homeData.bottomLinkText && (
                    <div className="bottom-button">
                        <a href={homeData.bottomLink}>
                            {homeData.bottomLinkText}
                        </a>
                    </div>
                )}
            </div>
            <Footer />
            <style jsx>{styles}</style>
        </>
    )
}
