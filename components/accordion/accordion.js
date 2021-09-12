import styles from './styles'

export default function Accordion({ children }) {
    return (
        // <div className="collapsible">
        //     <div className="collapsible-header">
        //         <span>{title}</span>
        //         <i />
        //     </div>
        //     <div className="collapsible-body">{children}</div>
        //     <style jsx>{styles}</style>
        // </div>
        <div className="accordions">
            {children}
            <style jsx>{styles}</style>
        </div>
    )
}
