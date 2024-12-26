<template>
  <div class="min-h-screen bg-white selection:bg-indigo-50 selection:text-indigo-900">
    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 bg-white/90 border-b border-gray-100 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a href="/" class="flex items-center gap-3">
          <img src="/logo.png" alt="Slate" class="w-8 h-8 object-contain">
          <span class="text-xl font-bold text-gray-900">Slate</span>
        </a>
        <div class="flex items-center gap-4 sm:gap-8">
          <div class="flex items-center gap-4 sm:gap-6">
            <a href="https://linkedin.com/in/kiranjohns" class="text-gray-600 hover:text-indigo-600" target="_blank" rel="noopener noreferrer">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://x.com/thetronjohnson" class="text-gray-600 hover:text-indigo-600" target="_blank" rel="noopener noreferrer">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
          <div class="hidden sm:block h-6 w-px bg-gray-200"></div>
          <a href="https://github.com/thetronjohnson/slate" class="inline-flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 text-sm font-medium text-gray-600 hover:text-indigo-600">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span class="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </nav>

    <!-- ATTENTION: Hero Section with Strong Hook -->
    <header class="relative max-w-7xl mx-auto px-4 sm:px-8 pt-32 sm:pt-40 pb-16 sm:pb-20">
      <div class="relative">
        <span class="block text-center text-indigo-600 font-semibold mb-6 text-base tracking-wide uppercase">
          Introducing Slate
        </span>
        <h1 class="text-4xl sm:text-6xl font-serif text-gray-900 font-black text-center mb-6 sm:mb-8 leading-[1.1] tracking-tight">
          Write freely.<br/>
          <span class="text-indigo-600">Think clearly</span>
        </h1>
        <p class="text-lg sm:text-xl text-gray-600 text-center max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed font-light">
          A minimal, distraction-free markdown editor that works with your local files.
          <span class="font-medium text-gray-900">Beautiful, fast, and designed for focus.</span>
        </p>
        <!-- Quick CTA for Engaged Users -->
        <div class="flex justify-center mb-16 sm:mb-24">
          <div class="w-full max-w-xl px-4 sm:px-0">
            <form class="flex flex-col sm:flex-row gap-4" @submit.prevent="handleSubmit">
              <input 
                type="email" 
                v-model="email"
                placeholder="Enter your email"
                class="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg border-2 border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-indigo-500 text-base font-light"
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
            <p v-if="showSuccess" class="text-center text-sm text-indigo-600 mt-4 font-medium">
              ��� Thank you for joining the waitlist! We'll be in touch soon.
            </p>
          </div>
        </div>
      </div>
      
      <!-- Demo Video to Grab Attention -->
      <div class="relative mx-auto max-w-5xl">
        <div class="relative rounded-2xl overflow-hidden bg-gradient-to-b from-indigo-50/30 to-white/50 p-6">
          <div class="aspect-[16/9] rounded-xl overflow-hidden bg-white">
            <video 
              autoplay 
              loop 
              muted 
              playsinline
              class="w-full h-full object-cover"
            >
              <source src="/Slate.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </div>
    </header>

    <!-- INTEREST: Core Features Section -->
    <section class="relative max-w-7xl mx-auto px-4 sm:px-8 py-20 sm:py-32">
      <!-- Feature Card Component (repeated for each feature) -->
      <div class="space-y-20 sm:space-y-32">
        <!-- Local First Feature -->
        <div class="group">
          <div class="grid md:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div class="order-2 md:order-1 space-y-8 sm:space-y-12">
              <div class="w-16 h-16 bg-gradient-to-br from-indigo-50 to-white rounded-2xl flex items-center justify-center shadow-sm">
                <span class="text-3xl">🖥️</span>
              </div>
              <div>
                <h3 class="text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                  Local-First,<br/>
                  <span class="bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">
                    Always Available
                  </span>
                </h3>
                <p class="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                  Your files stay on your computer. Work offline, maintain privacy, and keep full control of your data.
                </p>
              </div>
              <ul class="space-y-4 sm:space-y-6">
                <li class="flex items-center gap-4 text-lg text-gray-800 transition-colors duration-200">
                  <span class="flex-shrink-0 w-8 h-8 bg-indigo-50 rounded-full flex items-center justify-center shadow-sm">
                    <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                  </span>
                  <span class="font-light">No cloud sync required</span>
                </li>
                <li class="flex items-center gap-4 text-lg text-gray-800 transition-colors duration-200">
                  <span class="flex-shrink-0 w-8 h-8 bg-indigo-50 rounded-full flex items-center justify-center shadow-sm">
                    <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                  </span>
                  <span class="font-light">Work offline, anytime</span>
                </li>
                <li class="flex items-center gap-4 text-lg text-gray-800 transition-colors duration-200">
                  <span class="flex-shrink-0 w-8 h-8 bg-indigo-50 rounded-full flex items-center justify-center shadow-sm">
                    <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                  </span>
                  <span class="font-light">Complete privacy</span>
                </li>
              </ul>
            </div>
            <div class="order-1 md:order-2 md:-mr-0 lg:-mr-24">
              <div class="relative rounded-2xl overflow-hidden p-4 shadow-xl shadow-indigo-100/20 transition-transform duration-300 group-hover:scale-[1.02]">
                <div class="aspect-[16/9] rounded-xl overflow-hidden border border-indigo-100/50">
                  <img 
                    src="/local.png" 
                    alt="Local-first feature demonstration" 
                    class="w-full h-full object-cover"
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Workspace Feature -->
        <div class="group">
          <div class="grid md:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div class="md:-ml-24">
              <div class="relative rounded-2xl overflow-hidden p-4 shadow-xl shadow-indigo-100/20 transition-transform duration-300 group-hover:scale-[1.02]">
                <div class="aspect-[16/9] rounded-xl overflow-hidden border border-indigo-100/50">
                  <img 
                    src="/files.png" 
                    alt="Workspace organization demonstration" 
                    class="w-full h-full object-cover"
                  >
                </div>
              </div>
            </div>
            <div class="space-y-8 sm:space-y-12">
              <div class="w-16 h-16 bg-gradient-to-br from-indigo-50 to-white rounded-2xl flex items-center justify-center shadow-sm">
                <span class="text-3xl">📁</span>
              </div>
              <div>
                <h3 class="text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                  Smart Workspace,<br/>
                  <span class="bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">
                    Perfect Organization
                  </span>
                </h3>
                <p class="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                  Choose any folder as your workspace. Create, edit, and organize markdown files with ease.
                </p>
              </div>
              <ul class="space-y-4 sm:space-y-6">
                <li class="flex items-center gap-4 text-lg text-gray-800 transition-colors duration-200">
                  <span class="flex-shrink-0 w-8 h-8 bg-indigo-50 rounded-full flex items-center justify-center shadow-sm">
                    <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                  </span>
                  Simple folder organization
                </li>
                <li class="flex items-center gap-4 text-lg text-gray-800 transition-colors duration-200">
                  <span class="flex-shrink-0 w-8 h-8 bg-indigo-50 rounded-full flex items-center justify-center shadow-sm">
                    <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                  </span>
                  Quick file switching
                </li>
                <li class="flex items-center gap-4 text-lg text-gray-800 transition-colors duration-200">
                  <span class="flex-shrink-0 w-8 h-8 bg-indigo-50 rounded-full flex items-center justify-center shadow-sm">
                    <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                  </span>
                  Nested folders support
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Focus Mode Feature -->
        <div class="group">
          <div class="grid md:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div class="order-1 md:order-2 md:-mr-24">
              <div class="relative rounded-2xl overflow-hidden p-4 shadow-xl shadow-indigo-100/20 transition-transform duration-300 group-hover:scale-[1.02]">
                <div class="aspect-[16/9] rounded-xl overflow-hidden border border-indigo-100/50">
                  <img 
                    src="/focus.png" 
                    alt="Focus mode demonstration" 
                    class="w-full h-full object-cover"
                  >
                </div>
              </div>
            </div>
            <div class="order-2 md:order-1 space-y-8 sm:space-y-12">
              <div class="w-16 h-16 bg-gradient-to-br from-indigo-50 to-white rounded-2xl flex items-center justify-center shadow-sm">
                <span class="text-3xl">🎯</span>
              </div>
              <div>
                <h3 class="text-4xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                  Pure Focus,<br/>
                  <span class="bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">
                    Zero Distractions
                  </span>
                </h3>
                <p class="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                  A clean, distraction-free environment that lets you focus on what matters most—your writing.
                </p>
              </div>
              <ul class="space-y-4 sm:space-y-6">
                <li class="flex items-center gap-4 text-lg text-gray-800 transition-colors duration-200">
                  <span class="flex-shrink-0 w-8 h-8 bg-indigo-50 rounded-full flex items-center justify-center shadow-sm">
                    <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                  </span>
                  Minimal interface
                </li>
                <li class="flex items-center gap-4 text-lg text-gray-800 transition-colors duration-200">
                  <span class="flex-shrink-0 w-8 h-8 bg-indigo-50 rounded-full flex items-center justify-center shadow-sm">
                    <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                  </span>
                  Distraction-free mode
                </li>
                <li class="flex items-center gap-4 text-lg text-gray-800 transition-colors duration-200">
                  <span class="flex-shrink-0 w-8 h-8 bg-indigo-50 rounded-full flex items-center justify-center shadow-sm">
                    <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                  </span>
                  Beautiful typography
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- DESIRE: Social Proof & Open Source -->
    <section class="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
      <div class="bg-gradient-to-b from-indigo-50/50 to-white rounded-2xl p-8 sm:p-20 text-center">
        <div class="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-10 mx-auto">
          <span class="text-3xl">🌟</span>
        </div>
        <h3 class="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Built for Writers</h3>
        <p class="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto font-light">
          Open source and built in the open. Join a community of writers who value simplicity and focus.
        </p>
        <div class="flex items-center justify-center gap-8">
          <a href="https://github.com/thetronjohnson/slate" class="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium text-lg">
            View on GitHub
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- ACTION: Final CTA -->
    <section class="bg-gray-900 mt-12 sm:mt-16">
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
  </div>
</template>

<style>
/* Base Styles */
body {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "SF Pro Text", "San Francisco", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1, h2 {
  font-family: "Merriweather", serif;
}

/* Selection */
::selection {
  background-color: rgba(79, 70, 229, 0.1);
  color: rgb(67, 56, 202);
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
  title: 'Slate - A minimal, distraction-free markdown editor',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'A beautiful, local-first markdown editor that works with your files. Write freely, think clearly, and stay focused with zero distractions.' },
    
    // Open Graph / Facebook
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'Slate' },
    { property: 'og:url', content: 'https://slate.ink' },
    { property: 'og:title', content: 'Slate - Write freely, think clearly' },
    { property: 'og:description', content: 'A beautiful, local-first markdown editor that works with your files. Write freely, think clearly, and stay focused with zero distractions.' },
    { property: 'og:image', content: '/og-image.png' },
    { property: 'og:image:alt', content: 'Slate markdown editor interface' },
    { property: 'og:locale', content: 'en_US' },

    // Twitter
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@thetronjohnson' },
    { name: 'twitter:creator', content: '@thetronjohnson' },
    { name: 'twitter:url', content: 'https://slate.ink' },
    { name: 'twitter:title', content: 'Slate - Write freely, think clearly' },
    { name: 'twitter:description', content: 'A beautiful, local-first markdown editor that works with your files. Write freely, think clearly, and stay focused with zero distractions.' },
    { name: 'twitter:image', content: '/og-image.png' },
    { name: 'twitter:image:alt', content: 'Slate markdown editor interface' }
  ],
  link: [
    { rel: 'canonical', href: 'https://slate.ink' },
    { rel: 'icon', type: 'image/png', href: '/logo.png' },
    { rel: 'apple-touch-icon', href: '/logo.png' },
    { 
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700;900&display=swap'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap'
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
  } catch (error) {
    console.error('Error submitting to Airtable:', error)
    alert('Something went wrong. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

onMounted(() => {
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
