/** @type {import('next').NextConfig} */
const ESLintPlugin = require('eslint-webpack-plugin')
const nextConfig = {
  // reactStrictMode: true,
  experimental: {
    concurrentFeatures: true,
  },
  i18n: {
    locales: ['ua', 'eng', 'ru'],
    defaultLocale: 'ua',
    localeDetection: false
  },
  pageExtensions: ['tsx', 'jsx'],

  webpack: (config, { dev }) => {
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
