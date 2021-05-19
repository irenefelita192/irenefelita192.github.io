import { useEffect } from 'react'
import Head from 'next/head'
import yoastSEOPlugin from '../yoastSEOPlugin.json'
import Header from '../header'

import normalizeCss from 'normalize.css'
import globalStyles from '../global-styles/global-styles'

export default function Layout({
    children,
    title = '',
    description = 'Best Protection Solution at Every Stage of Life',
    image = '',
    keywords = '',

    twitter_card_type = 'summary',
    appLinkUrl = '',
    type = 'website',
    markup,
    headerWithBg = true,
    activeHeaderId = '',
}) {
    const seoTitle = title
        ? `${title} | Lippo Life – We Love You`
        : 'Lippo Life – We Love You'

    const url = process.env.config?.endpoints?.domain ?? ''

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
                    content={keywords ? keywords : `Lippo Life ${description}`}
                />
                <meta
                    name="description"
                    content={
                        description ||
                        'Best Protection Solution at Every Stage of Life'
                    }
                />
                <title>{seoTitle}</title>
                {/* <meta
                    name="msapplication-TileImage"
                    content={
                        'https://mola01.koicdn.com/assets-global/images/mola-landscape-blue.svg'
                    }
                /> */}
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index,follow" />

                <meta
                    property="og:site_name"
                    content="Lippo Life - We Love You"
                />
                <meta property="og:title" content={seoTitle} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta property="og:url" content={url} />
                <meta property="og:type" content={type} />

                <meta property="twitter:text:title" content={seoTitle} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image:src" content={image} />
                <meta name="twitter:card" content={twitter_card_type} />

                <meta name="referrer" content="origin" />
                <meta name="referrer" content="origin-when-cross-origin" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: markup
                            ? JSON.stringify(markup)
                            : JSON.stringify(yoastSEOPlugin),
                    }}
                />

                <script src="/js/modernizr-custom.js" />

                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css"
                ></link>
                {/* <link rel="manifest" href="/site.webmanifest" /> */}
                <link
                    rel="shortcut icon"
                    type="image/png/ico"
                    href="/images/logo/favicon.ico"
                />

                <link
                    rel="preconnect"
                    href="//cdn.jsdelivr.net"
                    as="script"
                    async=""
                />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=Nunito:wght@400;600&display=swap"
                    rel="stylesheet"
                />
                {/*GA Google Analytics @ https://m0n.co/ga - start */}
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
			ga('create', 'G-ZB5B3GS21Z', 'auto');
			ga('send', 'pageview');`,
                    }}
                />
                {/*GA Google Analytics @ https://m0n.co/ga - end */}
            </Head>
            <style jsx global>
                {normalizeCss}
            </style>
            <style jsx global>
                {globalStyles}
            </style>

            <Header withBg={headerWithBg} activeId={activeHeaderId} />
            <div
                style={{
                    fontFamily: `Inter, sans-serif`,
                }}
            >
                {children}
            </div>

            <noscript>
                <style
                    id="noscript-blank-page"
                    dangerouslySetInnerHTML={{
                        __html: `
              .noscript-header {
                display: flex;
                position: fixed;
                top: 0;
                height: 6rem;
                width: 100%;
                z-index: 102;
                background-color: #000;
              }

              .noscript-logo {
                display: inline-block;
                width: 15rem;
                margin: auto;
              }

              .noscript-content-wrapper {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100%;
                color: white;
              }

              .noscript-content-wrapper .headline {
                font-size: 2.1rem;
                font-weight: 600;
                line-height: 1.3;
                margin: 0;
                padding: 1.8rem 0 0 0;
                color: #FFFFFF;
                margin: 0 1.6rem;
                text-align: center;
              }

              .noscript-content-wrapper .subheadline {
                font-size: 1.6rem;
                line-height: 1.5;
                color: #C1C2C2;
                margin: 0;
                padding: 0.8rem 5rem 0;
                text-align: center;
              }

              @media screen and (max-width: 640px) {
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
                <div className={'noscript-header'}>
                    {/* <img
                        alt="molatv"
                        src="https://mola01.koicdn.com/assets-global/images/mola_logo_horizontal.png"
                        className={'noscript-logo'}
                    /> */}
                </div>
                <div className={'noscript-content-wrapper'}>
                    {/* <img
                        alt="mola error background"
                        src="https://mola01.koicdn.com/assets-global/images/error/not-found@2x.png"
                        style={{
                            minWidth: '200px',
                            height: '200px',
                            display: 'block',
                        }}
                    /> */}
                    <h2 className={'headline'}>
                        Anda belum mengaktifkan javascript di dalam browser
                    </h2>
                    <p className={'subheadline'}>
                        <a
                            style={{ textDecoration: 'none', color: '#1f93ff' }}
                            href="https://www.enablejavascript.io"
                            target="_blank"
                        >
                            Aktifkan
                        </a>{' '}
                        javascript untuk bisa menonton
                    </p>
                </div>
            </noscript>
        </>
    )
}
