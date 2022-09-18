/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "en"
  },
  async rewrites() {
    return [
      {
        source: "/a-propos",
        destination: "/about"
      },
      {
        source: "/etudes-de-cas",
        destination: "/case-studies"
      }
    ];
  }
};

module.exports = nextConfig;
