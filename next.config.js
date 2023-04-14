/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com','images.unsplash.com','cdn.shopify.com'],
  },
  compiler : {
    styledComponents: true
  }
};

module.exports = (nextConfig);
