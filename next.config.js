/** @type {import('next').NextConfig} */
module.exports = {
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
