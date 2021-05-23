import ReactMarkdown from 'react-markdown'
import format from 'date-fns/format'
import { enUS, id } from 'date-fns/locale'
import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getNewsDetail, getMoreNews } from '../../services/news'
import { getCookie } from '../../util/global-util'
import styles from './styles'

import Footer from '../../components/footer'

export default function NewsDetailScreen({ newsId }) {
    const [newsData, setNewsData] = useState(null)
    const [newsMoreData, setNewsMoreData] = useState(null)

    useAsyncEffect(
        async (isMounted) => {
            if (newsId) {
                let langId
                if (process.browser) {
                    langId = getCookie('lang')
                }
                // if(is)
                const newsDt = await getNewsDetail(
                    langId ? langId : 'id',
                    newsId
                )
                const newsMoreDt = await getMoreNews(langId ? langId : 'id')

                if (!isMounted()) return
                setNewsData(newsDt)
                setNewsMoreData(newsMoreDt)
            }
        },
        [newsId]
    )
    const assetDomain = process.env.config?.endpoints?.asset ?? ''
    const locale = { en: enUS, id: id }
    return (
        <>
            <div className="wrapper">
                {' '}
                {newsData && (
                    <>
                        <div className="content-wrapper">
                            <div className="title">{newsData.title}</div>
                            {newsData.publishDate && (
                                <div className="date">
                                    {format(
                                        new Date(newsData.publishDate),
                                        'dd MMMM yyyy',
                                        { locale: locale[newsData.locale] }
                                    )}
                                </div>
                            )}
                            {newsData.image && (
                                <div className="image-wrapper">
                                    <img
                                        src={`${assetDomain}${newsData.image.url}`}
                                    />
                                </div>
                            )}
                            <div className="content">
                                <ReactMarkdown>
                                    {newsData.content}
                                </ReactMarkdown>
                            </div>
                        </div>
                        <div className="more-wrapper">
                            <div className="more-top-title">
                                {newsData.locale == 'en'
                                    ? 'More News'
                                    : 'Berita Lainnya'}
                            </div>
                            {newsMoreData &&
                                newsMoreData.map((moreDt) => {
                                    return (
                                        <div className="more-content">
                                            <div className="more-title">
                                                {moreDt.title}
                                            </div>
                                            <div className="more-date">
                                                {format(
                                                    new Date(
                                                        moreDt.publishDate
                                                    ),
                                                    'dd MMMM yyyy',
                                                    {
                                                        locale: locale[
                                                            newsData.locale
                                                        ],
                                                    }
                                                )}
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>
                    </>
                )}
            </div>

            <Footer />
            <style jsx>{styles}</style>
            <style jsx global>
                {`
                    .wrapper p {
                        padding-bottom: 20px;
                    }
                `}
            </style>
        </>
    )
}
