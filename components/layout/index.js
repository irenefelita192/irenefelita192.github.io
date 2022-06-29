import { useEffect } from 'react'
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
    image = '',
}) {
    console.log('version', process?.env?.packageVersion ?? '')
    const temTitle = 'Vida | Healthcare Your Way',
        temDesc = 'Designed to always be with you & your loved ones. '
    const seoTitle = title ? title : temTitle,
        seoDesc = description || temDesc
    const url = process.env.config?.assetPrefix ?? '',
        gaId = process.env.config?.gaId ?? ''
    const seoImage = image
        ? image
        : `https://kenalvida.com/images/logo/vida-image.jpg`

    useEffect(() => {
        const searchParam = window.location.search
        const domain = window ? window.location.host : ''
        if (searchParam) {
            if (domain.indexOf('localhost') > -1) {
                document.cookie = `_sp=${searchParam};path=/`
            } else {
                document.cookie = `_sp=${searchParam};path=/;domain=.${domain}`
            }
        }
        // } else {
        //     document.cookie =
        //         '_sp=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
        // }
    }, [])

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
                {/* <meta property="og:image:width" content="200" />
                <meta property="og:image:height" content="200" /> */}
                <meta property="og:url" content={url} />
                <meta property="og:type" content={type} />

                <meta property="twitter:text:title" content={seoTitle} />
                <meta name="twitter:description" content={seoDesc} />
                <meta name="twitter:image:src" content={seoImage} />
                <meta name="twitter:card" content={twitter_card_type} />

                <meta name="referrer" content="origin" />
                <meta name="referrer" content="origin-when-cross-origin" />

                {/*GA Google Analytics @ https://m0n.co/ga - start */}
                {/* <script
                    dangerouslySetInnerHTML={{
                        __html: `
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
			ga('create', '${gaId}', 'auto');
			ga('send', 'pageview');`,
                    }}
                /> */}

                {/* Global Site Tag (gtag.js) - Google Analytics */}
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
              page_title: '${seoTitle}',
            });

          `,
                    }}
                />

                {/* <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: markup
                            ? JSON.stringify(markup)
                            : JSON.stringify(yoastSEOPlugin),
                    }}
                /> */}

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
                    crossOrigin=""
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
                        top: 10%;
                        width: 100%;
                        height: 100vh;
                        z-index: 102;
                        padding: 0 5rem;
                        background-color: #FFFFFF;
                    }

                    .noscript-header {
                        max-width: 700px;
                        margin: 0 auto;
                    }

                    .noscript-logo {
                        display: block;
                        width: 6rem;
                        padding: 1rem 0;
                    }

                    .noscript-content-wrapper {
                        display: flex;
                        flex-direction: column;
                        height: 100%;
                        max-width: 700px;
                        margin: 0 auto;
                        color: #2b2b2b;
                    }

                    .noscript-content-wrapper .headline {
                        font-family: 'Museo', sans-serif;
                        font-size: 1.5rem;
                        font-weight: 600;
                        line-height: 1.3;
                        margin: 0;
                        padding: 0.8rem 0 0;
                        color: #2b2b2b;
                    }

                    .noscript-content-wrapper .subheadline {
                        font-size: 1.2rem;
                        line-height: 1.5;
                        color: #2b2b2b;
                        margin: 0;
                        padding: 0.5rem 0 0;
                    }

                    .noscript-content-wrapper .subheadline > p {
                        font-size: 1rem;
                        color: #666666;
                    }

                    @media screen and (max-width: 640px) {
                        .noscript-wrapper {
                            top: 10%;
                            padding: 0 2rem;
                        }

                        .noscript-logo {
                            width: 5rem;
                            margin: 0;
                        }

                        .noscript-content-wrapper .headline {
                            font-size: 1.5rem;
                            margin: 0;
                            padding: 0;
                        }

                        .noscript-content-wrapper .subheadline {
                            font-size: 1.2rem;
                        }
                    }
                    `,
                    }}
                />
                <div className={'noscript-wrapper'}>
                    <div className={'noscript-header'}>
                        <img
                            alt="Vida"
                            src={seoImage}
                            className={'noscript-logo'}
                        />
                    </div>
                    <div className={'noscript-content-wrapper'}>
                        <div className={'headline'}>
                            Silakan aktifkan Javascript browser Anda.
                        </div>
                        <div className={'subheadline'}>
                            Jika Anda menggunakan Chrome pada Android:
                            <p>
                                Buka Chrome Browser &#8594; Settings &#8594;
                                Site Settings &#8594; JavaScript &#8594; Enable
                            </p>
                        </div>
                        <div className={'subheadline'}>
                            Jika Anda menggunakan Safari pada iOS:
                            <p>
                                Buka Settings &#8594; Safari &#8594; Advanced
                                &#8594; Javascript &#8594; Enable
                            </p>
                        </div>
                    </div>
                </div>
            </noscript>
        </>
    )
}
