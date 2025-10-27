import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/landing/home',
        permanent: false, // set to true if you want a permanent redirect
      },
    ];
  },
};

module.exports = nextConfig;
