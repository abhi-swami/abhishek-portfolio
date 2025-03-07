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
    ],
    domains: [
      // GitHub stat card domains
      'github-readme-stats.vercel.app',
      'github-readme-streak-stats.herokuapp.com',
      
      // GitHub contribution graph domains
      'ghchart.rshah.org',
      'github-contribution-graph.ez4o.com',
      'github-readme-activity-graph.vercel.app',
      
      // In case you need GitHub user content
      'avatars.githubusercontent.com',
      'raw.githubusercontent.com',
      'user-images.githubusercontent.com',
      
      // Additional domains that might be used
      'github.com',
      'github-profile-trophy.vercel.app',
      'github-profile-summary-cards.vercel.app'
    ],
  },
};

export default nextConfig;
