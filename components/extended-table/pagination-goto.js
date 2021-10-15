import { useState, useEffect } from 'react'
import styles from './styles'
export default function PaginationGoTo({ onClick }) {
    const [inputVal, setInputVal] = useState('')
    const handleGoTo = () => {
        if (onClick) {
            onClick(inputVal)
        }
    }

    const handleChange = (e) => {
        setInputVal(e.target.value)
    }
    return (
        <div className="pagination-goto">
            <div className="wrapper-title">Jump to page</div>
            <div className="wrapper-goto">
                <input
                    placeholder="page number"
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
                    Go
                </button>
            </div>
            <style jsx>{styles}</style>
        </div>
    )
}
