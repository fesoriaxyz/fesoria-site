import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/worlds/atlantis",
        destination: "/worlds/atlantia",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
