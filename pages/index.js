import Layout from 'components/layout'
import HomeScreen from 'screens/home'

import { getAPI } from 'services/common'
import { getCookieLocale } from 'utils/global-util'
export async function getServerSideProps({ req, res }) {
    let langId = getCookieLocale(req, res) || ''
    const homeDt = await getAPI('vida-home', langId)
    return {
        props: {
            data: { ...homeDt },
        },
    }
}

export default function Home({ data }) {
    const { SEO } = data
    return (
        <Layout
            activeId="home"
            title={SEO?.title ?? ''}
            description={SEO?.description ?? ''}
            keywords={SEO?.keywords ?? ''}
        >
            <HomeScreen homeData={data} />
        </Layout>
    )
}
