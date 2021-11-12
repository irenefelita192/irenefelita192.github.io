import Layout from 'components/layout'
import AppScreen from 'screens/app'

export default function App() {
    const title = 'Personalize Your Healthcare',
        description =
            'We make it easy to get, manage and pay for your healthcare. Our app puts all coverages at your fingertips.'
    return (
        <Layout title={title} description={description} activeId="app">
            <AppScreen />
        </Layout>
    )
}
