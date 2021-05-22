import Layout from '../../components/layout'
import { useRouter } from 'next/router'
import NewsDetailScreen from '../../screens/news-detail'

export default function Career() {
    const router = useRouter(),
        newsId = router.query?.pid ?? null

    return (
        <Layout>
            <NewsDetailScreen newsId={newsId} />
        </Layout>
    )
}
