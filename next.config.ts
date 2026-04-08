import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""};
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data:;
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-src 'self' https://www.google.com https://maps.google.com;
  frame-ancestors 'self' https://surgex.pt https://www.surgex.pt https://*.vercel.app;
  upgrade-insecure-requests;
`;

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 2678400, // 31 days — local images never change
    deviceSizes: [640, 828, 1080, 1920],
    imageSizes: [16, 32, 48, 64, 128, 256],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader
              .replace(/\n/g, "")
              .replace(/\s{2,}/g, " ")
              .trim(),
          },
          { key: "X-Frame-Options", value: "ALLOW-FROM https://surgex.pt" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
