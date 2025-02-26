const path = require("path");
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: [
      "media.dev.to",
      "avatars.githubusercontent.com",
      "github-readme-stats.vercel.app",
      "github-readme-streak-stats.herokuapp.com",
      "stardev.io",
      "github-profile-summary-cards.vercel.app",
      "github-profile-trophy.vercel.app",
    ],
    dangerouslyAllowSVG: true,
    unoptimized: true,
  },
  basePath: isProd ? "/portfolio" : "",
  assetPrefix: isProd ? "/portfolio/" : "",
  output: "export",
  trailingSlash: true, 
  reactStrictMode: true,
};