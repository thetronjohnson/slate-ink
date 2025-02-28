// https://nuxt.com/docs/api/configuration/nuxt-config
import fs from 'fs'
import path from 'path'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/sitemap'
  ],
  site: {
    url: 'https://slate.ink'
  },
  sitemap: {
    urls: async () => {
      // Get the content directly from the filesystem
      const contentDir = path.join(process.cwd(), 'content/blog')
      const files = fs.readdirSync(contentDir)
      
      // Generate blog routes from filesystem
      const blogRoutes = files
        .filter(file => file.endsWith('.md'))
        .map(file => ({
          url: `/blog/${file.replace('.md', '')}`,
          lastmod: fs.statSync(path.join(contentDir, file)).mtime,
          changefreq: 'weekly',
          priority: 0.7
        }))

      // Static routes
      const staticRoutes = [
        {
          url: '/',
          changefreq: 'daily',
          priority: 1.0
        },
        {
          url: '/blog',
          changefreq: 'daily',
          priority: 0.8
        }
      ]

      return [...staticRoutes, ...blogRoutes]
    },
    hostname: 'https://slate.ink',
    gzip: true,
    defaults: {
      changefreq: 'daily',
      priority: 0.8,
      lastmod: new Date().toISOString()
    }
  },
  runtimeConfig: {
    public: {
      siteUrl: 'https://slate.ink',
      airtableApiKey: process.env.NUXT_AIRTABLE_API_KEY,
      airtableBaseId: process.env.NUXT_AIRTABLE_BASE_ID,
      airtableTableName: process.env.NUXT_AIRTABLE_TABLE_NAME
    }
  },
  nitro: {
    prerender: {
      failOnError: false,
      routes: ['/sitemap.xml']
    }
  },
  app: {
    head: {
      script: [
        {
          children: `(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "qgrdqsm7a5");`,
          type: 'text/javascript'
        }
      ]
    }
  }
})
