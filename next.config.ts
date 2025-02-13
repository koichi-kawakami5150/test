import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// next.config.js
module.exports = {
  images: {
    domains: ['lh3.googleusercontent.com'], // ここに許可するドメインを追加
  },
};


export default nextConfig;
