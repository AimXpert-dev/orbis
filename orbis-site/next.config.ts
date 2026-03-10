import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/gestionale",
        destination: "https://gestionale.orbis-italia.it",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
