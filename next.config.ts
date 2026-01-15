import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // Se um dia usar next/image, isso garante que funcione no export estático:
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/desafio-de-front-end-seduh" : "",
  assetPrefix: isProd ? "/desafio-de-front-end-seduh" : "",
};

export default nextConfig;
