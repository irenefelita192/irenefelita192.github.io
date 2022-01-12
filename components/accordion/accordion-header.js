import { useState, useEffect } from 'react'
import styles from './styles'

export default function AccordionHeader({
    id,
    children,
    onClick,
    isArrowUpDown,
    defaultOpen = false,
}) {
    const [isOpen, setIsOpen] = useState(defaultOpen)
    useEffect(() => {
        if (defaultOpen) {
            document.getElementById(id).checked = true
        }
    }, [])

    const handleClick = () => {
        setIsOpen(document.getElementById(id).checked)
        if (onClick) {
            onClick(document.getElementById(id).checked)
        }
    }
    return (
        <>
            <input
                type="checkbox"
                className="dummy-checkbox"
                onClick={() => handleClick()}
                id={id}
            />
            <label
                className={`accordion-label ${isArrowUpDown ? 'up-down' : ''} ${
                    isOpen ? 'is-open' : ''
                }`}
                htmlFor={id}
            >
                {children}
            </label>

            <style jsx>{styles}</style>
        </>
    )
}
