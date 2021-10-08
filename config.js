require('dotenv').config()

const ENV = process.env.REACT_APP_ENV || 'staging'

var endpointConfig = {
    baseEndpoint: process.env.BASE_API,
    assetPrefix: process.env.ASSET_PREFIX || '',
    csWaNumber: process.env.CS_WHATSAPP_NUMBER || '',
}
// const options = {
//     development: {
//         endpoints: {
//             api: 'http://localhost:1337',
//             asset: 'http://localhost:1337',
//             assetPrefix: '',
//         },
//     },
//     staging: {
//         endpoints: {
//             api: 'https://strapi-y5loyvex6a-et.a.run.app',
//             asset: 'https://strapi-y5loyvex6a-et.a.run.app',
//             assetPrefix: 'https://lippolife.github.io/web',
//         },
//     },
//     production: {
//         endpoints: {
//             api: 'https://strapi-y5loyvex6a-et.a.run.app',
//             asset: 'https://strapi-y5loyvex6a-et.a.run.app',
//             assetPrefix: '.',
//         },
//     },
// }

// const config = options[ENV]

module.exports = {
    // Node.js app
    ENV,
    ...endpointConfig,
}
