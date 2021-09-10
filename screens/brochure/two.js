// import { useState } from 'react'
// import { useAsyncEffect } from 'use-async-effect'
// import { getBrochure } from '../../services/brochure'
// import Loader from '../../components/loader'

// export default function HomeScreen() {
//     const [wHeight, setWHeight] = useState(0)
//     const [brochureData, setBrochureData] = useState({
//         status: 'loading',
//         data: null,
//     })

//     useAsyncEffect(async (isMounted) => {
//         const brc = await getBrochure()

//         if (!isMounted()) return
//         console.log('brc', brc)
//         if (brc) {
//             setBrochureData({
//                 status: 'success',
//                 data: brc,
//             })
//         } else {
//             setBrochureData({
//                 status: 'error',
//                 data: null,
//             })
//         }

//         if (process.browser) {
//             setWHeight(window.innerHeight)
//         }
//     }, [])

//     if (brochureData.status === 'loading') {
//         return <Loader />
//     }
//     return (
//         <>
//             {brochureData.status == 'success' && (
//                 <div>
//                     <iframe
//                         src={brochureData.data.brochureLink}
//                         width="100%"
//                         height={wHeight}
//                     ></iframe>
//                 </div>
//             )}
//             {brochureData.status == 'error' && <div></div>}
//             <style global jsx>{`
//                 body {
//                     margin: 0;
//                     overflow: hidden;
//                 }
//             `}</style>
//         </>
//     )
// }

import React, { useState } from 'react'
import { Document, Page } from 'react-pdf'
import { useAsyncEffect } from 'use-async-effect'
import { getBrochure } from '../../services/brochure'
import Loader from '../../components/loader'

export default function BrochureScreen() {
    const [numPages, setNumPages] = useState(null)
    // const [pageNumber, setPageNumber] = useState(1)

    const [wHeight, setWHeight] = useState(0)
    const [brochureData, setBrochureData] = useState({
        status: 'loading',
        data: null,
    })

    useAsyncEffect(async (isMounted) => {
        const brc = await getBrochure()

        if (!isMounted()) return
        console.log('brc', brc)
        if (brc) {
            setBrochureData({
                status: 'success',
                data: brc,
            })
        } else {
            setBrochureData({
                status: 'error',
                data: null,
            })
        }

        if (process.browser) {
            setWHeight(window.innerHeight)
        }
    }, [])

    if (brochureData.status === 'loading') {
        return <Loader />
    }

    const onDocumentLoadSuccess = ({ numPages }) => {
        const pagesArray = Array.from(Array(numPages), (e, i) => i + 1)
        setNumPages(pagesArray)
    }

    const dataDummy = './Solusi Asuransi Kesehatan_v2.pdf'

    return (
        <div>
            {brochureData.status == 'success' && (
                <>
                    Iframe biasa
                    <iframe
                        src={brochureData.data.brochureLink}
                        width="100%"
                        height={wHeight}
                    ></iframe>
                </>
            )}
        </div>
    )
}
