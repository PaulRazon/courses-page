import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Opcional: evita que el build falle por errores de ESLint
  },
};

export default nextConfig;
