import Layout from 'components/layout'
import AppScreen from 'screens/app'

// import { getAppData } from 'services/app'
import { getAPI } from 'services/common'
import { getCookieLocale } from 'utils/global-util'
export async function getServerSideProps({ req, res }) {
    let langId = getCookieLocale(req, res) || ''

    const appDt = await getAPI('vida-app', langId)

    return {
        props: {
            data: { ...appDt },
        },
    }
}

export default function App({ data }) {
    const { SEO } = data
    // const title = 'Personalize Your Healthcare',
    //     description =
    //         'We make it easy to get, manage and pay for your healthcare. Our app puts all coverages at your fingertips.'

    return (
        <Layout
            activeId="app"
            title={SEO?.title ?? ''}
            description={SEO?.description ?? ''}
            keywords={SEO?.keywords ?? ''}
        >
            <AppScreen appData={data} />
        </Layout>
    )
}
