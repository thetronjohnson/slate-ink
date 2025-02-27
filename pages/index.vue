<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black selection:bg-indigo-900/30 selection:text-indigo-300">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 backdrop-blur-xl bg-gray-900/80 border-b border-gray-800/50 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a href="/" class="flex items-center gap-3">
          <img src="/logo.png" alt="Slate" class="w-8 h-8 object-contain">
          <span class="text-xl font-bold text-white">Slate</span>
        </a>
        <div class="flex items-center gap-4 sm:gap-8">
          <div class="flex items-center gap-4 sm:gap-6">
            <a href="https://blog.slate.ink" class="text-gray-400 hover:text-indigo-400 font-medium">
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

    <!-- Hero Section -->
    <header class="relative max-w-7xl mx-auto px-4 sm:px-8 pt-32 sm:pt-40 pb-16 sm:pb-20">
      <!-- Enhanced gradient background -->
      <div class="absolute inset-0 bg-transparent"></div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
        <!-- Enhanced Main Hero Card -->
        <div class="md:col-span-2 p-12 rounded-3xl bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-700/50 hover:border-indigo-500/30 transition-all duration-500 premium-shadow">
          <h1 class="text-4xl sm:text-6xl font-bold text-white mb-6 sm:mb-8 leading-[1.1] tracking-tight">
            Write Beautiful<br/>
            <span class="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent gradient-animate">
              Markdown Documents
            </span>
          </h1>
          <h2 class="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed">
            The most elegant WYSIWYG markdown editor for writers and developers.
            <span class="font-medium text-indigo-300">Transform your writing workflow with real-time preview.</span>
          </h2>
        </div>

        <!-- Enhanced Waitlist Card -->
        <div class="p-8 rounded-3xl bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-gray-900/30 backdrop-blur-sm border border-indigo-500/20 hover:border-indigo-400/30 transition-all duration-500 premium-shadow flex flex-col items-center justify-center">
          <h3 class="text-xl font-bold text-white mb-4 text-center">Get Early Access</h3>
          <p class="text-gray-300 mb-6 text-center text-sm">Be the first to experience the future of markdown editing.</p>
          <form class="flex flex-col gap-4 w-full" @submit.prevent="handleSubmit">
            <input 
              type="email" 
              v-model="email"
              placeholder="Enter your email"
              class="w-full px-4 py-3 rounded-xl border-2 border-indigo-500/30 bg-gray-800/50 backdrop-blur-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-indigo-400/70 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300"
            >
            <button 
              type="submit" 
              class="w-full bg-white text-black px-6 py-3 rounded-xl hover:bg-indigo-500 hover:text-white transition-all duration-500 shadow-lg shadow-indigo-500/25"
            >
              <span class="font-medium">{{ isSubmitting ? '✨ Joining...' : '✨ Join Early Access' }}</span>
            </button>
          </form>
          <p v-if="showSuccess" class="text-center text-sm text-indigo-300 mt-4 font-medium">
            🎉 Welcome aboard! You're in for something special.
          </p>
          <p class="text-center text-sm text-indigo-300/80 mt-4">
            Join {{ waitlistCount.toLocaleString() }} early adopters on the waitlist
          </p>
        </div>

        <!-- Enhanced Feature Cards -->
        <div class="p-8 rounded-3xl bg-gradient-to-br from-gray-800/30 via-purple-900/20 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 hover:border-indigo-500/30 transition-all premium-shadow">
          <span class="text-2xl mb-4 block">⚡️</span>
          <h3 class="text-lg font-medium text-white mb-2">Live Preview</h3>
          <p class="text-sm text-indigo-200/70">
            See your markdown transform instantly
          </p>
        </div>

        <div class="p-8 rounded-3xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/30 transition-all duration-300">
          <span class="text-2xl mb-4 block">📝</span>
          <h3 class="text-lg font-medium text-white mb-2">Local Files</h3>
          <p class="text-sm text-gray-400">
            Edit markdown in your local files
          </p>
        </div>

        <div class="p-8 rounded-3xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/30 hover:border-gray-600/30 transition-all duration-300">
          <span class="text-2xl mb-4 block">🎯</span>
          <h3 class="text-lg font-medium text-white mb-2">Focus Mode</h3>
          <p class="text-sm text-gray-400">
            For distraction-free writing
          </p>
        </div>
      </div>
    </header>

        <!-- Demo Video Section - Moved between grid sections -->
        <section class="relative max-w-7xl mx-auto px-4 sm:px-8 py-20 sm:py-32">
          <div class="text-center mb-12">
            <h2 class="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
              See Slate in Action
            </h2>
            <p class="text-xl text-gray-400 max-w-2xl mx-auto">
              Watch how Slate transforms your markdown writing experience with its powerful features and elegant interface.
            </p>
          </div>
          
          <div class="relative rounded-3xl overflow-hidden premium-shadow border border-gray-700/30 hover:border-indigo-500/30 transition-all duration-500">
            <div class="relative w-full" style="padding-top: 56.25%;">
              <video 
                class="absolute top-0 left-0 w-full h-full object-cover"
                controls
                autoplay
                muted
                loop
                preload="metadata"
              >
                <source src="/slate.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

    <!-- INTEREST: Core Features Section -->
    <section class="relative max-w-7xl mx-auto px-4 sm:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Local First Feature - Large Card -->
        <div class="group lg:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-gray-800/30 via-gray-900/20 to-black/30 backdrop-blur-sm border border-gray-700/30 hover:border-indigo-500/30 transition-all duration-500 premium-shadow">
          <div class="flex flex-col h-full">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-indigo-900/50 to-gray-900 rounded-xl flex items-center justify-center">
                <span class="text-2xl">🖥️</span>
              </div>
              <h3 class="text-2xl font-bold text-white">Simple Setup</h3>
            </div>
            <p class="text-gray-400 mb-8">Get started in seconds. Choose a folder, create a markdown file, and start writing immediately. No complicated setup or configuration required.</p>
            <div class="mt-auto">
              <div class="flex flex-wrap gap-3">
                <span class="px-3 py-1 rounded-full bg-indigo-900/30 text-indigo-400 text-sm">Choose folder</span>
                <span class="px-3 py-1 rounded-full bg-indigo-900/30 text-indigo-400 text-sm">Create file</span>
                <span class="px-3 py-1 rounded-full bg-indigo-900/30 text-indigo-400 text-sm">Start writing</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Workspace Feature - Tall Card -->
        <div class="group row-span-2 p-8 rounded-3xl bg-gradient-to-br from-gray-800/30 via-purple-900/20 to-black/30 backdrop-blur-sm border border-gray-700/30 hover:border-indigo-500/30 transition-all duration-500 premium-shadow">
          <div class="flex flex-col h-full">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-indigo-900/50 to-gray-900 rounded-xl flex items-center justify-center">
                <span class="text-2xl">📁</span>
              </div>
              <h3 class="text-2xl font-bold text-white">Smart Workspace</h3>
            </div>
            <p class="text-gray-400 mb-8">Choose any folder as your workspace. Create, edit, and organize markdown files with ease. Perfect for managing documentation, notes, or blog posts.</p>
            <div class="mt-auto">
              <div class="flex flex-wrap gap-3">
                <span class="px-3 py-1 rounded-full bg-indigo-900/30 text-indigo-400 text-sm">Folder organization</span>
                <span class="px-3 py-1 rounded-full bg-indigo-900/30 text-indigo-400 text-sm">Quick switching</span>
                <span class="px-3 py-1 rounded-full bg-indigo-900/30 text-indigo-400 text-sm">Nested folders</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Focus Mode Feature - Regular Card -->
        <div class="group lg:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-gray-800/30 via-gray-900/20 to-black/30 backdrop-blur-sm border border-gray-700/30 hover:border-indigo-500/30 transition-all duration-500 premium-shadow">
          <div class="flex flex-col h-full">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 bg-gradient-to-br from-indigo-900/50 to-gray-900 rounded-xl flex items-center justify-center">
                <span class="text-2xl">🎯</span>
              </div>
              <h3 class="text-2xl font-bold text-white">Pure Focus</h3>
            </div>
            <p class="text-gray-400 mb-8">A clean, distraction-free environment that lets you focus on what matters most—your writing. Customize the interface to match your perfect writing setup.</p>
            <div class="mt-auto">
              <div class="flex flex-wrap gap-3">
                <span class="px-3 py-1 rounded-full bg-indigo-900/30 text-indigo-400 text-sm">Minimal interface</span>
                <span class="px-3 py-1 rounded-full bg-indigo-900/30 text-indigo-400 text-sm">Distraction-free</span>
                <span class="px-3 py-1 rounded-full bg-indigo-900/30 text-indigo-400 text-sm">Beautiful typography</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ACTION: Final CTA -->
    <section class="bg-black">
      <div class="max-w-7xl mx-auto px-4 sm:px-8 py-20 sm:py-32 text-center">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl sm:text-5xl font-serif font-bold text-white mb-6 sm:mb-8 tracking-tight leading-tight">
            Ready to write<br/>
            <span class="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              without distractions?
            </span>
          </h2>
          <p class="text-xl text-gray-400 mb-12 font-light">
            Join the waitlist today and be among the first to experience Slate.
          </p>
          <div class="max-w-xl mx-auto px-4 sm:px-0">
            <form class="flex flex-col sm:flex-row gap-4" @submit.prevent="handleSubmit">
              <input 
                type="email" 
                v-model="email"
                placeholder="Enter your email"
                class="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg border-2 border-gray-800 bg-gray-800/80 text-white placeholder:text-gray-500 focus:outline-none focus:border-indigo-500 text-base font-light"
                required
              >
              <button 
                type="submit" 
                class="inline-flex items-center justify-center bg-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-indigo-500"
                :disabled="isSubmitting"
              >
                <span class="text-base font-medium tracking-wide">{{ isSubmitting ? 'Joining...' : 'Join waitlist' }}</span>
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </button>
            </form>
            <p v-if="showSuccess" class="text-center text-sm text-indigo-400 mt-4 font-medium">
              ✨ Thank you for joining the waitlist! We'll be in touch soon.
            </p>
            <p class="text-gray-500 mt-6 text-sm font-light">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>

    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-8 text-white">My Blog</h1>
      
      <div class="grid gap-6">
        <ContentList path="/blog" v-slot="data">
          <div v-if="data?.list?.length">
            <article v-for="post in data.list" :key="post._path" class="p-6 bg-gray-800 rounded-lg shadow">
              <NuxtLink :to="post._path" class="block">
                <h2 class="text-2xl font-semibold mb-2 text-white">{{ post.title }}</h2>
                <p class="text-gray-400 mb-4">{{ post.description }}</p>
                <div class="text-sm text-gray-500">
                  {{ new Date(post.date).toLocaleDateString() }}
                </div>
              </NuxtLink>
            </article>
          </div>
          <div v-else class="text-center py-8">
            <p class="text-gray-400">No blog posts found.</p>
          </div>
        </ContentList>
      </div>
    </div>
  </div>
</template>

<style>
/* Update base styles */
body {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(17, 24, 39);
  color: white;
}

/* Update rounded corners to match Apple style */
.rounded-3xl {
  border-radius: 20px;
}

/* Add subtle shadows */
.shadow-apple {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05);
}

/* Update selection color */
::selection {
  background-color: rgba(99, 102, 241, 0.2);
  color: rgb(199, 210, 254);
}

/* Add premium animations */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.hover-float {
  transition: all 0.3s ease;
}

.hover-float:hover {
  transform: translateY(-5px);
}

/* Add glass morphism effects */
.glass {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Add premium shadows */
.premium-shadow {
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.4),
              0 10px 20px -5px rgba(99, 102, 241, 0.15);
}

/* Add subtle gradient animations */
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.gradient-animate {
  background-size: 200% 200%;
  animation: gradientShift 8s ease infinite;
}

/* Enhanced premium styles */
.premium-shadow {
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.4),
              0 10px 20px -5px rgba(99, 102, 241, 0.15);
}

.hover-float {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-float:hover {
  transform: translateY(-8px);
}

/* Add more premium styles */
.glass {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

/* Enhance selection style */
::selection {
  background-color: rgba(99, 102, 241, 0.3);
  color: rgb(224, 231, 255);
}
</style>

<script setup>
import { onMounted, ref } from 'vue'
import Airtable from 'airtable'

// SEO Configuration
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  title: 'Slate - Modern WYSIWYG Markdown Editor',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'A powerful WYSIWYG markdown editor that works with your local files. Choose any folder, create markdown files, and start writing with live preview.' },
    
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Slate' },
    { property: 'og:url', content: 'https://slate.ink' },
    { property: 'og:title', content: 'Slate - Modern WYSIWYG Markdown Editor' },
    { property: 'og:description', content: 'A powerful WYSIWYG markdown editor that works with your local files. Choose any folder, create markdown files, and start writing with live preview.' },
    { property: 'og:image', content: '/og-image.png' },
    { property: 'og:image:alt', content: 'Slate markdown editor interface' },
    { property: 'og:locale', content: 'en_US' },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@thetronjohnson' },
    { name: 'twitter:creator', content: '@thetronjohnson' },
    { name: 'twitter:url', content: 'https://slate.ink' },
    { name: 'twitter:title', content: 'Slate - Modern WYSIWYG Markdown Editor' },
    { name: 'twitter:description', content: 'A powerful WYSIWYG markdown editor that works with your local files. Choose any folder, create markdown files, and start writing with live preview.' },
    { name: 'twitter:image', content: '/og-image.png' },
    { name: 'twitter:image:alt', content: 'Slate markdown editor interface' }
  ],
  link: [
    { rel: 'canonical', href: 'https://slate.ink' },
    { rel: 'icon', type: 'image/png', href: '/logo.png' },
    { rel: 'apple-touch-icon', href: '/logo.png' },
    { 
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'
    }
  ]
})

const email = ref('')
const isSubmitting = ref(false)
const showSuccess = ref(false)
const runtimeConfig = useRuntimeConfig()

// Initialize Airtable
const airtable = new Airtable({
  apiKey: runtimeConfig.public.airtableApiKey
})
const base = airtable.base(runtimeConfig.public.airtableBaseId)

// Add new ref for waitlist count
const waitlistCount = ref(0)

// Add console.log to debug configuration
console.log('Airtable Config:', {
  apiKey: runtimeConfig.public.airtableApiKey,
  baseId: runtimeConfig.public.airtableBaseId,
  tableName: runtimeConfig.public.airtableTableName
})

// Modify fetchWaitlistCount to include better error handling
const fetchWaitlistCount = async () => {
  try {
    if (!runtimeConfig.public.airtableApiKey || !runtimeConfig.public.airtableBaseId || !runtimeConfig.public.airtableTableName) {
      console.error('Missing Airtable configuration')
      return
    }

    const records = await base(runtimeConfig.public.airtableTableName)
      .select({
        fields: ['Email'],
      })
      .all()
    
    console.log('Fetched records:', records.length)
    waitlistCount.value = records.length
  } catch (error) {
    console.error('Error fetching waitlist count:', error)
    waitlistCount.value = 0
  }
}

const handleSubmit = async () => {
  if (!email.value || isSubmitting.value) return
  
  isSubmitting.value = true
  showSuccess.value = false
  
  try {
    await base(runtimeConfig.public.airtableTableName).create([
      {
        fields: {
          Email: email.value
        }
      }
    ])
    
    // Clear form and show success
    email.value = ''
    showSuccess.value = true
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)
    
    // Fetch initial count
    await fetchWaitlistCount()
  } catch (error) {
    console.error('Error submitting to Airtable:', error)
    alert('Something went wrong. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

onMounted(async () => {
  // Fetch initial count
  await fetchWaitlistCount()
  
  // Update count after new submission
  const originalHandleSubmit = handleSubmit
  handleSubmit = async () => {
    await originalHandleSubmit()
    await fetchWaitlistCount()
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, {
    threshold: 0.1
  })

  document.querySelectorAll('.scroll-fade-in').forEach((el) => {
    observer.observe(el)
  })
})
</script>
