import Layout from 'components/layout'
import HomeScreen from 'screens/home'

import { getHomeData } from 'services/home'
import { getCookieLocale } from 'utils/global-util'
export async function getServerSideProps({ req, res }) {
    let langId = getCookieLocale(req, res) || ''
    const homeDt = await getHomeData(langId)
    return {
        props: {
            data: { ...homeDt },
        },
    }
}

export default function Home({ data }) {
    return (
        <Layout activeId="home">
            <HomeScreen homeData={data} />
        </Layout>
    )
}
