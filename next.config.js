/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GIPHY_KEY: process.env.GIPHY_KEY
    },
    typescript: {
        ignoreBuildErrors: true
    }
}

module.exports = nextConfig
