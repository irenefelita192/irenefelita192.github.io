import { useState, useEffect } from 'react'
import styles from './styles'
export default function Search({ onSearch, placeholder }) {
    const [inputVal, setInputVal] = useState('')

    const handleChange = (e) => {
        setInputVal(e.target.value)
        if (onSearch) {
            onSearch(e.target.value)
        }
    }
    return (
        <div className="search-wrapper">
            <input
                placeholder={placeholder}
                onChange={(e) => {
                    handleChange(e)
                }}
                value={inputVal}
            />
            <i />

            <style jsx>{styles}</style>
        </div>
    )
}
