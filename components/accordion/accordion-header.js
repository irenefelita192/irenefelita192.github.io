import { useState } from 'react'
import styles from './styles'

export default function AccordionHeader({ id, children, onClick }) {
    const [isOpen, setIsOpen] = useState(false)
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
                className={`accordion-label ${isOpen ? 'is-open' : ''}`}
                htmlFor={id}
            >
                {children}
            </label>

            <style jsx>{styles}</style>
        </>
    )
}
