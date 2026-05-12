/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  // Turbopack configuration for video files
  turbopack: {
    rules: {
      '*.mp4': {
        loaders: ['file-loader'],
        as: '*.js',
      },
      '*.webm': {
        loaders: ['file-loader'],
        as: '*.js',
      },
    },
  },
};

module.exports = nextConfig;
