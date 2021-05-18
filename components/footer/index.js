import styles from './styles'
export default function Footer() {
    return (
        <>
            <footer>
                <div className="columns">
                    <div className="column">Logo</div>
                    <div className="column">Topic</div>
                    <div className="column">More</div>
                    <div className="column">OJK</div>
                </div>
                <div className="copyright"></div>
            </footer>
            <style jsx>{styles}</style>
        </>
    )
}
