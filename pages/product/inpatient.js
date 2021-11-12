import Layout from 'components/layout'
import ProductScreen from 'screens/product'

export default function Inpatient() {
    const title = 'Have Better Comfort While Recovering',
        description = 'Focus on your well-being and less worry for your family.'
    return (
        <Layout title={title} description={description} activeId="product">
            <ProductScreen />
        </Layout>
    )
}
