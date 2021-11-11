import Layout from 'components/layout'
import AboutScreen from 'screens/about'

// import { getAboutData } from 'services/about'
// import { getCookieLocale } from 'utils/global-util'
// export async function getServerSideProps({ req, res }) {
//     let langId = getCookieLocale(req, res) || ''
//     const aboutDt = await getAboutData(langId)
//     return {
//         props: {
//             data: { ...aboutDt },
//         },
//     }
// }

export default function About() {
    return (
        <Layout activeId="about">
            <AboutScreen />
        </Layout>
    )
}
