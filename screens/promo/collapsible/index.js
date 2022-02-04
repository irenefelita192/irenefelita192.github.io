import { useState } from 'react'
import AnimateHeight from 'react-animate-height'
import styles from './styles'

export default function Collapsible({ title, children, onClick }) {
    const id = 'collapsible-input'
    const [height, setHeight] = useState('auto')
    const [isChecked, setIsChecked] = useState(true)

    const handleChange = () => {
        if (isChecked) {
            setHeight(0)
        } else {
            setHeight('auto')
        }
        setIsChecked(!isChecked)
    }
    return (
        <div className="collapsible">
            <input
                id={id}
                type="checkbox"
                checked={isChecked}
                onChange={() => handleChange()}
                className="collapsible-dummy-checkbox"
            />
            <label className={`collapsible-label`} htmlFor={id}>
                {title}
            </label>
            <AnimateHeight
                id="collapsible-content"
                className="collapsible-content"
                duration={500}
                height={height}
            >
                {children}
            </AnimateHeight>

            <style jsx>{styles}</style>
        </div>
    )
}
