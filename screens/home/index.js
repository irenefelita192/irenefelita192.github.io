import React, { useState, useEffect, Suspense } from 'react'
import Loader from '../../components/loader'
import HomeDesktop from './desktop'
// import HomeMobile from './mobile'

export default function HomeScreen() {
    const [isPortrait, setIsPortrait] = useState(false)

    useEffect(() => {
        if (process.browser) {
            if (window.innerWidth < window.innerHeight) {
                setIsPortrait(true)
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
    }
    return <HomeDesktop />
}
