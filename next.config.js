/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    DEBUG: process.env.DEBUG,
  },
  images: {
    domains: ["localhost", "0.0.0.0", "127.0.0.1"],
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
