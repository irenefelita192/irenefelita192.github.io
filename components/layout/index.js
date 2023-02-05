import { useEffect } from 'react'
import Head from 'next/head'
// import theme from 'components/global-styles/theme'
// import normalizeCss from 'normalize.css'
// import styles from './styles'
// import globalStyles from '../global-styles/global-styles'

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
            </Head>

            <div
                className={`children-wrapper ${headerWithBg ? 'with-bg' : ''}`}
            >
                {children}
            </div>

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
                        padding: 0 0 0.5rem;
                        color: #2b2b2b;
                    }

                    .noscript-content-wrapper .subheadline {
                        font-size: 1.2rem;
                        line-height: 1.5;
                        color: #2b2b2b;
                        margin: 0;
                        padding: 1rem 0 0;
                    }

                    .noscript-content-wrapper .subheadline > p {
                        font-size: 1rem;
                        color: #858585;
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
                            padding: 0 0 0.5rem;
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
