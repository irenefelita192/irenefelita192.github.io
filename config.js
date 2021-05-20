require('dotenv').config()

const ENV = process.env.REACT_APP_ENV

const options = {
    development: {
        endpoints: {
            domain: 'https://stag.lippo.co.id',
            asset: '/images',
            assetPrefix: '',
        },
    },
    staging: {
        endpoints: {
            domain: 'https://stag.lippo.co.id',
            asset: '/images',
            assetPrefix: '',
        },
    },
    production: {
        endpoints: {
            domain: 'http://www.lippolife.co.id',
            asset: '',
            assetPrefix: '',
        },
    },
}

const config = options[ENV]

module.exports = {
    // Node.js app
    ENV,
    ...config,
}
