import { useState, useEffect } from 'react'

import styles from './styles'
const assetPrefix = process.env.config?.assetPrefix ?? '',
    assetDomain = process.env.config?.baseEndpoint ?? ''

export default function OtherProducts({ data, title, isDesktop }) {
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

    return (
        <>
            <div className="card-wrapper">
                <div>{title}</div>
                <div className="card-box-wrapper columns">
                    {data &&
                        data.map((dt) => (
                            <a
                                key={dt.id}
                                href={dt.href}
                                className="card-box"
                                style={{
                                    backgroundColor: dt.backgroundColor,
                                    color: dt.color,
                                }}
                            >
                                <i
                                    className="card-border"
                                    style={{
                                        borderColor: dt.borderColor,
                                    }}
                                ></i>
                                <div className="card-image">
                                    <img
                                        src={`${assetDomain}${
                                            dt?.icon?.url ?? ''
                                        }`}
                                    />
                                </div>
                                <div className="card-title">{dt.title}</div>
                                <div className="card-desc">
                                    {dt.description}
                                </div>
                            </a>
                        ))}
                </div>
            </div>
            <style jsx>{styles}</style>
        </>
    )
}
