/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/claudio_resume',
  trailingSlash: true,
}

module.exports = nextConfig
