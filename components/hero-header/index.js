import styles from './styles'

export default function Hero({ title }) {
    return (
        <>
            <div className="hero-wrapper">
                <img src="../images/company/Overview-Hero-Image.webp" />
                <div className="background-bottom" />
                <div className="background-overlay" />
                <span> {title}</span>
            </div>
            <style jsx>{styles}</style>
        </>
    )
}
