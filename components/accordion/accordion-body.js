import styles from './styles'

export default function AccordionBody({ children }) {
    return (
        <>
            <div className="accordion-content">{children}</div>
            <style jsx>{styles}</style>
        </>
    )
}
