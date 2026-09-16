import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "primetek.academy",
        pathname: "/images/programs/**",
      },
    ],

    formats: ["image/avif", "image/webp"],
   
  },
};

export default nextConfig;


//quality:100 ,lourd 2MB
//quality:90,800kb,assez lourd
//quality:75, bon compris, 300kb, 200kb
//

