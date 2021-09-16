import { useState, useEffect } from 'react'

import { getCookie } from 'utils/global-util'

import styles from './styles'

const assetPrefix = process.env.config?.assetPrefix ?? '',
    assetDomain = process.env.config?.baseEndpoint ?? ''

export default function LangPopup({ isDesktop, languageData }) {
    const [isPopupLang, setIsPopupLang] = useState(false)
    const [activeLang, setActiveLang] = useState('id')
    const [activeLangObj, setActiveLangObj] = useState(null)

    useEffect(() => {
        if (languageData && languageData.length > 0) {
            const selLanguage = languageData.find((lang) => {
                return lang.code === activeLang
            })

            setActiveLangObj(selLanguage)
        }
    }, [languageData])

    useEffect(() => {
        if (process.browser) {
            const langId = getCookie('lang')
            if (langId) setActiveLang(langId)

            document.addEventListener('click', (evt) => {
                const navbarLang = document.getElementById('navbarLang')
                const navbarWrapper = document.getElementById('navbarTop')
                let targetElement = evt.target // clicked element

                do {
                    if (targetElement == navbarLang) {
                        // This is a click inside. Do nothing, just return.
                        return
                    }
                    // Go up the DOM
                    targetElement = targetElement.parentNode
                } while (targetElement)
                setIsPopupLang(false)

                // This is a click outside.
            })
        }

        return () => {
            document.removeEventListener('click', () => {})
        }
    }, [])

    const handleLangDropdown = () => {
        setIsPopupLang(!isPopupLang)
    }

    const handleChooseLang = (code) => {
        setActiveLang(code)
        document.cookie = `lang=${code};path=/`
        location.reload()
    }

    const renderLang = () => {
        return (
            <>
                <div
                    id="navbarLang"
                    className={`navbar-item navbar-lang ${
                        isDesktop ? '' : 'is-mobile'
                    }`}
                    onClick={() => handleLangDropdown()}
                >
                    <div
                        className={`dropdown is-right ${
                            isPopupLang ? 'is-active' : ''
                        }`}
                    >
                        {activeLangObj && (
                            <img
                                src={`${assetPrefix}/images/lang/${
                                    activeLangObj.code == 'en'
                                        ? 'uk-flag.svg'
                                        : 'id-flag.svg'
                                }`}
                            />
                        )}
                        <span className="selected-lang">
                            {activeLangObj && activeLangObj.code.toUpperCase()}
                        </span>

                        <div
                            className="dropdown-menu"
                            id="dropdown-menu"
                            role="menu"
                        >
                            <div className="dropdown-content">
                                {languageData.map((lang) => (
                                    <a
                                        key={lang.id}
                                        onClick={() =>
                                            handleChooseLang(lang.code)
                                        }
                                        className={`dropdown-item ${
                                            activeLang === lang.code
                                                ? 'is-active'
                                                : ''
                                        }`}
                                    >
                                        <img
                                            src={`${assetPrefix}/images/lang/${
                                                lang.code == 'en'
                                                    ? 'uk-flag.svg'
                                                    : 'id-flag.svg'
                                            }`}
                                        />
                                        <span>{lang.code}</span>
                                        {activeLang === lang.code && (
                                            <img
                                                className="checkmark"
                                                src={`${assetPrefix}/images/lang/checkmark.svg`}
                                            />
                                        )}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{styles}</style>
            </>
        )
    }
    return (
        <>
            {renderLang()}

            <style jsx>{styles}</style>
        </>
    )
}
