import { Fragment, useState, useEffect, memo } from 'react'
import styles from './styles'
import Accordion from 'components/accordion'
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
        useEffect(() => {
            if (window.innerWidth > 768)
                window.addEventListener('scroll', handleScroll)
            const infoEl = document.getElementById('info-section'),
                promoDetailEl = document.getElementById('promo-detail')

            if (infoEl) {
                const infoWidth = infoEl.offsetWidth
                if (promoDetailEl) {
                    promoDetailEl.style.width = `${infoWidth}px`
                    promoDetailEl.style.opacity = '1'
                }
            }

            return () => {
                document.removeEventListener('click', () => {})
            }
        }, [])
        let lastScrollTop = 0
        const handleScroll = (e) => {
            let scrollTop = window.pageYOffset,
                isScrollDown = true

            if (scrollTop > lastScrollTop) {
                // downscroll code
                isScrollDown = true
            } else {
                // upscroll code
                isScrollDown = false
            }

            const promoDetailEl = document.getElementById('promo-detail'),
                infoEl = document.getElementById('info-section'),
                mainEl = document.getElementById('main-section')

            const promoDetailHeight = promoDetailEl?.offsetHeight ?? 0,
                promoDetailTopPos = promoDetailEl?.offsetTop ?? 0,
                promoDetailBottomPos =
                    scrollTop + promoDetailHeight + promoDetailTopPos,
                infoTopPos = infoEl?.offsetTop ?? 0,
                mainHeight = mainEl?.offsetHeight ?? 0,
                mainTopPos = mainEl?.offsetTop ?? 0

            const mainBottomPos = mainHeight + mainTopPos
            if (
                scrollTop + 80 + 30 <= promoDetailTopPos + infoTopPos &&
                !isScrollDown
            ) {
                //sticky when scroll up
                promoDetailEl.classList.remove('not-sticky')
            } else if (promoDetailBottomPos >= mainBottomPos) {
                //stop sticky at bottom
                promoDetailEl.classList.add('not-sticky')
            } else {
                promoDetailEl.classList.remove('not-sticky')
            }

            lastScrollTop = scrollTop
        }

        const periodStart = format(
                new Date(promoDetail?.startDate * 1000 ?? null),
                'dd LLL',
                { locale: locale == 'id' ? id : en }
            ),
            periodEnd = format(
                new Date(promoDetail?.endDate * 1000 ?? null),
                'dd LLL yyyy',
                { locale: locale == 'id' ? id : en }
            )
        return (
            <>
                <div className="wrapper">
                    <div className="main-section" id="main-section">
                        {promoDetail && promoDetail.imageUrl && (
                            <div className={'promo-image'}>
                                <img
                                    src={promoDetail?.imageUrl ?? ''}
                                    alt={promoDetail?.title ?? ''}
                                />
                            </div>
                        )}
                        <h1>{promoDetail?.title ?? 'Promo'}</h1>

                        <div className={'promo-desc promo-content'}>
                            <ReactMarkdown>
                                {promoDetail?.description ?? ''}
                            </ReactMarkdown>
                        </div>
                        <div className="separator"></div>
                        <div className="promo-detail-mobile">
                            <div className="promo-detail-box-mobile">
                                <div>
                                    {/* {textLang
                                    ? textLang['promo-period']
                                    : 'Promo period'} */}
                                    <p>Periode Promo</p>
                                    <p>Kategori</p>
                                    <p>Kode Promo</p>
                                </div>
                                <div>
                                    {/* {textLang ? textLang['category'] : 'Category'}:{' '} */}

                                    <p>
                                        <b>
                                            {periodStart} - {periodEnd}
                                        </b>
                                    </p>
                                    <p>
                                        <b>
                                            {promoDetail?.category?.name ?? ''}
                                        </b>
                                    </p>
                                    <p>
                                        <b> {promoDetail?.code ?? ''}</b>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={'promo-terms promo-content'}>
                            <Accordion>
                                <Accordion.Container>
                                    <Accordion.Header
                                        id={'terms'}
                                        isArrowUpDown
                                        defaultOpen={true}
                                    >
                                        <h2>Syarat dan Ketentuan</h2>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ReactMarkdown>
                                            {promoDetail?.terms ?? ''}
                                        </ReactMarkdown>
                                    </Accordion.Body>
                                </Accordion.Container>
                            </Accordion>
                        </div>
                    </div>
                    <div className="info-section" id="info-section">
                        <div className="promo-detail" id="promo-detail">
                            <div>Info Promo</div>
                            <div className="promo-box">
                                <div>
                                    {/* {textLang
                                        ? textLang['promo-period']
                                        : 'Promo period'} */}
                                    <p>Periode Promo</p>
                                    <b>
                                        {periodStart} - {periodEnd}
                                    </b>
                                </div>
                                <div>
                                    {/* {textLang ? textLang['category'] : 'Category'}:{' '} */}
                                    <p>Kategori</p>
                                    <b>{promoDetail?.category?.name ?? ''}</b>
                                </div>
                            </div>
                            <div>
                                <p>Kode Promo</p>
                                <b>{promoDetail?.code ?? ''}</b>
                            </div>
                        </div>
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
