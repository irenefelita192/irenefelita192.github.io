import React, { useState, useEffect, Suspense } from 'react'
import Loader from '../../components/loader'
// import HomeDesktop from './desktop'
// import HomeMobile from './mobile'

export default function HomeScreen() {
    const [isPortrait, setIsPortrait] = useState(null)

    useEffect(() => {
        if (process.browser) {
            if (window.innerWidth < window.innerHeight) {
                setIsPortrait(true)
            } else {
                setIsPortrait(false)
            }
        }
    }, [])

    if (isPortrait) {
        const HomeMobile = React.lazy(() => import('./mobile'))
        return (
            <Suspense fallback={<Loader />}>
                <HomeMobile />
            </Suspense>
        )
    } else if (!isPortrait && isPortrait != null) {
        const HomeDesktop = React.lazy(() => import('./desktop'))
        return (
            <Suspense fallback={<Loader />}>
                <HomeDesktop />
            </Suspense>
        )
    }
    return null
    // return <HomeDesktop />
}
