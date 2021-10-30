import Head from 'next/head'
import yoastSEOPlugin from '../yoastSEOPlugin.json'
import Header from 'components/header'
import ChatButton from 'components/chat-button'
import normalizeCss from 'normalize.css'
import styles from './styles'
import globalStyles from '../global-styles/global-styles'

export default function Layout({
    isWebView = false,
    children,
    title = '',
    description = '',
    keywords = '',
    twitter_card_type = 'summary',
    appLinkUrl = '',
    type = 'website',
    markup,
    headerWithBg = false,
    activeId = '',
}) {
    const temTitle = ' Vida - A Health Coverage with Only You in Mind',
        temDesc = 'Designed to always be with you & your loved ones. '
    const seoTitle = title || temTitle,
        seoDesc = description || temDesc
    const url = process.env.config?.assetPrefix ?? '',
        gaId = process.env.config?.gaId ?? ''
    const seoImage = `/images/logo/vida-image.jpg`

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="#C81A21"
                />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    name="keywords"
                    content={keywords ? keywords : `${seoDesc}`}
                />
                <meta name="description" content={seoDesc} />
                <title>{seoTitle}</title>

                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index,follow" />

                <meta property="og:site_name" content={'Vida'} />
                <meta property="og:title" content={seoTitle} />
                <meta property="og:description" content={seoDesc} />
                <meta property="og:image" content={seoImage} />
                <meta property="og:url" content={url} />
                <meta property="og:type" content={type} />

                <meta property="twitter:text:title" content={seoTitle} />
                <meta name="twitter:description" content={seoDesc} />
                <meta name="twitter:image:src" content={seoImage} />
                <meta name="twitter:card" content={twitter_card_type} />

                <meta name="referrer" content="origin" />
                <meta name="referrer" content="origin-when-cross-origin" />

                {/*GA Google Analytics @ https://m0n.co/ga - start */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
			ga('create', '${gaId}', 'auto');
			ga('send', 'pageview');`,
                    }}
                />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: markup
                            ? JSON.stringify(markup)
                            : JSON.stringify(yoastSEOPlugin),
                    }}
                />

                <script src={`${url}/js/modernizr-custom.js`} />

                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css"
                ></link>
                {/* <link rel="manifest" href="/site.webmanifest" /> */}
                <link
                    rel="shortcut icon"
                    href="/images/logo/favicon.ico"
                    type="image/x-icon"
                />
                <link
                    rel="icon"
                    href="/images/logo/favicon.ico"
                    type="image/x-icon"
                />
                {/* <link
                    rel="shortcut icon"
                    type="image/png/ico"
                    href="/images/logo/favicon.ico"
                /> */}

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Bree+Serif:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />

                {/* font Museo 300 */}
                <link
                    rel="preload"
                    href={`${url}/fonts/Museo300-Regular-webfont.woff`}
                    as="font"
                    crossOrigin=""
                    type="font/woff"
                />
                <link
                    rel="preload"
                    href={`${url}/fonts/Museo300-Regular-webfont.woff2`}
                    as="font"
                    crossOrigin=""
                    type="font/woff"
                />

                <link
                    rel="preload"
                    href={`${url}/fonts/Museo300-Regular.otf`}
                    as="font"
                    crossOrigin=""
                    type="font/otf"
                />

                <link
                    rel="preload"
                    href={`${url}/fonts/Museo300-Italic-webfont.woff`}
                    as="font"
                    crossOrigin=""
                    type="font/woff"
                />
                <link
                    rel="preload"
                    href={`${url}/fonts/Museo300-Italic-webfont.woff2`}
                    as="font"
                    crossOrigin=""
                    type="font/woff"
                />

                <link
                    rel="preload"
                    href={`${url}/fonts/Museo300-Italic.otf`}
                    as="font"
                    crossOrigin=""
                    type="font/otf"
                />

                {/* font Museo 500 */}
                <link
                    rel="preload"
                    href={`${url}/fonts/Museo500-Regular-webfont.woff`}
                    as="font"
                    crossOrigin=""
                    type="font/woff"
                />
                <link
                    rel="preload"
                    href={`${url}/fonts/Museo500-Regular-webfont.woff2`}
                    as="font"
                    crossOrigin=""
                    type="font/woff"
                />

                <link
                    rel="preload"
                    href={`${url}/fonts/Museo500-Regular.otf`}
                    as="font"
                    crossOrigin=""
                    type="font/otf"
                />

                <link
                    rel="preload"
                    href={`${url}/fonts/Museo500-Italic-webfont.woff`}
                    as="font"
                    crossOrigin=""
                    type="font/woff"
                />
                <link
                    rel="preload"
                    href={`${url}/fonts/Museo500-Italic-webfont.woff2`}
                    as="font"
                    crossOrigin=""
                    type="font/woff"
                />

                <link
                    rel="preload"
                    href={`${url}/fonts/Museo500-Italic.otf`}
                    as="font"
                    crossOrigin=""
                    type="font/otf"
                />

                {/* font Museo 700 */}
                <link
                    rel="preload"
                    href={`${url}/fonts/Museo700-Regular-webfont.woff`}
                    as="font"
                    crossOrigin=""
                    type="font/woff"
                />
                <link
                    rel="preload"
                    href={`${url}/fonts/Museo700-Regular-webfont.woff2`}
                    as="font"
                    crossOrigin=""
                    type="font/woff"
                />

                <link
                    rel="preload"
                    href={`${url}/fonts/Museo700-Regular.otf`}
                    as="font"
                    crossOrigin=""
                    type="font/otf"
                />

                <link
                    rel="preload"
                    href={`${url}/fonts/Museo700-Italic-webfont.woff`}
                    as="font"
                    crossOrigin=""
                    type="font/woff"
                />
                <link
                    rel="preload"
                    href={`${url}/fonts/Museo700-Italic-webfont.woff2`}
                    as="font"
                    crossOrigin=""
                    type="font/woff"
                />

                <link
                    rel="preload"
                    href={`${url}/fonts/Museo700-Italic.otf`}
                    as="font"
                    crossOrigin=""
                    type="font/otf"
                />
            </Head>
            <style jsx global>
                {normalizeCss}
            </style>
            <style jsx global>
                {styles}
            </style>
            <style jsx global>
                {globalStyles}
            </style>

            {!isWebView && (
                <Header activeId={activeId} headerWithBg={headerWithBg} />
            )}
            <div
                className={`children-wrapper ${headerWithBg ? 'with-bg' : ''}`}
            >
                {children}
            </div>
            {!isWebView && <ChatButton />}
            <noscript>
                <style
                    id="noscript-blank-page"
                    dangerouslySetInnerHTML={{
                        __html: `

                    .noscript-wrapper {
                        position: fixed;
                        top: 0;
                        width: 100%;
                        height: 100vh;
                        z-index: 102;
                        background-color: #FFFFFF;
                    }

                    .noscript-header {
                        display: flex;
                        height: 80px;
                    }

                    .noscript-logo {
                        display: inline-block;
                        width: 15rem;
                        margin: auto;
                    }

                    .noscript-content-wrapper {
                        display: flex;
                        flex-direction: column;
                        height: 100%;
                        margin-top: 15%;
                        color: #2b2b2b;
                    }

                    .noscript-content-wrapper .headline {
                        font-size: 2.1rem;
                        font-weight: 600;
                        line-height: 1.3;
                        margin: 0;
                        padding: 1.8rem 0 0 0;
                        color: #2b2b2b;
                        margin: 0 1.6rem;
                        text-align: center;
                    }

                    .noscript-content-wrapper .subheadline {
                        font-size: 1.6rem;
                        line-height: 1.5;
                        color: #2b2b2b;
                        margin: 0;
                        padding: 0.8rem 5rem 0;
                        text-align: center;
                    }

                    @media screen and (max-width: 640px) {
                        .noscript-header {
                            height: 52px;
                            align-items: center;
                            justify-content: center;
                        }

                        .noscript-logo {
                            width: 120px;
                            margin: auto 16px;
                        }

                        .noscript-content-wrapper .headline {
                        font-size: 1.8rem;
                        padding: 28.8px 0 0 0;
                        margin: 0 24px;
                        }

                        .noscript-content-wrapper .subheadline {
                        font-size: 1.4rem;
                        }
                    }
                    `,
                    }}
                />
                <div className={'noscript-wrapper'}>
                    <div className={'noscript-header'}>
                        <img
                            alt="LippoLife"
                            src={seoImage}
                            className={'noscript-logo'}
                        />
                    </div>
                    <div className={'noscript-content-wrapper'}>
                        <h2 className={'headline'}>
                            Anda belum mengaktifkan javascript di dalam browser
                        </h2>
                        <p className={'subheadline'}>
                            <a
                                style={{
                                    textDecoration: 'none',
                                    color: '#1f93ff',
                                }}
                                href="https://www.enablejavascript.io"
                                target="_blank"
                            >
                                Aktifkan
                            </a>{' '}
                            javascript untuk bisa mengakses website
                        </p>
                    </div>
                </div>
            </noscript>
        </>
    )
}
