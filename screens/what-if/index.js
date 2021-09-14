import React, { useState, useEffect } from 'react'
import ParallaxDesktop from './desktop'
import ParallaxMobile from './mobile'

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

    const [isPortrait, setIsPortrait] = useState(false)

    // useAsyncEffect(async (isMounted) => {
    //     const brc = await getBrochure()

    //     if (!isMounted()) return

    //     if (brc) {
    //         setBrochureData({
    //             status: 'success',
    //             data: brc,
    //         })
    //     } else {
    //         setBrochureData({
    //             status: 'error',
    //             data: null,
    //         })
    //     }

    //     if (process.browser) {
    //         setWindowWidth(window.innerWidth)
    //     }
    // }, [])

    // if (brochureData.status === 'loading') {
    //     return <Loader />
    // }

    useEffect(() => {
        if (process.browser) {
            if (window.innerWidth < window.innerHeight) {
                setIsPortrait(true)
            } else {
                setIsPortrait(false)
            }
        }

        //ga perlu sort id karena bisa diurutin by strapi
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
            {isPortrait && <ParallaxMobile data={questionsDummy} />}
            {!isPortrait && <ParallaxDesktop data={questionsDummy} />}
        </>
    )
    // return <HomeDesktop />
}
