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
        source: "/blogue",
        destination: "/blog"
      },
      {
        source: "/politique-de-confidentialite",
        destination: "/privacy-policy"
      }
    ];
  }
};

module.exports = nextConfig;
