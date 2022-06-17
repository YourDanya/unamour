/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  experimental: {
    concurrentFeatures: true,
  },
  i18n: {
    locales: ['ua', 'en', 'ru'],
    defaultLocale: 'ua',
    localeDetection: false
  }
}

module.exports = nextConfig
