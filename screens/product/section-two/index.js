import { useState, useEffect } from 'react'

import styles from './styles'
const assetPrefix = process.env.config?.assetPrefix ?? '',
    assetDomain = process.env.config?.baseEndpoint ?? ''

// const data = {
//     id: '1',
//     highlightTitle:
//         'Have you heard about long term illness? Or know someone who is going through them?',
//     highlightDescription: '',
//     title: 'Long Journey',
//     description:
//         'Some families have to fight with painful illnesses such as cancer. To win over a prolonged battle, you’ve got to have enough ammunition.',
//     color: '#F2D051',
//     image: '/images/inpatient/hero-2.jpg',
//     imageWebp: '',
//     extraImage: '/images/inpatient/script.png',
// }
//description test rich text atau text biasa aja untuk yg case 41%maternity
export default function SectionTwo({ data, isDesktop }) {
    const [heroHeight, setHeroHeight] = useState(0)
    const [isWebpSupport, setIsWebpSupport] = useState(true)

    useEffect(() => {
        if (window) {
            setHeroHeight(window.innerHeight)
            if (window.Modernizr.webp) {
                setIsWebpSupport(true)
            } else {
                setIsWebpSupport(false)
            }
        }

        return () => {
            document.removeEventListener('click', () => {})
        }
    }, [])

    let heroImage = ''
    if (isDesktop) {
        if (!data.imageWebp || !isWebpSupport) {
            heroImage = `${assetDomain}${data?.image?.url ?? ''}`
        } else {
            heroImage = `${assetDomain}${data?.imageWebp?.url ?? ''}`
        }
    } else {
        if (!data.imageMobileWebp || !isWebpSupport) {
            heroImage = `${assetDomain}${data?.imageMobile?.url ?? ''}`
        } else {
            heroImage = `${assetDomain}${data?.imageMobileWebp?.url ?? ''}`
        }
    }
    return (
        <>
            <div
                className={`highlight-wrapper ${isDesktop ? '' : 'is-mobile'}`}
            >
                <div>{data.highlightTitle || ''}</div>
                {data.highlightDescription && (
                    <div className="highlight-desc">
                        {data.highlightDescription || ''}
                    </div>
                )}
            </div>
            <div className={`hero-wrapper ${isDesktop ? '' : 'is-mobile'}`}>
                <img src={heroImage} alt="" />
                <div
                    className={`hero-text ${
                        data.extraImage ? 'with-image' : ''
                    } ${data?.isLeftText && isDesktop ? 'left' : ''}`}
                >
                    <h2 style={{ color: data.color }}>{data?.title ?? ''}</h2>
                    <div>{data?.description ?? ''}</div>
                </div>
                {data.extraImage && (
                    <div className="extra-image">
                        <img src={`${assetDomain}${data.extraImage.url}`} />
                    </div>
                )}
            </div>

            <style jsx>{styles}</style>
        </>
    )
}
