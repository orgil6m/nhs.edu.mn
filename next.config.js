/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["default", "en"],
    defaultLocale: "default",
    localeDetection: false,
  },
  trailingSlash: true,
  reactStrictMode: true,
  env: {
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
  },
};

module.exports = nextConfig;
