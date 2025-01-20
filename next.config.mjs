/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.pixabay.com'], // Add allowed image domains here
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
