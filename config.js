require('dotenv').config()

const ENV = process.env.REACT_APP_ENV || 'staging'

const options = {
    development: {
        endpoints: {
            api: 'http://localhost:1337',
            asset: 'http://localhost:1337',
            assetPrefix: '',
        },
    },
    staging: {
        endpoints: {
            api: 'https://strapi-y5loyvex6a-et.a.run.app',
            asset: 'https://strapi-y5loyvex6a-et.a.run.app',
            assetPrefix: 'https://lla.haloida.dev',
        },
    },
    production: {
        endpoints: {
            api: 'https://strapi-y5loyvex6a-et.a.run.app',
            asset: 'https://strapi-y5loyvex6a-et.a.run.app',
            assetPrefix: '.',
        },
    },
}

const config = options[ENV]

module.exports = {
    // Node.js app
    ENV,
    ...config,
}
