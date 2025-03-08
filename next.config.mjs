/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**github-readme-stats.vercel.app',
        port: '',
        pathname: '/*',
      },
      {
        protocol: 'https',
        hostname: '**github-readme-streak-stats.herokuapp.com',
        port: '',
        pathname: '/*',
        search: '?*',
      },
      {
        protocol: 'https',
        hostname: 'github-readme-activity-graph.vercel.app',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;