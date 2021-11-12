import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useAsyncEffect } from 'use-async-effect'
import { getPartnerCMS } from 'services/partner'
import { getCookie } from 'utils/global-util'
import Loader from 'components/loader'
import Header from './header'
import Footer from 'components/footer'
// import Table from './table'
// import TableMobile from './table-mobile'

const Table = dynamic(() => import('./table'), {
    ssr: false,
})
const TableMobile = dynamic(() => import('./table-mobile'), { ssr: false })

export default function Partner() {
    const [isDesktop, setIsDesktop] = useState(true)
    const [partnerData, setPartnerData] = useState(null)
    useAsyncEffect(async (isMounted) => {
        const urlParams = new URLSearchParams(window?.location?.search ?? ''),
            paramLocale = urlParams.get('locale')
        let langId
        if (window) {
            langId = getCookie('lang')
            if (window.innerWidth < window.innerHeight) {
                setIsDesktop(false)
            }
        }
        const partnerDt = await getPartnerCMS(paramLocale || langId)

        if (!isMounted()) return

        setPartnerData(partnerDt)
    }, [])

    useEffect(() => {
        if (partnerData && partnerData.header) {
            if (typeof gtag !== 'undefined') {
                const gaId = process.env.config?.gaId ?? ''
                gtag('config', `${gaId}`, {
                    page_title: `Vida | Partner ${
                        partnerData.header?.title ?? ''
                    }`,
                })
            }
        }
    }, [partnerData])
    if (!partnerData) return <Loader />
    return (
        <div>
            {partnerData.header && (
                <Header isDesktop={isDesktop} data={partnerData.header} />
            )}

            {isDesktop && (
                <Table
                    columns={partnerData.columns}
                    pageSizes={partnerData.pageSizes}
                    searchOpt={partnerData.searchOptions}
                    textLang={partnerData.textLang}
                />
            )}
            {!isDesktop && (
                <TableMobile
                    columns={partnerData.columns}
                    pageSizes={partnerData.pageSizes}
                    searchOpt={partnerData.searchOptions}
                    textLang={partnerData.textLang}
                />
            )}
            <Footer />
        </div>
    )
}
