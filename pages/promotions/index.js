import Layout from 'components/layout'
import { getAPI, getMockAPI } from 'services/common'
import PromotionScreen from 'screens/promotions'
import { getCookieLocale } from 'utils/global-util'

export async function getServerSideProps({ req, res, query }) {
    let langId = getCookieLocale(req, res) || '',
        locale = query?.locale ?? langId
    const [promos, categories, promoPage] = await Promise.all([
        // getAPI('vida-promos', locale),
        getMockAPI('promos'),
        getAPI('vida-categories', locale),
        getAPI('vida-promo-page', locale),
    ])

    return {
        props: { query, locale, promos, categories, promoPage },
    }
}

export default function Promotions({
    locale,
    promos,
    categories,
    promoPage,
    query,
}) {
    const promoDataMock = [
        {
            id: 1,
            category: { id: 1, name: 'Member Get Member' },
            title: 'Get Special Price Using VIDA Referral User ID',
            code: 'VIDA2022',
            imageUrl: 'https://via.placeholder.com/360x154.png',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 

            Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis.`,
            terms: 'Lorem ipsum dolor sit amet',
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
        },
        {
            id: 2,
            category: { id: 1, name: 'New User' },
            title: 'Duis aute irure dolor in reprehenderit',
            code: 'VIDA2022',
            imageUrl: 'https://via.placeholder.com/360x154.png',
            description: 'Lorem ipsum dolor sit amet',
            terms: 'Lorem ipsum dolor sit amet',
            startDate: 1617618148,
            endDate: 1617618148,
            rules: '{"id":12345,"name":"John Doe"}\n',
            slug: 'duis-aute',
            status: 0,
            meta: {
                isActive: true,
                createdAt: 1617618148,
                updatedAt: 1617618148,
                deletedAt: 1617618148,
            },
        },
        {
            id: 3,
            category: { id: 1, name: 'Spesial Offer' },
            title: 'Lorem ipsum',
            code: 'VIDA2022',
            imageUrl: 'https://via.placeholder.com/360x154.png',
            description: 'Lorem ipsum dolor sit amet',
            terms: 'Lorem ipsum dolor sit amet',
            startDate: 1617618148,
            endDate: 1617618148,
            rules: '{"id":12345,"name":"John Doe"}\n',
            slug: 'lipsum',
            status: 0,
            meta: {
                isActive: true,
                createdAt: 1617618148,
                updatedAt: 1617618148,
                deletedAt: 1617618148,
            },
        },
    ]
    const isWebView = query?.isWebView ?? false
    return (
        <Layout isWebView={isWebView} title={'Promo'} headerWithBg={true}>
            <PromotionScreen
                promos={promoDataMock}
                categories={categories}
                promoPage={promoPage}
                locale={locale}
            />
        </Layout>
    )
}
