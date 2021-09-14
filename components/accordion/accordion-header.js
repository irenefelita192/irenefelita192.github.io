import styles from './styles'

export default function AccordionHeader({ id, children, onClick }) {
    const handleClick = () => {
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
            <label className="accordion-label" for={id}>
                {children}
            </label>

            <style jsx>{styles}</style>
        </>
    )
}
