import { useEffect, useState } from 'react'
import Layout from 'components/layout'
import { getAPI } from 'services/common'
import PromotionDetailScreen from 'screens/promotions/detail'

import { getCookieLocale } from 'utils/global-util'

export async function getServerSideProps({ req, res, query }) {
    let langId = getCookieLocale(req, res) || '',
        slug = query?.slug ?? '',
        locale = query?.locale ?? langId
    // const promoDetail = await getAPI(`vida-promos?slug=${slug}`, locale)
    const [promoDetail, promoPage] = await Promise.all([
        getAPI(`vida-promos?slug=${slug}`, locale),
        getAPI('vida-promo-page', locale),
    ])
    return {
        props: {
            query,
            locale,
            textLang: promoPage?.textLang ?? null,
            promoDetail:
                promoDetail && promoDetail.length > 0 ? promoDetail[0] : null,
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
