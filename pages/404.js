import Layout from 'components/layout'
import NotFound from '../screens/not-found'

export default function Custom404() {
    const title = 'Page Not Found'
    const description = 'Sorry, the page you were trying to view does not exist'
    return (
        <Layout title={title} description={description} headerWithBg={true}>
            <NotFound></NotFound>
            {/* <style jsx global>
                {jsxGlobalStyle}
            </style> */}
        </Layout>
    )
}
