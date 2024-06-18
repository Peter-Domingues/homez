/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  async rewrites() {
    return [
      {
        source: "/propertydetails/:id",
        destination: "/propertydetails/:id",
        locale: false,
      },
    ];
  },
};

module.exports = {
  output: "export",
  nextConfig,
  env: {
    REACT_APP_REALTY_X_API_KEY: process.env.REACT_APP_REALTY_X_API_KEY,
    REACT_APP_REALTY_CLIENT_ID: process.env.REACT_APP_REALTY_CLIENT_ID,
    REACT_APP_REALTY_CLIENT_SECRET: process.env.REACT_APP_REALTY_CLIENT_SECRET,
  },
  images: {
    domains: ["dx41nk9nsacii.cloudfront.net"],
    unoptimized: true,
  },
};
