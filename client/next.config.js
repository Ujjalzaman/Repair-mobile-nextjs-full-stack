/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig


module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: '',
          pathname: '**',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '**',
        },
      ],
    },
  }

// res.cloudinary.com
// images.unsplash.com