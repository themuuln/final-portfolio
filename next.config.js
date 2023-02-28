/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;

const NextJSObfuscatorPlugin = require("nextjs-obfuscator");

module.exports = {
  webpack: (config, { dev }) => {
    // Only obfuscate classnames in production builds
    if (!dev) {
      // Add the NextJSObfuscatorPlugin to the list of plugins
      config.plugins.push(
        new NextJSObfuscatorPlugin({
          // Configure the plugin as desired
          // See https://github.com/javascript-obfuscator/webpack-obfuscator for available options
          rotateStringArray: true,
          controlFlowFlattening: true,
          controlFlowFlatteningThreshold: 0.75,
          numbersToExpressions: true,
          simplify: true,
          shuffleStringArray: true,
          splitStrings: true,
          splitStringsChunkLength: 10,
          stringArrayThreshold: 0.75,
          unicodeEscapeSequence: true,
        })
      );
    }

    return config;
  },
};
