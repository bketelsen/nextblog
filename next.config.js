const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  env: {
    siteTitle: 'Brian Ketelsen',
    siteDescription: 'Next Tails Blog.',
    siteKeywords: 'nextjs, tailwindcss, contentful, blog',
    siteUrl: 'https://next-tails-blog.vercel.app/',
    siteImagePreviewUrl: '/images/main-img-preview.jpg',
    mainRoutes: ['/index', '/about', '/blog'], // for sitemap; blog posts are generated dynamically
    blogRoute: '/blog', // for sitemap
    recentBlogNum: 3, // no. of blogs to display in recent posts
    twitterHandle: '@bketelsen',
    twitterUrl: 'https://twitter.com/bketelsen',
    facebookUrl: 'https://facebook.com/bketelsen',
    instagramUrl: 'https://instagram.com/bketelsen',
    pinterestUrl: 'https://pinterest.com',
    youtubeUrl: 'https://youtube.com/bketelsen',
    twitchUrl: 'https://twitch.tv/bketelsen',
  },
})
