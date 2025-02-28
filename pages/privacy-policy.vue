<template>
  <div class="min-h-screen bg-gray-900 selection:bg-indigo-900/30 selection:text-indigo-300 font-poppins">
    <!-- Enhanced Navigation -->
    <nav class="fixed top-0 left-0 right-0 backdrop-blur-xl bg-gray-900/80 border-b border-gray-800/50 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a href="/" class="flex items-center gap-3">
          <img src="/logo.png" alt="Slate" class="w-8 h-8 object-contain">
          <span class="text-xl font-bold text-white">Slate</span>
        </a>
        <div class="flex items-center gap-4 sm:gap-8">
          <div class="flex items-center gap-4 sm:gap-6">
            <a href="/blog" class="text-gray-400 hover:text-indigo-400 font-medium">
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

    <!-- Privacy Policy Content -->
    <div class="max-w-3xl mx-auto px-4 sm:px-8 pt-32 sm:pt-40 pb-20">
      <ContentDoc v-slot="{ doc }">
        <article class="p-8 sm:p-12 rounded-3xl bg-transparent transition-all duration-500">
          <nav class="mb-8">
            <NuxtLink 
              to="/" 
              class="text-indigo-400 hover:text-indigo-300 flex items-center gap-2 transition-colors duration-300 font-medium"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
              </svg>
              Back to home
            </NuxtLink>
          </nav>
          
          <h1 class="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            {{ doc.title }}
          </h1>
          
          <div class="flex items-center text-sm text-gray-400 mb-12 border-b border-gray-800/50 pb-8">
            <span v-if="doc.date" class="mr-6 flex items-center">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              {{ new Date(doc.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              }) }}
            </span>
          </div>

          <div class="prose-content">
            <ContentRenderer :value="doc" />
          </div>
        </article>
      </ContentDoc>
    </div>

    <!-- CTA Section -->
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

    <!-- Add footer here -->
    <AppFooter />
  </div>
</template>

<script setup>
import { useRuntimeConfig } from 'nuxt/app'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const config = useRuntimeConfig()

// Get doc reference from ContentDoc
const { data: doc } = await useAsyncData('privacy', () => queryContent('/privacy').findOne())

useHead({
  title: computed(() => `${doc.value?.title || 'Privacy Policy'} - Slate`),
  meta: [
    {
      name: 'description',
      content: computed(() => doc.value?.description || 'Privacy Policy for Slate - Learn how we collect, use, and protect your personal information.')
    },
    {
      property: 'og:title',
      content: computed(() => `${doc.value?.title || 'Privacy Policy'} - Slate`)
    },
    {
      property: 'og:description',
      content: computed(() => doc.value?.description || 'Privacy Policy for Slate - Learn how we collect, use, and protect your personal information.')
    },
    {
      property: 'og:url',
      content: `${config.public.siteUrl}/privacy`
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ]
})
</script>

<style>
/* Import Poppins font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

/* Style markdown content */
.prose-content {
  @apply text-gray-700 dark:text-gray-300 tracking-wide;
}

.prose-content h2 {
  @apply text-3xl font-semibold mt-16 mb-8 text-white tracking-tight leading-tight;
}

.prose-content h3 {
  @apply text-2xl font-medium mt-12 mb-6 text-white tracking-tight leading-tight;
}

.prose-content p {
  @apply mb-8 text-gray-700 dark:text-gray-300 leading-relaxed text-lg font-light;
}

.prose-content ul {
  @apply list-disc list-outside ml-6 mb-8 text-gray-700 dark:text-gray-300 space-y-3 leading-relaxed;
}

.prose-content ol {
  @apply list-decimal list-outside ml-6 mb-8 text-gray-700 dark:text-gray-300 space-y-3 leading-relaxed;
}

.prose-content a {
  @apply text-indigo-400 hover:text-indigo-300 transition-colors duration-300;
}

.prose-content blockquote {
  @apply pl-6 my-10 text-gray-400 italic;
}

.prose-content code {
  @apply bg-gray-800/80 rounded-lg px-2 py-0.5 font-mono text-sm text-indigo-300;
}

.prose-content pre {
  @apply bg-gray-800/50 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6 my-10 overflow-x-auto;
}

.prose-content img {
  @apply rounded-xl my-8;
}

/* Add smooth transitions */
.prose-content * {
  @apply transition-colors duration-300;
}
</style>
