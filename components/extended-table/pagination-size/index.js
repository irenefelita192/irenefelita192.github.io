import { useState, useEffect } from 'react'
import styles from './styles'

const assetPrefix = process.env.config?.assetPrefix ?? '',
    assetDomain = process.env.config?.baseEndpoint ?? ''

export default function SizePerPageButton({
    options,
    currSizePerPage,
    onSizePerPageChange,
    className,
    isDesktop,
    textLang,
}) {
    const [isPopUp, setIsPopUp] = useState(false)
    const [selected, setSelected] = useState(currSizePerPage)

    useEffect(() => {
        if (window) {
            document.addEventListener('click', (evt) => {
                const navbarLang = document.getElementById('paginationSizeDd')

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

    const handleClick = () => {
        setIsPopUp(!isPopUp)
    }

    const handleChooseSelection = (size) => {
        setSelected(size)

        onSizePerPageChange(size)
    }
    return (
        <div className={`wrapper-page-size ${isDesktop ? '' : 'is-mobile'}`}>
            {options && (
                <>
                    <div className="wrapper-title">
                        {textLang ? textLang['rowsPerPage'] : 'Rows per page'}
                    </div>
                    <div
                        id="paginationSizeDd"
                        className={`dropdown-page-size ${
                            isDesktop ? '' : 'is-mobile'
                        }`}
                        onClick={() => handleClick()}
                    >
                        <div
                            className={`dropdown ${isPopUp ? 'is-active' : ''}`}
                        >
                            <span className="selected-item">
                                {currSizePerPage}
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
                                            onClick={() =>
                                                handleChooseSelection(opt.page)
                                            }
                                            className={`dropdown-item `}
                                        >
                                            <span>{opt.text}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            <style jsx>{styles}</style>
        </div>
    )
}
