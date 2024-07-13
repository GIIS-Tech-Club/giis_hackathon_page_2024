/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/vol',
        destination: 'https://docs.google.com/forms/d/e/1FAIpQLSc8YlUwFL1x1SHQlBDLvN3fRt6s4nV3rgz4j1CepBcfdTiU9g/viewform',
        permanent: true,
      },
      {
        source: '/volunteer',
        destination: 'https://docs.google.com/forms/d/e/1FAIpQLSc8YlUwFL1x1SHQlBDLvN3fRt6s4nV3rgz4j1CepBcfdTiU9g/viewform',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;
