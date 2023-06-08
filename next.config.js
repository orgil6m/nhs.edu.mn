/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["default", "en"],
    defaultLocale: "default",
    localeDetection: false,
  },
  trailingSlash: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
