import { Fragment, useState, useEffect, memo } from 'react'
import Accordion from 'components/accordion'
import styles from './styles'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import { format } from 'date-fns'
import { id, en } from 'date-fns/locale'
// import globalStyles from './global-styles'

import Footer from 'components/footer'
const assetDomain = process.env.config?.baseEndpoint ?? '',
    assetPrefix = process.env.config?.assetPrefix ?? ''
const PromoSection = ({ promos, textLang, locale }) => {
    return (
        <>
            <div className="promo-section">
                {promos &&
                    promos.map((promo) => {
                        const periodStart = format(
                                new Date(promo?.startDate * 1000 ?? null),
                                'dd LLL',
                                { locale: locale == 'id' ? id : en }
                            ),
                            periodEnd = format(
                                new Date(promo?.endDate * 1000 ?? null),
                                'dd LLL yyyy',
                                { locale: locale == 'id' ? id : en }
                            )
                        return (
                            <a
                                key={promo.id}
                                className="promo-box"
                                href={`/promotions/${promo.slug}`}
                            >
                                <img
                                    src={`${promo?.imageUrl ?? ''}`}
                                    alt={promo?.title ?? ''}
                                />
                                <div className="promo-info">
                                    {/* <div>
                                        {periodStart} - {periodEnd}
                                    </div> */}
                                    <div className="promo-time">
                                        <i
                                            style={{
                                                backgroundImage: `url(
                                                    ${assetPrefix}/images/promo/time.svg
                                                )`,
                                            }}
                                        ></i>
                                        <span>
                                            {textLang
                                                ? textLang['end-period']
                                                : 'Ends on'}{' '}
                                            {periodEnd}
                                        </span>
                                    </div>
                                    <div
                                        className="promo-title"
                                        title={promo?.title ?? ''}
                                    >
                                        {promo?.title ?? ''}
                                    </div>
                                    <div className="promo-category">
                                        <p>Kategori</p>
                                        <b>{promo?.category?.name ?? ''}</b>
                                    </div>
                                    {/* <div
                                        className="promo-highlight"
                                        title={promo?.highlight ?? ''}
                                    >
                                        {promo?.highlight ?? ''}
                                    </div> */}
                                </div>
                            </a>
                        )
                    })}
            </div>
            <style jsx>{styles}</style>
        </>
    )
}

const FAQ = ({ faq, title }) => {
    return (
        <>
            <h2>{title || 'FAQ'}</h2>
            {faq.map((faqDt) => (
                <Accordion key={faqDt.id}>
                    <Accordion.Container>
                        <Accordion.Header id={faqDt.id}>
                            <div className="faq-header"> {faqDt.question}</div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="faq-content">{faqDt.answer}</div>
                        </Accordion.Body>
                    </Accordion.Container>
                </Accordion>
            ))}
            <style jsx>{styles}</style>
        </>
    )
}

const BannerSection = ({ banner, isWebpSupport, onClickItem }) => {
    return (
        <Carousel
            showThumbs={false}
            emulateTouch={true}
            showArrows={false}
            showStatus={false}
            swipeable={true}
            infiniteLoop={true}
            interval={5000}
            autoPlay={true}
            stopOnHover={false}
            onClickItem={onClickItem}
            // selectedItem={currentSlide}
            // onChange={updateCurrentSlide}
            // renderItem={customRenderItem}
        >
            {banner.map((data, index) => {
                let bannerImage = `${data?.imageUrl ?? ''}`,
                    altText = data?.title ?? '',
                    bgImage = ''

                // if (!data.imageWebp || !isWebpSupport) {
                //     bannerImage = `${assetDomain}${data?.image?.url ?? ''}`
                //     altText = data?.image?.alternativeText ?? ''
                // } else {
                //     bannerImage = `${assetDomain}${data?.imageWebp?.url ?? ''}`
                //     altText = data?.imageWebp?.alternativeText ?? ''
                // }

                return (
                    <a
                        className="banner-item"
                        key={data.id}
                        // style={{ backgroundImage: `url(${bgImage})` }}
                        // onClick={() => onClickItem(data.link)}
                    >
                        <img src={bannerImage} alt={altText} />
                    </a>
                )
            })}
        </Carousel>
    )
}

export default function PromotionScreen({
    promos,
    locale,
    categories,
    promoPage,
}) {
    const [isWebpSupport, setIsWebpSupport] = useState(true)
    const [isPortrait, setIsPortrait] = useState(false)
    useEffect(() => {
        if (window) {
            if (window.Modernizr.webp) {
                setIsWebpSupport(true)
            } else {
                setIsWebpSupport(false)
            }

            if (window.innerHeight > window.innerWidth) {
                setIsPortrait(true)
            }
        }
    }, [])

    const onClickItem = (currentIndex) => {
        const { banner } = promoPage
        if (banner) {
            const url = banner[currentIndex].link
            if (url) window.open(url)
        }
    }
    return (
        <>
            {/* {promoPage && promoPage.banner && promoPage.banner.length > 0 && (
                <BannerSection
                    banner={promoPage.banner}
                    isWebpSupport={isWebpSupport}
                    onClickItem={onClickItem}
                />
            )} */}
            {/* <BannerSection
                banner={promos}
                isWebpSupport={isWebpSupport}
                onClickItem={onClickItem}
            /> */}
            <div className="wrapper">
                <h1>{promoPage?.title ?? 'Promo'}</h1>
                <PromoSection
                    promos={promos}
                    textLang={promoPage?.textLang ?? null}
                    locale={locale}
                />
                {/* {promoPage && promoPage.faq && (
                    <FAQ faq={promoPage.faq} title={promoPage.faqTitle} />
                )} */}
            </div>
            <Footer />

            <style jsx>{styles}</style>
            <style jsx global>
                {`
                    .slider .banner-item {
                        cursor: pointer;
                        display: block;
                        width: 100%;
                        height: 100%;
                        background-position: center;
                    }

                    .carousel .slide img {
                        height: 100%;
                        // max-height: ${isPortrait ? '100px' : '200px'};
                        // object-fit: ${isPortrait ? 'cover' : 'contain'};
                    }
                `}
            </style>
        </>
    )
}
