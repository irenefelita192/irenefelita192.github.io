import { useState, useEffect } from 'react'
import styles from './styles'
export default function Search({ onSearch, onSelect, isDesktop, options }) {
    const [inputVal, setInputVal] = useState('')
    const [isPopUp, setIsPopUp] = useState(false)
    const [isPopUpSearch, setIsPopUpSearch] = useState(false)
    const [selectedOpt, setSelectedOpt] = useState(options[0])
    const [searchList, setSearchList] = useState(null)
    const [searchMasterList, setSearchMasterList] = useState(null)
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

    const handleChange = (e) => {
        let value = e.target.value
        setInputVal(value)
        if (selectedOpt && selectedOpt.master) {
            if (searchMasterList && value) {
                const filteredList = searchMasterList.filter((dt) => {
                    return (
                        dt[selectedOpt.masterName]
                            .toLowerCase()
                            .indexOf(value.toLowerCase()) > -1
                    )
                })

                if (filteredList) {
                    setIsPopUpSearch(true)
                    setSearchList(filteredList)
                }
            } else {
                setIsPopUpSearch(false)
                if (!value) {
                    onSearch('', selectedOpt)
                }
            }
        } else {
            if (onSearch) {
                onSearch(e.target.value, selectedOpt)
            }
        }
    }

    const resetSearch = () => {
        setInputVal('')
        if (isPopUpSearch) {
            setIsPopUpSearch(false)
        }
        if (onSearch) {
            onSearch('', selectedOpt)
        }
    }

    const handleOnBlur = () => {
        // setIsPopUpSearch(false)
    }

    const handleClickOptions = () => {
        setIsPopUp(!isPopUp)
    }

    const handleChooseOptions = (opt) => {
        setSelectedOpt(opt)
        setInputVal('')
        if (onSearch) {
            onSearch('', opt)
        }
        if (onSelect) {
            onSelect(opt)
        }
        if (opt && opt.master) {
            import(`../../../services/partner`).then((action) => {
                action
                    .getSearchMaster({
                        source: opt.master,
                    })
                    .then((response) => {
                        if (response) {
                            setSearchList(response)
                            setSearchMasterList(response)
                        }
                    })
            })
        }
    }

    const handleChooseSearch = (dt) => {
        setInputVal(dt[selectedOpt.masterName])
        setIsPopUpSearch(false)
        if (onSearch) {
            onSearch(dt[selectedOpt.masterId], selectedOpt)
        }
    }
    return (
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
                <input
                    placeholder={selectedOpt?.placeholder ?? ''}
                    onChange={(e) => {
                        handleChange(e)
                    }}
                    onBlur={() => handleOnBlur()}
                    value={inputVal}
                />
                {inputVal && (
                    <div onClick={() => resetSearch()} className="reset" />
                )}
                <i />
            </div>
            {searchList && isPopUpSearch && (
                <div className="dropdown-search-list">
                    {/* <div className="dropdown-search-content"> */}
                    {searchList.map((src) => (
                        <a
                            key={src.id}
                            onClick={() => handleChooseSearch(src)}
                            className={`dropdown-item `}
                        >
                            <span>{src[selectedOpt.masterName]}</span>
                        </a>
                    ))}
                    {/* </div> */}
                </div>
            )}

            <style jsx>{styles}</style>
        </div>
    )
}
