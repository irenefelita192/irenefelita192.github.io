import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import styles from './styles'

const SearchLocation = dynamic(() => import('./search-location'), {
    ssr: false,
})

const SearchSelect = dynamic(() => import('./search-select'), {
    ssr: false,
})

const SearchInput = dynamic(() => import('./search-input'), {
    ssr: false,
})

export default function AXASearch({
    onSearch,
    onSelect,
    initialData,
    isDesktop,
    options,
    sessionToken,
    textLang,
}) {
    const [inputVal, setInputVal] = useState('')
    const [isPopUp, setIsPopUp] = useState(false)
    const [selectedOpt, setSelectedOpt] = useState(options[0])
    useEffect(() => {
        if (window) {
            document.addEventListener('click', (evt) => {
                const navbarLang = document.getElementById('optDd')

                let targetElement = evt.target // clicked element

                do {
                    if (targetElement == navbarLang) {
                        // This is a click inside. Do nothing, just return.
                        return
                    }
                    // Go up the DOM
                    targetElement = targetElement.parentNode
                } while (targetElement)
                setIsPopUp(false)

                // This is a click outside.
            })
        }

        return () => {
            document.removeEventListener('click', () => {})
        }
    }, [])

    const handleClickOptions = () => {
        setIsPopUp(!isPopUp)
    }

    const handleChooseOptions = (opt) => {
        setSelectedOpt(opt)
        setInputVal('')
        if (onSelect) {
            onSelect(opt)
        }
    }

    const handleSearch = (value) => {
        if (onSearch) {
            onSearch(value, selectedOpt)
        }
    }
    return (
        <>
            <div className={`search-wrapper ${isDesktop ? '' : 'is-mobile'}`}>
                <div className={`search-box`}>
                    <div
                        id="optDd"
                        onClick={() => handleClickOptions()}
                        className={`dropdown dropdown-options ${
                            isPopUp ? 'is-active' : ''
                        }`}
                    >
                        <span className="selected-item">
                            {selectedOpt.text || ''}
                        </span>
                        <span className="selected-caret">
                            <i />
                        </span>
                        <div
                            className="dropdown-menu"
                            id="dropdown-menu"
                            role="menu"
                        >
                            <div className="dropdown-content">
                                {options.map((opt) => (
                                    <a
                                        key={opt.id}
                                        onClick={() => handleChooseOptions(opt)}
                                        className={`dropdown-item `}
                                    >
                                        <span>{opt.text}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    {selectedOpt && selectedOpt.type == 'input' && (
                        <SearchInput
                            placeholder={selectedOpt?.placeholder ?? ''}
                            onSearch={handleSearch}
                            isDesktop={isDesktop}
                        />
                    )}
                    {selectedOpt &&
                        (selectedOpt.type == 'select-single' ||
                            selectedOpt.type == 'select-multiple') && (
                            <>
                                <SearchSelect
                                    initialData={initialData}
                                    isMulti={
                                        selectedOpt.type == 'select-multiple'
                                    }
                                    onSelectValue={handleSearch}
                                    textLang={textLang}
                                    placeholder={selectedOpt?.placeholder ?? ''}
                                    isDesktop={isDesktop}
                                />
                            </>
                        )}
                    {selectedOpt && selectedOpt.type == 'location' && (
                        <>
                            <SearchLocation
                                onSelectValue={handleSearch}
                                sessionToken={sessionToken}
                                textLang={textLang}
                                placeholder={selectedOpt?.placeholder ?? ''}
                                isDesktop={isDesktop}
                            />
                        </>
                    )}
                </div>
            </div>

            {/* <button className="search-btn" onClick={() => clickSearchBtn()}>
                Search
            </button> */}

            <style jsx>{styles}</style>
        </>
    )
}
