const config = require('./config')

module.exports = {
    assetPrefix: config.assetPrefix,
    distDir: 'build',
    trailingSlash: true,
    env: {
        nodeEnv: config.ENV,
        config: { ...config },
        packageVersion: process.env.npm_package_version,
    },
    generateBuildId: async () => {
        return process.env.npm_package_version
    },
    poweredByHeader: false,

    async headers() {
        return [
            {
                source: '/((?!privacy|benefit-table|brochure\\W)\\S+)',
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
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                ],
            },
            {
                source: '/',
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
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                ],
            },
            {
                source: '/brochure',
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
            {
                source: '/benefit-table',
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
            {
                source: '/privacy',
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
