import { Fragment, useState, useEffect, memo } from 'react'
import styles from './styles'
import ReactMarkdown from 'react-markdown'
import NotFound from 'screens/not-found'
import { format } from 'date-fns'
import { id, en } from 'date-fns/locale'
// import globalStyles from './global-styles'

import Footer from 'components/footer'
const assetDomain = process.env.config?.baseEndpoint ?? '',
    assetPrefix = process.env.config?.assetPrefix ?? ''

export default function PromotionDetailScreen({
    promoDetail,
    textLang,
    locale,
}) {
    if (promoDetail) {
        const periodStart = format(
                new Date(promoDetail?.periodStart ?? ''),
                'dd LLL',
                { locale: locale == 'id' ? id : en }
            ),
            periodEnd = format(
                new Date(promoDetail?.periodEnd ?? ''),
                'dd LLL yyyy',
                { locale: locale == 'id' ? id : en }
            )
        return (
            <>
                <div className="wrapper">
                    <div className={'promo-image'}>
                        <img
                            src={`${assetDomain}${
                                promoDetail?.coverImage?.url ?? ''
                            }`}
                            alt={promoDetail?.coverImage?.url ?? ''}
                        />
                    </div>
                    <h1>{promoDetail?.title ?? 'Promo'}</h1>
                    <div className="promo-detail">
                        <div>
                            {textLang
                                ? textLang['promo-period']
                                : 'Promo period'}
                            : {periodStart} - {periodEnd}
                        </div>
                        <div>
                            {textLang ? textLang['category'] : 'Category'}:{' '}
                            {promoDetail?.category?.title ?? ''}
                        </div>
                    </div>
                    <div className={'promo-content'}>
                        <ReactMarkdown>{promoDetail?.body ?? ''}</ReactMarkdown>
                    </div>
                </div>
                <Footer />
                <style jsx>{styles}</style>
                {/* <style jsx global>
                    {globalStyles}
                </style> */}
            </>
        )
    } else {
        return <NotFound />
    }
}
