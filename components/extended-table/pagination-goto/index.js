import { useState, useEffect } from 'react'
import styles from './styles'
export default function PaginationGoTo({
    onClick,
    value = '',
    isDesktop,
    textLang,
}) {
    const [inputVal, setInputVal] = useState(value)
    const handleGoTo = () => {
        if (onClick) {
            onClick(inputVal)
        }
    }

    const handleChange = (e) => {
        setInputVal(e.target.value)
    }
    return (
        <div className={`pagination-goto ${isDesktop ? '' : 'is-mobile'}`}>
            <div className="wrapper-title">
                {textLang ? textLang['jumpToPage'] : 'Jump to page'}
            </div>
            <div className="wrapper-goto">
                <input
                    placeholder={
                        textLang
                            ? textLang['pageNumberPlaceholder']
                            : 'page number'
                    }
                    onChange={(e) => {
                        handleChange(e)
                    }}
                    value={inputVal}
                />
                <button
                    onClick={() => {
                        handleGoTo()
                    }}
                >
                    {textLang ? textLang['go'] : 'Go'}
                </button>
            </div>
            <style jsx>{styles}</style>
        </div>
    )
}
