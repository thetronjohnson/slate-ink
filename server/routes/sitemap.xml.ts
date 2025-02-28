import { serverQueryContent } from '#content/server'
import { SitemapStream, streamToPromise } from 'sitemap'
import { defineEventHandler } from 'h3'
import { Readable } from 'stream'

export default defineEventHandler(async (event) => {
  // Fetch all documents
  const docs = await serverQueryContent(event).find()
  const config = useRuntimeConfig()

  const sitemapRoutes = docs.map(doc => ({
    url: doc._path,
    lastmod: doc.updatedAt || doc.date,
    changefreq: 'weekly',
    priority: 0.7
  }))

  // Add static routes
  sitemapRoutes.push(
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
  )

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: config.public.siteUrl })
  
  return streamToPromise(Readable.from(sitemapRoutes).pipe(stream)).then((data) => {
    event.node.res.setHeader('Content-Type', 'application/xml')
    return data
  })
}) 