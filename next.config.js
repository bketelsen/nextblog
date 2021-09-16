const withPWA = require('next-pwa')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const { withGoogleFonts } = require('nextjs-google-fonts')

module.exports = withGoogleFonts(
  withPWA(
    withBundleAnalyzer({
      googleFonts: {
        fonts: [
          'https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500;600;700&display=optional',
        ],
      },
      images: {
        domains: ['res.cloudinary.com'],
      },
      pwa: {
        dest: 'public',
        disable: process.env.NODE_ENV === 'development',
      },
      reactStrictMode: true,
      pageExtensions: ['js', 'jsx', 'md', 'mdx'],
      eslint: {
        dirs: ['pages', 'components', 'lib', 'layouts', 'scripts'],
      },
      experimental: { esmExternals: true },
      webpack: (config, { dev, isServer }) => {
        config.module.rules.push({
          test: /\.(png|jpe?g|gif|mp4)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                publicPath: '/_next',
                name: 'static/media/[name].[hash].[ext]',
              },
            },
          ],
        })

        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        })
        if (!dev && !isServer) {
          // Replace React with Preact only in client production build
          Object.assign(config.resolve.alias, {
            react: 'preact/compat',
            'react-dom/test-utils': 'preact/test-utils',
            'react-dom': 'preact/compat',
          })
        }
        return config
      },
    })
  )
)
