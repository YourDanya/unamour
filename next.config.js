/** @type {import('next').NextConfig} */
const ESLintPlugin = require('eslint-webpack-plugin')
const nextConfig = {
    reactStrictMode: false,
    experimental: {
        concurrentFeatures: true,
    },
    i18n: {
        locales: ['ua', 'eng', 'ru'],
        defaultLocale: 'ua',
        localeDetection: false
    },
    pageExtensions: ['tsx', 'jsx'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.naked-woman.org',
                port: '',
                pathname: '/**'
            }
        ]
    },
    webpack: (config, {dev}) => {
        // if (dev) config.plugins.push(
        //     new ESLintPlugin({
        //       extensions: ['ts', 'tsx'],
        //       failOnError: false
        //     })
        // )
        return config
    }
}

module.exports = nextConfig
