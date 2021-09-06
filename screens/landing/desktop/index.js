import { Fragment, useState, useEffect } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { CSSTransition } from 'react-transition-group'

import { getHero, getStats } from '../../../services/home'
import { getFooter } from '../../../services/common'
import { getCookie } from '../../../util/global-util'

import Loader from '../../../components/loader'

import styles from './styles'
import globalStyles from './global-styles'

export default function HomeScreen() {
    const [isWebp, setIsWebp] = useState(true)

    const [hovHeroId, setHovHeroId] = useState(0)
    const [heroData, setHeroData] = useState(null)
    const [homeData, setHomeData] = useState(null)
    const [footerData, setFooterData] = useState(null)

    useAsyncEffect(async (isMounted) => {
        // let langId
        // if (process.browser) {
        //     langId = getCookie('lang')
        // }
        // const hero = await getHero(langId ? langId : 'id')
        // const home = await getStats(langId ? langId : 'id')
        // const footerDt = await getFooter(langId ? langId : 'id')
        // if (!isMounted()) return
        // setHeroData(hero)
        // setHomeData(home)
        // setFooterData(footerDt)
    }, [])

    useEffect(() => {
        console.log('KE SNI?')
        if (process.browser) {
            if (window.Modernizr.webp) {
                setIsWebp(true)
            } else {
                aaa
                setIsWebp(false)
            }
        }
    }, [])

    // const onMouseEnter = (id) => {
    //     const selData = heroData.find((dt) => {
    //         return dt.heroID === id
    //     })
    //     const selId = selData && selData.heroID

    //     setHovHeroId(selId)
    // }

    // const onMouseLeave = () => {
    //     setHovHeroId(0)
    // }

    // const assetDomain = process.env.config?.baseEndpoint ?? ''
    // let defaultImgSrc = null,
    //     heroTitle = ''
    // if (heroData && heroData.length > 0) {
    //     defaultImgSrc = isWebp
    //         ? `${assetDomain}${heroData[0]?.heroImgWebp?.url ?? ''}`
    //         : `${assetDomain}${heroData[0]?.heroImg?.ur ?? ''}`
    //     // imgSrc = isWebp
    //     //     ? `${assetDomain}${heroData[hovHeroId]?.heroImgWebp?.url ?? ''}`
    //     //     : `${assetDomain}${heroData[hovHeroId]?.heroImg?.url ?? ''}`

    //     heroTitle = heroData[hovHeroId]?.heroTitle ?? ''
    // }

    // if (!homeData) {a
    //     return <Loader />
    // }

    const navigateAway = () => {
        try {
            document.location =
                'intent://mola.tv/watch?v=vd75881280#Intent;scheme=molaapp;end'
            document.location = 'molaapp://mola.tv/watch?v=vd75881280'
        } catch (e) {
            console.log('deeplink failed watch?v=vd75881280')
        } finally {
        }
    }

    return (
        <>
            <div onClick={() => navigateAway()}>Get Price</div>
        </>
    )
}
