import { useEffect } from 'react'
import Layout from '../../components/layout'
import CompanyScreen from '../../screens/company/overview'

export default function Company() {
    let url = ''

    useEffect(() => {
        if (process.browser) {
            url = window.location.href
            console.log('loca', window.location)
        }
        console.log('configg', process.env.config)
    }, [])

    return (
        <Layout activeHeaderId="company" title="Company" url={url}>
            <CompanyScreen />
        </Layout>
    )
}
