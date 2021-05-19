import Layout from '../../components/layout'
import CompanyScreen from '../../screens/company/overview'

export default function Company() {
    return (
        <Layout activeHeaderId="company" title="Company">
            <CompanyScreen />
        </Layout>
    )
}
