const { withNextVideo } = require('next-video/process')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withNextVideo(nextConfig)
/** @type {import('next').NextConfig} */
const nextConfig1 = {
  eslint: {
    // Build хийх үед ESLint алдаа гарсан ч үл тоомсорлож үргэлжлүүлнэ
    ignoreDuringBuilds: true,
  },
  typescript: {
    // TypeScript-ийн алдаа гарсан ч үл тоомсорлож үргэлжлүүлнэ
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig