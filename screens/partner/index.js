import { useState } from 'react'
import { useAsyncEffect } from 'use-async-effect'
import { getHomeData } from '../../services/home'
import { getCookie } from '../../utils/global-util'
import Header from './header'
import Table from './table'

export default function Partner() {
    // const [homeData, setHomeData] = useState(null)
    // useAsyncEffect(async (isMounted) => {
    //     let langId
    //     if (window) {
    //         langId = getCookie('lang')
    //     }
    //     const homeDt = await getHomeData(langId)

    //     if (!isMounted()) return

    //     setHomeData(homeDt)
    // }, [])
    // if (!homeData) return <></>
    return (
        <div>
            <Header title={'Our Partners'} isDesktop={'true'} />

            <Table />
            {/* <div>search</div> */}
            {/* <Features data={homeData.features} /> */}
        </div>
    )
}
