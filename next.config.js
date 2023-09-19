/** @type {import('next').NextConfig} */ 

const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXTAUTH_SECRET:"YOUR_KEY_HERE",
  },
};
module.exports = nextConfig