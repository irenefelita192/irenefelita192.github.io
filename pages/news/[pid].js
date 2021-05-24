import Layout from '../../components/layout'
// import { useRouter } from 'next/router'
import { getNews } from '../../services/news'
import NewsDetailScreen from '../../screens/news-detail'

export async function getStaticPaths() {
    const newsData = await getNews()

    return {
        paths:
            newsData &&
            newsData.map((dt) => {
                return {
                    params: {
                        pid: `${dt.id}`,
                    },
                }
            }),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    return {
        props: { newsId: params?.pid ?? '' },
    }
}

export default function Career({ newsId }) {
    // const router = useRouter(),
    //     newsId = router.query?.pid ?? null

    return (
        <Layout>
            <NewsDetailScreen newsId={newsId} />
        </Layout>
    )
}
