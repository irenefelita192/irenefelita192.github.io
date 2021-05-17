import Layout from '../../components/layout'
import CompanyScreen from '../../screens/overview'

// const sidebar = [{}]

export async function getStaticProps({ locale }) {
    console.log('locale', locale)
    return {
        props: {},
    }
}
export default function Company() {
    return (
        <Layout activeHeaderId="company">
            <CompanyScreen />
        </Layout>
    )
}
