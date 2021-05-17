import styles from './styles'

export default function Sidebar({ activeId }) {
    return (
        <>
            <aside className="menu">
                <p className="menu-label">Company Profile</p>
                <ul className="menu-list">
                    <li>
                        <a>Overview</a>
                    </li>
                    <li>
                        <a>Milestone</a>
                    </li>
                    <li>
                        <a>Key Statistics</a>
                    </li>
                    <li>
                        <a>Financial Statement</a>
                    </li>
                </ul>
                <p className="menu-label">Leadership</p>
                <ul className="menu-list">
                    <li>
                        <a>Board of Commisioners</a>
                    </li>

                    <li>
                        <a>Board of Directors</a>
                    </li>
                </ul>
            </aside>
            <style jsx>{styles}</style>
        </>
    )
}
