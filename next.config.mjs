/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/kspss',
    assetPrefix: '/kspss/',
  }),
};

export default nextConfig;