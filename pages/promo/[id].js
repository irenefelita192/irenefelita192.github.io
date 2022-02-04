import Layout from 'components/layout'
import { getAPI, getAPIBackend } from 'services/common'
import PromotionDetailScreen from 'screens/promo/detail'

import { getCookieLocale } from 'utils/global-util'

export async function getServerSideProps({ req, res, query }) {
    let langId = getCookieLocale(req, res) || '',
        id = query?.id ?? '',
        locale = query?.locale ?? langId
    // const promoDetail = await getAPI(`vida-promos?slug=${slug}`, locale)
    // console.log('ID PROMO', id)
    const [promoDetail, promoPage] = await Promise.all([
        // getAPI(`vida-promos?slug=${slug}`, locale),
        // getMockAPI(`promos/${id}`),
        getAPIBackend(`promos/${id}`),
        getAPI('vida-promo-page', locale),
    ])
    return {
        props: {
            query,
            locale,
            textLang: promoPage?.textLang ?? null,
            promoDetail,
            // promoDetail:
            //     promoDetail && promoDetail.length > 0 ? promoDetail[0] : null,
        },
    }
}

export default function PromoDetail({ promoDetail, textLang, locale, query }) {
    const isWebView = query?.isWebView ?? false
    return (
        <Layout
            isWebView={isWebView}
            title={promoDetail?.title ?? ''}
            description={promoDetail?.highlight ?? ''}
            headerWithBg={true}
        >
            <PromotionDetailScreen
                promoDetail={promoDetail}
                locale={locale}
                textLang={textLang}
            />
        </Layout>
    )
}
