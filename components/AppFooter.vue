<template>
  <footer class="bg-gray-900 border-t border-gray-800/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Logo & Description -->
        <div class="md:col-span-2">
          <div class="flex items-center gap-3 mb-4">
            <img src="/logo.png" alt="Slate" class="w-8 h-8 object-contain">
            <span class="text-xl font-bold text-white">Slate</span>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed">
            A powerful WYSIWYG markdown editor that works with your local files. Choose any folder, create markdown files, and start writing with live preview.
          </p>
        </div>

        <!-- Links -->
        <div>
          <h3 class="text-white font-semibold mb-4">Legal</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/privacy-policy" class="text-gray-400 hover:text-indigo-400 text-sm transition-colors">
                Privacy Policy
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/terms-and-conditions" class="text-gray-400 hover:text-indigo-400 text-sm transition-colors">
                Terms & Conditions
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/refund-policy" class="text-gray-400 hover:text-indigo-400 text-sm transition-colors">
                Refund Policy
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Resources -->
        <div>
          <h3 class="text-white font-semibold mb-4">Resources</h3>
          <ul class="space-y-3">
            <li>
              <a href="/blog" class="text-gray-400 hover:text-indigo-400 text-sm transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="/sitemap.xml" class="text-gray-400 hover:text-indigo-400 text-sm transition-colors">
                Sitemap
              </a>
            </li>
          </ul>
        </div>

        <!-- Social Links -->
        <div>
          <h3 class="text-white font-semibold mb-4">Connect</h3>
          <ul class="space-y-3">
            <li>
              <a href="https://linkedin.com/in/kiranjohns" class="text-gray-400 hover:text-indigo-400 text-sm transition-colors flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://x.com/thetronjohnson" class="text-gray-400 hover:text-indigo-400 text-sm transition-colors flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-12 pt-8 border-t border-gray-800/50">
        <p class="text-center text-gray-400 text-sm">
          © {{ new Date().getFullYear() }} Slate. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template> 