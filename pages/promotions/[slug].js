import { useEffect, useState } from 'react'
import Layout from 'components/layout'
import { getAPI, getMockAPI } from 'services/common'
import PromotionDetailScreen from 'screens/promotions/detail'

import { getCookieLocale } from 'utils/global-util'

export async function getServerSideProps({ req, res, query }) {
    let langId = getCookieLocale(req, res) || '',
        slug = query?.slug ?? '',
        locale = query?.locale ?? langId
    // const promoDetail = await getAPI(`vida-promos?slug=${slug}`, locale)
    const [promoDetail, promoPage] = await Promise.all([
        // getAPI(`vida-promos?slug=${slug}`, locale),
        getMockAPI('promos/1'),
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
    console.log('promoDetail', promoDetail)
    const desc = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
    \nCurabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.`
    const terms = `1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
2. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.  
3. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.   
4. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl.`
    const promoDetailMock = {
        id: 1,
        category: { id: 1, name: 'Member Get Member' },
        title: 'Get Special Price Using VIDA Referral User ID',
        code: 'VIDA2022',
        imageUrl: 'https://via.placeholder.com/360x154.png',
        description: desc,
        terms: terms,
        startDate: 1610618148,
        endDate: 1617618148,
        rules: '{"id":12345,"name":"John Doe"}\n',
        slug: 'lorem-ipsum',
        status: 0,
        meta: {
            isActive: true,
            createdAt: 1617618148,
            updatedAt: 1617618148,
            deletedAt: 1617618148,
        },
    }
    return (
        <Layout
            isWebView={isWebView}
            title={promoDetail?.title ?? ''}
            description={promoDetail?.highlight ?? ''}
            headerWithBg={true}
        >
            <PromotionDetailScreen
                promoDetail={promoDetailMock}
                locale={locale}
                textLang={textLang}
            />
        </Layout>
    )
}
