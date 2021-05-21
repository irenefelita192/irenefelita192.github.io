import Layout from '../components/layout'
import TnCScreen from '../screens/tnc'

// export async function getStaticProps({ locale }) {
//     console.log('locale', locale)
//     return {
//         props: {},
//     }
// }

export default function TermsConditions() {
    return (
        <Layout>
            <TnCScreen title="Terms and Conditions" />
        </Layout>
    )
}
