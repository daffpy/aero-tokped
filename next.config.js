/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains: ["static.wikia.nocookie.net",'external-content.duckduckgo.com','images.tokopedia.net']
  },
  eslint: {
    ignoreDuringBuilds: true,
},
}

module.exports = nextConfig
