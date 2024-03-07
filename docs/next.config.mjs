import { createRequire } from 'module';
import { withContentlayer } from 'next-contentlayer';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  distDir: '.next',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  transpilePackages: [
    '@marigold/components',
    '@marigold/system',
    '@marigold/theme-preset',
  ],
  env: {
    version: pkg.version,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/introduction/getting-started',
        permanent: true,
      },
      {
        source: '/components',
        destination: '/components/provider',
        permanent: true,
      },
    ];
  },
};

export default withContentlayer(nextConfig);
