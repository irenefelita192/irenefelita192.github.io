import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getFooter } from '../../services/common'
import { getCookie } from '../../util/global-util'
import styles from './styles'

export default function Footer() {
    const [footerData, setFooterData] = useState(null)

    useAsyncEffect(async (isMounted) => {
        let langId
        if (process.browser) {
            langId = getCookie('lang')
        }
        const footerDt = await getFooter(langId ? langId : 'id')

        if (!isMounted()) return
        setFooterData(footerDt)
    }, [])

    const assetDomain = process.env.config?.baseEndpoint ?? ''

    return (
        <>
            {footerData && (
                <footer>
                    <div className="flex">
                        <div
                            className="first-column"
                            onClick={() => {
                                window.location.href = '/'
                            }}
                        >
                            <div className="first-row">
                                {footerData.vidaLogo && (
                                    <>
                                        <div className="vida-logo">
                                            <img
                                                src={`${assetDomain}${footerData.vidaLogo.url}`}
                                                alt={
                                                    footerData.vidaLogo
                                                        .alternativeText
                                                }
                                            />
                                        </div>
                                        <div className="text">
                                            {footerData.vidaText}
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className="second-row">
                                <div className="second-row-wrapper">
                                    <div className="text">
                                        {footerData.lippolifeText}
                                    </div>
                                    <div className="lippo-logo">
                                        <img
                                            src={`${assetDomain}${
                                                footerData.lippolifeLogo?.url ??
                                                ''
                                            }`}
                                            alt={
                                                footerData.lippolifeLogo
                                                    ?.alternativeText ?? ''
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="second-row-wrapper">
                                    <div className="text">
                                        {footerData.ojkText}
                                    </div>
                                    <div className="ojk-logo">
                                        <img
                                            src={`${assetDomain}${
                                                footerData.ojkLogo?.url ?? ''
                                            }`}
                                            alt={
                                                footerData.ojkLogo
                                                    ?.alternativeText ?? ''
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="second-column">
                            <div className="footer-menu">
                                {footerData.menu &&
                                    footerData.menu.map((menu) => (
                                        <div className="footer-submenu">
                                            <div className="title">
                                                {menu.title}
                                            </div>
                                            {menu.subMenu &&
                                                menu.subMenu.map((subMenu) => (
                                                    <a
                                                        className="list"
                                                        key={subMenu.id}
                                                        href={subMenu.link}
                                                    >
                                                        {subMenu.title}
                                                    </a>
                                                ))}
                                        </div>
                                    ))}
                            </div>
                            <div className="download">
                                <a href={footerData.AppStoreLink}>
                                    <img
                                        src={`${assetDomain}${
                                            footerData.AppStoreIcon?.url ?? ''
                                        }`}
                                        alt={
                                            footerData.AppStoreIcon
                                                ?.alternativeText ?? ''
                                        }
                                    />
                                </a>
                                <a href={footerData.PlayStoreLink}>
                                    <img
                                        src={`${assetDomain}${
                                            footerData.PlayStoreIcon?.url ?? ''
                                        }`}
                                        alt={
                                            footerData.PlayStoreIcon
                                                ?.alternativeText ?? ''
                                        }
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="left-column">
                            {footerData.privacyTitle && (
                                <>
                                    <a
                                        className="third-row-link"
                                        href={footerData.privacyLink}
                                    >
                                        {footerData.privacyTitle}
                                    </a>
                                    <span></span>
                                </>
                            )}
                            {footerData.tncTitle && (
                                <a
                                    className="third-row-link"
                                    href={footerData.tncLink}
                                >
                                    {footerData.tncTitle}
                                </a>
                            )}
                        </div>
                        <div className="copyright">
                            {footerData?.copyrightText ??
                                'All Rights Reserved © 2021 Vida'}
                        </div>
                    </div>
                </footer>
            )}
            <style jsx>{styles}</style>
        </>
    )
}
