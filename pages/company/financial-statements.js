import Layout from '../../components/layout'
import FSScreen from '../../screens/company/financial-statements'

export default function FinancialStatements() {
    return (
        <Layout activeHeaderId="company" title="Financial Statements">
            <FSScreen />
        </Layout>
    )
}
