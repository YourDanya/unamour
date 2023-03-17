/** @type {import('next').NextConfig} */
const ESLintPlugin = require('eslint-webpack-plugin')
const nextConfig = {
    reactStrictMode: false,
    experimental: {
        concurrentFeatures: true,
        appDir: true
    },
    i18n: {
        locales: ['ua', 'eng', 'ru'],
        defaultLocale: 'ua',
        localeDetection: false
    },
    pageExtensions: ['tsx', 'jsx'],
    images: {
        minimumCacheTTL: 600,
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '5000',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'unamour-server.onrender.com',
                port: '',
                pathname: '/**'
            }
        ],
    },
    typescript: {
        ignoreBuildErrors: true,
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
