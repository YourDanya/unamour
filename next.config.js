/** @type {import('next').NextConfig} */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const nextConfig = {
    experimental: {
        appDir: true
    },
    reactStrictMode: false,
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
                hostname: 'api.unamour.com.ua',
                port: '',
                pathname: '/**'
            }
        ],
    },
    typescript: {
        ignoreBuildErrors: true,
    }
}

module.exports = nextConfig

