import { useState, useEffect } from 'react'
import { Document, Page } from 'react-pdf'
import { useAsyncEffect } from 'use-async-effect'
import { getBrochure, getBlob } from 'services/brochure'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import Loader from 'components/loader'
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
    const [progressPercent, setProgressPercent] = useState(0)

    const [windowWidth, setWindowWidth] = useState(0)
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
            setWindowWidth(window.innerWidth)
        }
    }, [])

    useEffect(() => {
        if (brochureData && brochureData.data) {
            if (typeof gtag !== 'undefined') {
                const gaId = process.env.config?.gaId ?? ''
                gtag('config', `${gaId}`, {
                    page_title: `Vida | Brochure ${
                        brochureData.data?.brochureTitle ?? ''
                    }`,
                })
            }
        }
    }, [brochureData])

    if (brochureData.status === 'loading') {
        return <Loader />
    }

    const onDocumentLoadSuccess = ({ numPages }) => {
        const pagesArray = Array.from(Array(numPages), (e, i) => i + 1)
        setNumPages(pagesArray)
        setPdfLoadSuccess(true)
    }

    const handleDownload = async () => {
        // const blob = await getBlob(brochureData.data.brochureLink)
        // if (blob) {
        // fileDownload(blob, `${brochureData.data.brochureTitle}.pdf`)
        // }

        if (typeof JavascriptChannel !== 'undefined') {
            JavascriptChannel.postMessage(
                `downloadbrochure_${brochureData.data.brochureLink}`
            )
        } else {
            const blob = await getBlob(brochureData.data.brochureLink)

            if (blob) {
                fileDownload(blob, `${brochureData.data.brochureTitle}.pdf`)
            }
        }
    }

    const handleLoadProgress = ({ loaded, total }) => {
        if (loaded <= total) setProgressPercent((loaded / total) * 100)
    }
    // const dataDummy = 'Solusi Asuransi Kesehatan_v2.pdf'
    return (
        <div>
            {brochureData.status == 'success' && (
                <>
                    {progressPercent !== 100 && pdfLoadSuccess && (
                        <div className="wrapper">
                            <div className="progress-bar">
                                <span className="progress-bar-text">
                                    {Math.round(progressPercent)}%
                                </span>
                                <span
                                    className="progress-bar-fill"
                                    style={{ width: `${progressPercent}%` }}
                                ></span>
                            </div>
                        </div>
                    )}

                    <>
                        {progressPercent == 100 && (
                            <div className="toolbar">
                                <a
                                    className="download-link"
                                    onClick={handleDownload}
                                >
                                    <i />
                                </a>
                            </div>
                        )}

                        <TransformWrapper
                            initialScale={1}
                            initialPositionX={0}
                            initialPositionY={0}
                        >
                            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                                <>
                                    <TransformComponent>
                                        <Document
                                            loading=""
                                            file={
                                                brochureData.data.brochureLink
                                            }
                                            // file={dataDummy}
                                            onLoadProgress={handleLoadProgress}
                                            onLoadSuccess={
                                                onDocumentLoadSuccess
                                            }
                                            className="pdf-document"
                                            error={
                                                <div className="pdf-error-message">
                                                    Sorry, an error occured.
                                                    Please try again later.
                                                </div>
                                            }
                                        >
                                            {numPages &&
                                                numPages.map((pageNumber) => (
                                                    <Page
                                                        width={windowWidth}
                                                        className="pdf-page"
                                                        key={pageNumber}
                                                        pageNumber={pageNumber}
                                                    />
                                                ))}
                                        </Document>
                                    </TransformComponent>
                                </>
                            )}
                        </TransformWrapper>
                    </>
                </>
            )}
            <style jsx>{styles}</style>
            <style jsx global>
                {globalStyles}
            </style>
        </div>
    )
}
