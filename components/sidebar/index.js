import { Fragment } from 'react'
import styles from './styles'
const sidebarData = [
    {
        id: '1',
        title: 'Company Profile',
        subMenu: [
            {
                id: 'overview',
                title: 'Overview',
                href: '/company',
            },
            {
                id: 'milestones',
                title: 'Milestones',
                href: '/company/milestones',
            },
            {
                id: 'key-statistics',
                title: 'Key Statistics',
                href: '/company/key-statistics',
            },
            {
                id: 'financial-statement',
                title: 'Financial Statement',
                href: '/company/financial-statement',
            },
            {
                id: 'clients',
                title: 'Clients',
                href: '/company/clients',
            },
        ],
    },
    {
        id: '2',
        title: 'Leadership',
        subMenu: [
            {
                id: 'boc',
                title: 'Board of Commisioners',
                href: '/company/boc',
            },
            {
                id: 'bod',
                title: 'Board of Directors',
                href: '/company/bod',
            },
        ],
    },
]
export default function Sidebar({ activeId }) {
    return (
        <>
            <aside className="menu">
                {sidebarData &&
                    sidebarData.map((dt) => (
                        <Fragment key={dt.id}>
                            <p className="menu-label">{dt.title}</p>
                            <ul className="menu-list">
                                {dt.subMenu.map((subMenu) => (
                                    <li
                                        key={subMenu.id}
                                        className={
                                            activeId == subMenu.id
                                                ? 'is-active'
                                                : ''
                                        }
                                    >
                                        <a href={subMenu.href}>
                                            {subMenu.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </Fragment>
                    ))}
            </aside>
            <style jsx>{styles}</style>
        </>
    )
}
