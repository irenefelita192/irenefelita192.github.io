import React, { useState, useEffect } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getWhatIfData } from 'services/what-if'
import { getCookie } from 'utils/global-util'

import Footer from 'components/footer'
import ParallaxDesktop from './desktop'
import ParallaxMobile from './mobile'
import GoodThing from './good-thing'

export default function WhatIf() {
    const questionsDummy = [
        {
            id: '1',
            questionText: '"What if my health condition changes?"',
            questionTextOne: '"What if my health',
            questionTextTwo: 'condition changes?"',
            bubbleImg: '../../images/parallax/bubble1.png',
            bubbleId: 'bubble1',
            portraitImg: '../../images/parallax/portrait-01.png',
            portraitId: 'portrait1',
        },
        {
            id: '2',
            questionText: `"It's common to get lung cancer. What if i already get one?"`,
            questionTextOne: `"It's common to get lung cancer.`,
            questionTextTwo: 'What if i already get one?"',
            bubbleImg: '../../images/parallax/bubble2.png',
            bubbleId: 'bubble2',
            portraitImg: '../../images/parallax/portrait-02.png',
            portraitId: 'portrait2',
        },
        {
            id: '3',
            questionText:
                '"I lost my sight at 30. What if the same thing happen to you?"',
            questionTextOne: `"I lost my sight at 30. What if the`,
            questionTextTwo: 'same thing happen to you?"',
            bubbleImg: '../../images/parallax/bubble3.png',
            bubbleId: 'bubble3',
            portraitImg: '../../images/parallax/portrait-03.png',
            portraitId: 'portrait3',
        },
        {
            id: '4',
            questionText: '"I wish I had insurance"',
            questionTextOne: `"I lost my sight at 30. What if the`,
            questionTextTwo: 'same thing happen to you?"',
            bubbleImg: '../../images/parallax/bubble1.png',
            bubbleId: 'bubble4',
            portraitImg: '../../images/parallax/portrait-01.png',
            portraitId: 'portrait4',
        },
    ]

    const [isMobile, setIsMobile] = useState(false)
    const [whatIfData, setWhatIfData] = useState(null)

    useAsyncEffect(async (isMounted) => {
        let langId
        if (process.browser) {
            langId = getCookie('lang')
            if (window.innerWidth <= 1024) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        }
        const whatIfDt = await getWhatIfData(langId ? langId : 'id')

        if (!isMounted()) return
        setWhatIfData(whatIfDt)
    }, [])

    // if (isPortrait) {
    //     const ParallaxMobile = React.lazy(() => import('./mobile'))
    //     return (
    //         <Suspense fallback={<Loader />}>
    //             <ParallaxMobile data={questionsDummy} />
    //         </Suspense>
    //     )
    // } else if (!isPortrait) {
    //     const ParallaxDesktop = React.lazy(() => import('./desktop'))
    //     return (
    //         <Suspense fallback={<Loader />}>
    //             <ParallaxDesktop data={questionsDummy} />
    //         </Suspense>
    //     )
    // }
    return (
        <>
            {whatIfData && whatIfData.questions && (
                <>
                    {isMobile && <ParallaxMobile data={whatIfData.questions} />}
                    {!isMobile && (
                        <ParallaxDesktop data={whatIfData.questions} />
                    )}
                </>
            )}
            {whatIfData && <GoodThing data={whatIfData} />}
            <Footer />
        </>
    )
    // return <HomeDesktop />
}
