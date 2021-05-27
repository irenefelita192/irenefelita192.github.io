import { useState, useEffect } from 'react'

import HomeDesktop from './desktop'
import HomeMobile from './mobile'

export default function HomeScreen() {
    const [isPortrait, setIsPortrait] = useState(false)

    useEffect(() => {
        if (process.browser) {
            if (window.innerWidth < window.innerHeight) {
                setIsPortrait(true)
            }
        }
    }, [])

    if (isPortrait) return <HomeMobile />
    return <HomeDesktop />
}
