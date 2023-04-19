/** @type {import('next').NextConfig} */
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
                hostname: 'unamour-server.onrender.com',
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

