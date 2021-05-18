import Layout from '../components/layout'
import NotFound from '../screens/not-found'
// import jsxGlobalStyle from '../styles/global.style.js'

export default function Custom404() {
    const title = 'Page Not Found - TV'
    const description = 'Sorry, the page you were trying to view does not exist'
    return (
        <Layout title={title} description={description}>
            <NotFound></NotFound>
            {/* <style jsx global>
                {jsxGlobalStyle}
            </style> */}
        </Layout>
    )
}
