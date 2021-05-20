import { useEffect } from 'react'
import Layout from '../../components/layout'
import CompanyScreen from '../../screens/company/overview'

export default function Company() {
    let url = ''

    useEffect(() => {
        if (process.browser) {
            url = window.location.href
        }
    }, [])

    return (
        <Layout activeHeaderId="company" title="Company" url={url}>
            <CompanyScreen />
        </Layout>
    )
}
