import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import Loader from 'components/loader'
import Header from './header'
import Footer from 'components/footer'
// import Table from './table'
// import TableMobile from './table-mobile'
const Table = dynamic(() => import('./table'), {
    ssr: false,
})
const TableMobile = dynamic(() => import('./table-mobile'), { ssr: false })

export default function Partner({ cmsData, userPosition, sessionToken }) {
    const [isDesktop, setIsDesktop] = useState(true)
    // const [partnerData, setPartnerData] = useState(null)
    // useAsyncEffect(async (isMounted) => {
    //     const urlParams = new URLSearchParams(window?.location?.search ?? ''),
    //         paramLocale = urlParams.get('locale')
    //     let langId
    //     if (window) {
    //         langId = getCookie('lang')
    //         if (window.innerWidth < window.innerHeight) {
    //             setIsDesktop(false)
    //         }
    //     }
    //     const partnerDt = await getPartnerCMS(paramLocale || langId)

    //     if (!isMounted()) return

    //     setPartnerData(partnerDt)
    // }, [])

    useEffect(() => {
        if (window) {
            if (window.innerWidth < window.innerHeight) {
                setIsDesktop(false)
            }
        }
        // console.log('cmsData', cmsData)
        // if (partnerData && partnerData.header) {
        //     if (typeof gtag !== 'undefined') {
        //         const gaId = process.env.config?.gaId ?? ''
        //         gtag('config', `${gaId}`, {
        //             page_title: `Vida | Partner ${
        //                 partnerData.header?.title ?? ''
        //             }`,
        //         })
        //     }
        // }
    }, [cmsData])
    if (!cmsData) return <Loader />
    return (
        <div>
            {cmsData.header && (
                <Header isDesktop={isDesktop} data={cmsData.header} />
            )}

            {isDesktop && (
                <Table
                    userPosition={userPosition}
                    columns={cmsData.columns}
                    pageSizes={cmsData.pageSizes}
                    searchOpt={cmsData.searchOptions}
                    textLang={cmsData.textLang}
                    sessionToken={sessionToken}
                />
            )}
            {!isDesktop && (
                <TableMobile
                    userPosition={userPosition}
                    columns={cmsData.columns}
                    pageSizes={cmsData.pageSizes}
                    searchOpt={cmsData.searchOptions}
                    textLang={cmsData.textLang}
                    sessionToken={sessionToken}
                />
            )}
            <Footer />
        </div>
    )
}
