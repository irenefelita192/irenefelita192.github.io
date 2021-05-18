const config = require('./config')
console.log('AAAAAA', config)
module.exports = {
    // assetPrefix: config.endpoints.assetPrefix,
    distDir: 'build',
    env: {
        nodeEnv: config.ENV,
        config: { ...config },
        packageVersion: process.env.npm_package_version,
    },
    generateBuildId: async () => {
        return process.env.npm_package_version
    },
    poweredByHeader: false,
    // i18n: {
    //   // These are all the locales you want to support in
    //   // your application
    //   locales: ['en', 'id'],
    //   defaultLocale: 'en'
    // },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Download-Options',
                        value: 'noopen',
                    },
                    {
                        key: 'Cache-Control',
                        value: 'no-store',
                    },
                ],
            },
        ]
    },
}
