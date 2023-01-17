if (process.env.nodeEnv === 'production') {
    // use minified verion for production
    module.exports = require('pdfjs-dist/build/pdf.worker.min.js')
} else {
    module.exports = require('pdfjs-dist/build/pdf.worker.js')
}
