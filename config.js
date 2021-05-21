require('dotenv').config()

const ENV = process.env.REACT_APP_ENV

const options = {
    development: {
        endpoints: {
            domain: '',
            api: 'http://localhost:1337',
            asset: 'http://localhost:1337',
            assetPrefix: '',
        },
    },
    staging: {
        endpoints: {
            domain: 'http://www.lippolife.co.id',
            api: 'https://strapi-y5loyvex6a-et.a.run.app',
            asset: 'https://strapi-y5loyvex6a-et.a.run.app',
            assetPrefix: '',
        },
    },
    production: {
        endpoints: {
            // domain: 'http://www.lippolife.co.id',
            domain: '',
            api: 'http://localhost:1337',
            asset: 'http://localhost:1337',
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
