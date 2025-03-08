/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['tenor.com', 'media.tenor.com', 'c.tenor.com', 'media1.tenor.com'],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
}

export default nextConfig;