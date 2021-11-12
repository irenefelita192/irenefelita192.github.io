import Layout from 'components/layout'
import ProductScreen from 'screens/product'

export default function Home() {
    const title = 'Have a Joyous New Chapter of Your Life',
        description = 'Achieve your dream to build a happy family.'
    return (
        <Layout title={title} description={description} activeId="product">
            <ProductScreen />
        </Layout>
    )
}
