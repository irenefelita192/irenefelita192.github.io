import styles from './styles'

export default function AccordionContainer({ id, title, children }) {
    return (
        <>
            <div className="accordion">{children}</div>

            <style jsx>{styles}</style>
        </>
    )
}
