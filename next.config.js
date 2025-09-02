/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export the site as static HTML for GitHub Pages
  output: 'export',
  // Generate folders for each route (helps GitHub Pages routing)
  trailingSlash: true,
  images: {
    domains: [],
  },
}

module.exports = nextConfig
