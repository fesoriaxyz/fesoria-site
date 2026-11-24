import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/worlds/:path*",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
