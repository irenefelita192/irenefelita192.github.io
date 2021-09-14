import { useAsyncEffect } from 'use-async-effect'
import { getBrochure } from '../../services/brochure'

/* for ios webview */
export default function BrochureScreen() {
    useAsyncEffect(async (isMounted) => {
        const brc = await getBrochure()

        if (!isMounted()) return

        if (brc) {
            window.location.href = brc.brochureLink
        }
    }, [])

    return <></>
}
