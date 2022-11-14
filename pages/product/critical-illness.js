import Layout from 'components/layout'
import ProductScreen from 'screens/product'
import { getAPI } from 'services/common'
import { getCookieLocale } from 'utils/global-util'
export async function getServerSideProps({ req, res, resolvedUrl }) {
    let langId = getCookieLocale(req, res) || ''
    const productSlug = resolvedUrl?.replace('/product/', '') ?? '',
        productName =
            productSlug.lastIndexOf('/') == productSlug.length - 1
                ? productSlug.slice(0, productSlug.lastIndexOf('/'))
                : productSlug
    const prodDt = await getAPI(`vida-product-${productName}`, langId)

    return {
        props: {
            data: { ...prodDt },
        },
    }
}
export default function CriticalIllness({ data }) {
    const { SEO } = data
    // const title = 'Have a Joyous New Chapter of Your Life',
    //     description = 'Achieve your dream to build a happy family.'
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
