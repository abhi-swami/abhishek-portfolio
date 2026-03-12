/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 👈 important for Cloudflare Pages
  reactStrictMode: true,

  images: {
    unoptimized: true, // 👈 required for static export
    qualities: [75,90,100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**github-readme-stats.vercel.app",
        pathname: "/*",
      },
      {
        protocol: "https",
        hostname: "**github-readme-streak-stats.herokuapp.com",
        pathname: "/*",
        search: "?*",
      },
      {
        protocol: "https",
        hostname: "github-readme-activity-graph.vercel.app",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;