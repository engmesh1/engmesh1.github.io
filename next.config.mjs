/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages (static export)
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
