import { defineEventHandler } from 'h3'

export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  
  return `User-agent: *
Allow: /
Sitemap: ${config.public.siteUrl}/sitemap.xml`
}) 