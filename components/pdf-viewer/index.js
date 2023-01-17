import { useState } from 'react'
// import default react-pdf entry
import { Document, Page, pdfjs } from 'react-pdf'
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
import workerSrc from '../../pdf-worker'
import styles from './styles'
import globalStyles from './global-styles'
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc

export default function PDFViewer({
    fileUrl,
    windowWidth,
    handleLoadProgress,
    handleLoadSuccess,
}) {
    const [file, setFile] = useState(fileUrl)
    const [numPages, setNumPages] = useState(null)
    console.log('file', file)
    // function onFileChange(event) {
    //     setFile(event.target.files[0])
    // }
    function onLoadProgress({ loaded, total }) {
        if (handleLoadProgress) {
            handleLoadProgress({ loaded, total })
        }
    }

    const onDocumentLoadSuccess = ({ numPages }) => {
        const pagesArray = Array.from(Array(numPages), (e, i) => i + 1)
        setNumPages(pagesArray)
        handleLoadSuccess(true)
    }

    return (
        <div>
            <Document
                loading=""
                file={file}
                // file={dataDummy}
                onLoadProgress={onLoadProgress}
                onLoadSuccess={onDocumentLoadSuccess}
                className="pdf-document"
                error={
                    <div className="pdf-error-message">
                        Sorry, an error occured. Please try again later.
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
            <style jsx>{styles}</style>
            <style jsx global>
                {globalStyles}
            </style>
        </div>
    )
}
