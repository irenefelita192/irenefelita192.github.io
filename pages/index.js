import Layout from '../components/layout'
import HomeScreen from '../screens/home'

export async function getStaticProps({ locale }) {
    console.log('locale', locale)
    return {
        props: {},
    }
}

export default function Home() {
    return (
        <Layout headerWithBg={false}>
            <HomeScreen />
        </Layout>
    )
}
