/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com','images.unsplash.com','cdn.shopify.com'],
  },
  compiler : {
    styledComponents: true
  },
  env: {
    FONTAWESOME_TOKEN: process.env.FONTAWESOME_TOKEN,
  },
};

module.exports = (nextConfig);
