import { useState, useEffect } from 'react'
import HeroHeader from '../../components/hero-header'

export default function Landing({ location }) {
    const [isMobile, setIsMobile] = useState(false)

    return (
        <div>
            <HeroHeader />
            <div>content</div>
            <div>Footer</div>
        </div>
    )
}
