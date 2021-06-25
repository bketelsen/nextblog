---
categories:
  - 'Development'
  - 'Infrastructure'
date: '2015-11-11'
cover:
  image: 'markus-spiske-iar-afB0QQw-unsplash.jpg' # image path/url
  alt: 'Windows' # alt text
  caption: 'https://unsplash.com/photos/iar-afB0QQw' # display caption under cover
  relative: true # when using page bundles set this to true
tags:
  - 'hugo'
  - 'caddy'
  - "let's encrypt"
title: "Caddy and Let's Encrypt"
summary: Caddy and Let's Encrypt
---

I spent all of 5 minutes configuring [Caddy](https://caddyserver.com) to automatically pull content from github, post-process it with [hugo](http://gohugo.io) and serve it up with fresh SSL/TLS certificates from Let's Encrypt. <!--more-->

When you think about it, that's pretty damned amazing. Caddy already made web serving easy. It powers everything I do now: gopheracademy.com, gophercon.com and a dozen more. Add hugo to the mix and you have a really powerful publishing platform that is fully automated with just a git push. I really love that Caddy polls my github repository and publishes new content. It's a zero-overhead proposition to publish a new post.

After configuring the Let's Encrypt integration, my esteem for Caddy leveled up to 11. I did almost nothing to enable it. Changed a flag in the command line to invoke Caddy, changed the URL in the Caddy configuration file from http to https. In the background, Caddy requested and installed the certificates for me, and will continue to renew them before they expire. SSL Everywhere is no longer a dream, it's real, it's here, and the tools couldn't be easier to use.
