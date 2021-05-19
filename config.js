require('dotenv').config()

const ENV = process.env.REACT_APP_ENV

const options = {
    development: {
        endpoints: {
            domain: 'https://stag.lippo.tv',
            asset: '/images',
            assetPrefix: '',
        },
    },
    staging: {
        endpoints: {
            domain: 'https://stag.lippo.tv',
            asset: '/images',
            assetPrefix:
                'https://cdn.stag.supersoccer.tv/lippo/assets/microsite',
        },
    },
    production: {
        endpoints: {
            domain: 'https://lippo.tv',
            asset: 'https://lippo01.koicdn.com/assets-global',
            assetPrefix: 'https://lippo01.koicdn.com/assets/microsite',
        },
    },
}

const config = options[ENV]

module.exports = {
    // Node.js app
    ENV,
    ...config,
}
