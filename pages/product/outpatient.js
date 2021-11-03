import Layout from 'components/layout'
import ProductScreen from 'screens/product'

export default function Home() {
    const title = 'A Better Preparation for a Better Tomorrow',
        description =
            'You might not be able to control the future but you can control your choice to have the right protection.'
    return (
        <Layout title={title} description={description} activeId="product">
            <ProductScreen />
        </Layout>
    )
}
