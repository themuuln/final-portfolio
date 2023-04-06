// next.config.js
const withTwin = require("./withTwin.js");

/**
 * @type {import('next').NextConfig}
 */
module.exports = withTwin({
  reactStrictMode: true, // < Recommended by Next
  experimental: {
    appDir: true,
  },
});
