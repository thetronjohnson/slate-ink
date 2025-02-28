<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black selection:bg-indigo-900/30 selection:text-indigo-300">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 backdrop-blur-xl bg-gray-900/80 border-b border-gray-800/50 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a href="/" class="flex items-center gap-3">
          <img src="/logo.png" alt="Slate" class="w-8 h-8 object-contain">
          <span class="text-xl font-black text-white">Slate</span>
        </a>
        <div class="flex items-center gap-4 sm:gap-8">
          <div class="flex items-center gap-4 sm:gap-6">
            <a href="/blog" class="text-indigo-400 font-medium">
              Blog
            </a>
            <a href="https://linkedin.com/in/kiranjohns" class="text-gray-400 hover:text-indigo-400" target="_blank" rel="noopener noreferrer">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://x.com/thetronjohnson" class="text-gray-400 hover:text-indigo-400" target="_blank" rel="noopener noreferrer">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Blog Header -->
    <header class="relative max-w-7xl mx-auto px-4 sm:px-8 pt-32 sm:pt-40 pb-16 sm:pb-20">
      <h1 class="text-4xl sm:text-6xl font-bold text-white mb-6 tracking-tight">
        Markdown Editor Blog
      </h1>
      <p class="text-xl text-gray-400 max-w-2xl">
        Expert tips, tutorials, and updates about Slate's distraction-free markdown editor for modern writers and developers.
      </p>
    </header>

    <!-- Blog Posts Grid -->
    <div class="max-w-7xl mx-auto px-4 sm:px-8 pb-20">
      <ContentList path="/blog" v-slot="{ list }">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-3 auto-rows-[200px]">
          <article 
            v-for="(post, index) in list" 
            :key="post._path"
            :class="[
              'p-4 rounded-xl bg-gradient-to-br from-gray-800/30 via-gray-900/20 to-black/30 backdrop-blur-sm border border-gray-700/30 hover:border-indigo-500/30 transition-all duration-200 premium-shadow',
              index === 0 ? 'md:col-span-2' : // First item spans 2 columns
              index === 1 ? 'md:col-span-3' : // Second item spans 3 columns
              'md:col-span-1' // All other items span 1 column
            ]"
          >
            <NuxtLink :to="post._path" class="block h-full flex flex-col">
              <h2 class="text-base font-bold text-white mb-2 hover:text-indigo-400 transition-colors line-clamp-2">
                {{ post.title }}
              </h2>
              <p v-if="post.description" class="text-xs text-gray-400 mb-2 line-clamp-2">
                {{ post.description }}
              </p>
              <div class="mt-auto pt-2 text-xs text-indigo-400">
                Read more →
              </div>
            </NuxtLink>
          </article>
        </div>
      </ContentList>
    </div>

    <!-- Final CTA -->
    <section class="bg-black">
      <div class="max-w-7xl mx-auto px-4 sm:px-8 py-20 sm:py-32 text-center">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl sm:text-5xl font-serif font-bold text-white mb-6 sm:mb-8 tracking-tight leading-tight">
            Ready to write<br/>
            <span class="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              without distractions?
            </span>
          </h2>
          <p class="text-xl text-gray-400 mb-12">
            Join the waitlist today and be among the first to experience Slate.
          </p>
          <a 
            href="/"
            class="inline-flex items-center justify-center bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-500 transition-colors"
          >
            <span class="text-base font-medium">Join the waitlist</span>
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useRuntimeConfig } from 'nuxt/app'

const config = useRuntimeConfig()

// ContentList will automatically fetch all markdown files in the blog directory

// Add meta tags and Poppins font link
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  title: 'Markdown Editor Blog - Slate | Modern Writing Tools',
  meta: [
    { name: 'description', content: "Discover tips, tutorials and insights about Slate's modern markdown editor. Learn how to enhance your writing workflow with our powerful markdown editing tools."},
    { property: 'og:title', content: 'Markdown Editor Blog - Slate | Modern Writing Tools' },
    { property: 'og:description', content: "Discover tips, tutorials and insights about Slate's modern markdown editor. Learn how to enhance your writing workflow with our powerful markdown editing tools."},
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: `${config.public.siteUrl}/blog` },
    { property: 'og:image', content: '/og-image.png' },
    { name: 'twitter:title', content: 'Markdown Editor Blog - Slate | Modern Writing Tools' },
    { name: 'twitter:description', content: "Discover tips, tutorials and insights about Slate's modern markdown editor. Learn how to enhance your writing workflow with our powerful markdown editing tools."},
    { name: 'twitter:image', content: '/og-image.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'keywords', content: 'markdown editor, markdown writing, writing tools, markdown tutorial, distraction-free editor' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Kiran Johns' },
    {
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            'name': 'Slate Blog',
            'description': 'Expert tips, tutorials, and updates about Slate\'s distraction-free markdown editor',
            'url': `${config.public.siteUrl}/blog`
          })
        }
      ]
    }
  ],
  link: [
    { 
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/logo.png'
    },
    { rel: 'canonical', href: `${config.public.siteUrl}/blog` }
  ]
})
</script>

<style scoped>
/* Inherit global styles from index.vue */
body {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(17, 24, 39);
  color: white;
}

/* Add premium shadows */
.premium-shadow {
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.4),
              0 10px 20px -5px rgba(99, 102, 241, 0.15);
}
</style>
