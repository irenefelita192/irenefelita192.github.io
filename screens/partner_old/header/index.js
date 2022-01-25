import React, { useState, useEffect } from 'react'
import Loader from 'components/loader'
import styles from './styles.js'

const assetDomain = process.env.config?.baseEndpoint ?? '',
    assetPrefix = process.env.config?.assetPrefix ?? ''

// const data = {
//     title: 'Our Partner',
//     color: '#017D76',
//     backgroundColor: '#D2F4F2',
//     shamrockImage: { url: '/images/partner/bg-hero.png' },
//     shamrockImageMobile: { url: '/images/partner/bg-hero-mobile.png' },
// }
export default function Header({ data, isDesktop }) {
    useEffect(() => {
        if (window) {
        }
    }, [])

    if (!data) return <Loader />
    return (
        <>
            <div
                className={`banner-section ${isDesktop ? '' : 'is-mobile'}`}
                style={{
                    color: data.color || '#017D76',
                    backgroundColor: data.backgroundColor || '#D2F4F2',
                    backgroundImage: `url(${assetDomain}${
                        isDesktop
                            ? data?.shamrockImage?.url ?? ''
                            : data?.shamrockImageMobile?.url ?? ''
                    })`,
                }}
            >
                <div>{data.title || ''}</div>
            </div>
            <style jsx>{styles}</style>
        </>
    )
}
