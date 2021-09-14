import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getHomeData } from 'services/home'
import { getCookie } from 'utils/global-util'
import Loader from 'components/loader'
import styles from './styles'
import Footer from 'components/footer'

export default function HomeScreen() {
    const [homeData, setHomeData] = useState(null)
    const [isMobile, setIsMobile] = useState(false)
    const [isPortrait, setIsPortrait] = useState(false)
    const [isIos, setIsIos] = useState(false)
    const [heroHeight, setHeroHeight] = useState(0)

    let headerHeight = 80

    useAsyncEffect(async (isMounted) => {
        let langId
        if (process.browser) {
            langId = getCookie('lang')
            const mob =
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                )
            console.log('ismobile', mob)
            setIsMobile(mob)

            if (window.innerWidth <= 768) {
                setIsPortrait(true)
                setHeroHeight(window.innerHeight - headerHeight)
            }

            const ios = /(iPad|iPhone|iPod)/g.test(navigator.userAgent)
            setIsIos(ios)
        }
        const homeDt = await getHomeData(langId ? langId : 'id')

        if (!isMounted()) return

        setHomeData(homeDt)
    }, [])

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
                    className={`hero-wrapper`}
                    style={{
                        backgroundImage: `url(${heroImg})`,
                        height: isPortrait ? `${heroHeight}px` : 'auto',
                    }}
                >
                    <div className="hero-title"> {header?.title ?? ''}</div>
                    <div className="hero-desc">{header?.description ?? ''}</div>
                    {!isMobile && (
                        <>
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
                        </>
                    )}
                    {isMobile && (
                        <div className="hero-single-button">
                            <a
                                href={
                                    isIos
                                        ? header.AppStoreLink
                                        : header.PlayStoreLink
                                }
                            >
                                {header.buttonText}
                            </a>
                        </div>
                    )}
                </div>
            )}

            <div className="content-wrapper">
                {!isPortrait && (
                    <div className="static-blob">
                        <img src="./images/blob/blob-home.png" />
                    </div>
                )}
                <div className="content-cards">
                    {homeData.key.map((dt, index) => (
                        <div
                            key={dt.id}
                            className={`card-item ${
                                (index + 1) % 2 == 0 ? 'card-even' : 'card-odd'
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
