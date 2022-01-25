import { useState, useEffect } from 'react'
import _debounce from 'lodash/debounce'
import styles from './styles'

export default function Search({ onSearch, placeholder, isDesktop }) {
    const [inputVal, setInputVal] = useState('')

    const handleChangeInput = (e) => {
        let value = e.target.value
        setInputVal(value)
        if (onSearch) {
            processSearch(value)
        }
    }

    const processSearch = _debounce((value) => {
        onSearch(value)
    }, 1000)

    return (
        <>
            <input
                placeholder={placeholder}
                onChange={(e) => {
                    handleChangeInput(e)
                }}
                value={inputVal}
                className={`search-input ${isDesktop ? '' : 'is-mobile'}`}
            />
            {/* <i /> */}

            <style jsx>{styles}</style>
        </>
    )
}
