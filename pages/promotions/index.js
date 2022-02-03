import Layout from 'components/layout'
import { getAPI, getAPIBackend } from 'services/common'
import PromotionScreen from 'screens/promotions'
import { getCookieLocale } from 'utils/global-util'

export async function getServerSideProps({ req, res, query }) {
    let langId = getCookieLocale(req, res) || '',
        locale = query?.locale ?? langId
    const [promos, promoPage] = await Promise.all([
        // getAPI('vida-promos', locale),
        // getMockAPI('promos'),
        // getAPI('vida-categories', locale),
        getAPIBackend('promos'),
        getAPI('vida-promo-page', locale),
    ])

    return {
        props: { query, locale, promos, promoPage },
    }
}

export default function Promotions({
    locale,
    promos,
    // categories,
    promoPage,
    query,
}) {
    const isWebView = query?.isWebView ?? false
    return (
        <Layout isWebView={isWebView} title={'Promo'} headerWithBg={true}>
            <PromotionScreen
                promos={promos}
                // categories={categories}
                promoPage={promoPage}
                locale={locale}
            />
        </Layout>
    )
}
