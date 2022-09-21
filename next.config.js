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
  },
  async redirects() {
    return [
      {
        source: "/fr/about",
        destination: "/fr/a-propos",
        locale: false,
        permanent: true
      },
      {
        source: "/fr/case-studies",
        destination: "/fr/etudes-de-cas",
        locale: false,
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
