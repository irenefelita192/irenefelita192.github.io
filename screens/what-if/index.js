import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getWhatIfData } from 'services/what-if'
import { getCookie } from 'utils/global-util'

import Footer from 'components/footer'
import ParallaxDesktop from './desktop'
import ParallaxMobile from './mobile'
import GoodThing from './good-thing'

import Loader from 'components/loader'

export default function WhatIf() {
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

    if (!whatIfData) return <Loader />

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
}
