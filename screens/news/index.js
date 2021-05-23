import format from 'date-fns/format'
import { enUS, id } from 'date-fns/locale'
import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getNews } from '../../services/news'
import { getCookie } from '../../util/global-util'

import styles from './styles'

import Footer from '../../components/footer'

export default function NewsScreen() {
    const [newsData, setNewsData] = useState(null)
    const [newsHero, setNewsHero] = useState(null)

    useAsyncEffect(async (isMounted) => {
        let langId
        if (process.browser) {
            langId = getCookie('lang')
        }
        const newsDt = await getNews(langId ? langId : 'id'),
            newsHero = newsDt.find((dt) => {
                return dt.isHero === true
            })
        setNewsHero(newsHero)

        if (!isMounted()) return
        setNewsData(newsDt)
    }, [])
    const assetDomain = process.env.config?.endpoints?.asset ?? ''
    const locale = { en: enUS, id: id }
    return (
        <>
            {newsHero && (
                <div className="hero-wrapper">
                    {newsHero.heroImage && (
                        <img src={`${assetDomain}${newsHero.heroImage.url}`} />
                    )}
                    <div className="background-bottom" />
                    <div className="background-overlay" />
                    <div className="hero-content">
                        <div className="hero-title">
                            {newsHero?.title ?? ''}
                        </div>
                        {newsHero.publishDate && (
                            <div className="hero-date">
                                {format(
                                    new Date(newsHero.publishDate),
                                    'dd MMMM yyyy',
                                    { locale: locale[newsHero.locale] }
                                )}
                            </div>
                        )}

                        <a className="hero-link" href={`/news/${newsHero.id}`}>
                            Read More
                        </a>
                    </div>
                </div>
            )}

            <div className="wrapper">
                {newsData &&
                    newsData.map((dt) => {
                        const publishDate = format(
                            new Date(dt.publishDate),
                            'dd MMMM yyyy',
                            { locale: locale[dt.locale] }
                        )
                        return (
                            <a
                                key={dt.id}
                                className="grid-column"
                                href={`/news/${dt.id}`}
                            >
                                <img src={`${assetDomain}${dt.image.url}`} />
                                <div className="date">{publishDate}</div>
                                <div className="title">{dt.title}</div>
                            </a>
                        )
                    })}
            </div>

            <Footer />
            <style jsx>{styles}</style>
        </>
    )
}
