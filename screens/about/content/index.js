import styles from './styles'
import Footer from 'components/footer'

const assetDomain = process.env.config?.baseEndpoint ?? '',
    assetPrefix = process.env.config?.assetPrefix ?? ''
export default function HomeScreen({ aboutData, isDesktop, isWebpSupport }) {
    const { heroList, valueList } = aboutData
    const footerCallback = (status) => {
        const footerEl = document.getElementById('footer')
        if (footerEl) {
            const footerHeight = footerEl.offsetHeight
            const footerWrapperEl = document.getElementById('footerWrapper')
            if (footerWrapperEl) {
                footerWrapperEl.style.height = footerHeight
                fullpage_api.reBuild()
            }
        }
    }
    return (
        <>
            {heroList &&
                heroList.map((dt, index) => {
                    let heroImg = ''
                    if (isDesktop) {
                        heroImg = `${assetDomain}${dt?.imageWebp?.url ?? ''}`
                        if (!dt.imageWebp || !isWebpSupport) {
                            heroImg = `${assetDomain}${dt?.image?.url ?? ''}`
                        }
                    } else {
                        heroImg = `${assetDomain}${
                            dt?.imageMobileWebp?.url ?? ''
                        }`
                        if (!dt.imageMobileWebp || !isWebpSupport) {
                            heroImg = `${assetDomain}${
                                dt?.imageMobile?.url ?? ''
                            }`
                        }
                    }
                    return (
                        <div
                            className={`section`}
                            data-anchor={`section-${index + 1}`}
                        >
                            <div
                                style={{
                                    height: '100vh',
                                    backgroundColor: '#DEB196',
                                }}
                                className={` ${
                                    index == 0 ? 'first-section' : ''
                                } ${
                                    isDesktop && dt.isRightPosition && index > 0
                                        ? 'even-section'
                                        : ''
                                } ${isDesktop ? '' : 'is-mobile'} 
                                                    section-content`}
                            >
                                <img src={heroImg} alt={'hero-img'} />
                                {index === 0 && (
                                    <div className="section-text">
                                        {dt.headline}
                                    </div>
                                )}
                                {index !== 0 && (
                                    <div className="section-text">
                                        <div>{dt.headline}</div>
                                        <div>{dt.name}</div>
                                        <div>{dt.position}</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                })}

            <div className="section" data-anchor={`section-value`}>
                {valueList && (
                    <div id="value" className="value-wrapper">
                        <div className="value-title">
                            {aboutData.valueTitle}
                        </div>

                        <div className="content-cards">
                            {valueList.map((dt, index) => (
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
                )}
                <div id="footerWrapper">
                    <Footer loadedCallback={footerCallback} />
                </div>
            </div>

            <style jsx>{styles}</style>
        </>
    )
}
