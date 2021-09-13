import styles from './styles'

export default function AccordionHeader({ id, children }) {
    return (
        <>
            <input type="checkbox" className="dummy-checkbox" id={id} />
            <label className="accordion-label" for={id}>
                {children}
            </label>

            <style jsx>{styles}</style>
        </>
    )
}
