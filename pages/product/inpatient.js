import Layout from 'components/layout'
import InpatientScreen from 'screens/product/inpatient'

// export async function getStaticProps({ locale }) {
//     console.log('locale', locale)
//     return {
//         props: {},
//     }
// }

export default function Home() {
    return (
        <Layout>
            <InpatientScreen />
        </Layout>
    )
}
