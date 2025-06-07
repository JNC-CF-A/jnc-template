/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  pageExtensions: ['tsx'],
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.yml$/,
        type: 'json',
        use: 'yaml-loader',
      },
      {
        test: /\.svg$/,
        use: '@svgr/webpack',
      }
    );
    return config;
  },
};

module.exports = nextConfig;
