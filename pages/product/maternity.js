import Layout from 'components/layout'
import ProductScreen from 'screens/product'

export default function Home() {
    return (
        <Layout activeId="product">
            <ProductScreen />
        </Layout>
    )
}
