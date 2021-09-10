import React, { useState } from 'react'
import { Document, Page } from 'react-pdf'
import { useAsyncEffect } from 'use-async-effect'
import { getBrochure, getBlob } from '../../services/brochure'
import Loader from '../../components/loader'
import styles from './styles'
import globalStyles from './global-styles'
import fileDownload from 'js-file-download'

// ...

// handleDownload = (url, filename) => {
//   axios.get(url, {
//     responseType: 'blob',
//   })
//   .then((res) => {
//     fileDownload(res.data, filename)
//   })
// }

// ...

// <button onClick={() => {this.handleDownload('https://your-website.com/your-image.jpg', 'test-download.jpg')
// }}>Download Image</button>

/* for android webview */
export default function BrochureScreen() {
    const [numPages, setNumPages] = useState(null)
    const [pdfLoadSuccess, setPdfLoadSuccess] = useState(false)

    const [wHeight, setWHeight] = useState(0)
    const [brochureData, setBrochureData] = useState({
        status: 'loading',
        data: null,
    })

    useAsyncEffect(async (isMounted) => {
        const brc = await getBrochure()

        if (!isMounted()) return

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
        setPdfLoadSuccess(true)
    }

    const handleDownload = () => {
        // const blob = getBlob(brochureData.data.brochureLink)
        // // console.log('blob', blob)
        // fileDownload(blob, 'test.pdf')
    }

    const dataDummy = './Solusi Asuransi Kesehatan_v2.pdf'

    return (
        <div>
            {brochureData.status == 'success' && (
                <>
                    {pdfLoadSuccess && (
                        <div className="toolbar">
                            <a
                                className="download-link"
                                onClick={handleDownload}
                            >
                                <i />
                            </a>
                        </div>
                    )}
                    <Document
                        loading=""
                        file={dataDummy}
                        // file={brochureData.data.brochureLink}
                        onLoadSuccess={onDocumentLoadSuccess}
                        className="pdf-document"
                    >
                        {numPages &&
                            numPages.map((pageNumber) => (
                                <Page
                                    className="pdf-page"
                                    key={pageNumber}
                                    pageNumber={pageNumber}
                                />
                            ))}
                    </Document>
                </>
            )}
            <style jsx>{styles}</style>
            <style jsx global>
                {globalStyles}
            </style>
        </div>
    )
}
