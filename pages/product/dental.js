import Layout from 'components/layout'
import ProductScreen from 'screens/product'

import { getProductData } from 'services/product'
import { getCookieLocale } from 'utils/global-util'
export async function getServerSideProps({ req, res, resolvedUrl }) {
    let langId = getCookieLocale(req, res) || ''
    const productSlug = resolvedUrl?.replace('/product/', '') ?? '',
        productName =
            productSlug.lastIndexOf('/') == productSlug.length - 1
                ? productSlug.slice(0, productSlug.lastIndexOf('/'))
                : productSlug
    const prodDt = await getProductData(productName, langId)

    return {
        props: {
            data: { ...prodDt },
        },
    }
}

export default function Product({ data, productName }) {
    // console.log('productName', productName)
    // console.log('data', data)
    const { SEO } = data
    // const title = 'Great Smile for a Great Life',
    //     description = 'Better life starts from keeping your healthy smiles.'
    return (
        <Layout
            activeId="product"
            title={SEO?.title ?? ''}
            description={SEO?.description ?? ''}
            keywords={SEO?.keywords ?? ''}
        >
            <ProductScreen productData={data} />
        </Layout>
    )
}
