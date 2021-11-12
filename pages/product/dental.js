import Layout from 'components/layout'
import ProductScreen from 'screens/product'

export default function Product() {
    const title = 'Great Smile for a Great Life',
        description = 'Better life starts from keeping your healthy smiles.'
    return (
        <Layout title={title} description={description} activeId="product">
            <ProductScreen />
        </Layout>
    )
}
