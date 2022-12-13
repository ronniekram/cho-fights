/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    PASSWORD_PROTECT: true,
  },
};

module.exports = nextConfig;
