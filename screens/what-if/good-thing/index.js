import { Fragment, useState, useEffect } from 'react'

import styles from './styles'

export default function ParallaxDesktop({ data }) {
    // useEffect(() => {}, [])

    return (
        <>
            <div className="bottom-section">
                <div className="gt-title">{data.goodThingTitle}</div>
                <div className="gt-desc">{data.goodThingDescription}</div>
                <div className="gt-link">
                    <a href={data.goodThingButtonLink}>
                        {data.goodThingButtonText}
                    </a>
                </div>
            </div>
            <style jsx>{styles}</style>
        </>
    )
}
