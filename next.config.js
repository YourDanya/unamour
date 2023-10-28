/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    images: {
        minimumCacheTTL: 600,
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '5000',
                pathname: '/**'
            }
        ],
    },
    typescript: {
        ignoreBuildErrors: true,
    }
}

module.exports = nextConfig

