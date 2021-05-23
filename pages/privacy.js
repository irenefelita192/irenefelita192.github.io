import Layout from '../components/layout'
import PrivacyScreen from '../screens/privacy'

// export async function getStaticProps({ locale }) {
//     console.log('locale', locale)
//     return {
//         props: {},
//     }
// }

export default function Privacy() {
    return (
        <Layout>
            <PrivacyScreen title="Privacy Policy" />
        </Layout>
    )
}
