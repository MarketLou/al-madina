<script setup>
const isMenuOpen = ref(false)
const { locale, setLocale } = useI18n()

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const toggleLanguage = async () => {
  const newLocale = locale.value === 'en' ? 'ar' : 'en'
  await setLocale(newLocale)
}

const navLinks = [
  { name: 'navigation.home', path: '/' },
  { name: 'navigation.menu', path: '/menu' },
  { name: 'navigation.about', path: '/about' },
  { name: 'navigation.contact', path: '/contact' },
]
</script>

<template>
  <header class="fixed top-0 left-0 w-full bg-[#FEFAEB] shadow-sm z-40">
    <nav class="container mx-auto px-4 py-3 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center">
        <NuxtLink to="/" class="text-xl font-bold" @click="closeMenu">
          Al Madina
        </NuxtLink>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        <NuxtLink 
          v-for="link in navLinks" 
          :key="link.name" 
          :to="link.path"
          class="text-gray-800 hover:text-gray-600 transition-colors duration-200"
        >
          {{ $t(link.name) }}
        </NuxtLink>
        
        <!-- Language Toggle Button (Desktop) -->
        <button
          @click="toggleLanguage"
          class="flex items-center gap-1 text-gray-800 hover:text-gray-600 transition-colors duration-200"
          aria-label="Toggle language"
        >
          <transition
            enter-active-class="transition-opacity duration-500"
            leave-active-class="transition-opacity duration-500"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-from-class="opacity-0"
            leave-to-class="opacity-100"
            mode="out-in"
          >
            <span v-if="locale === 'en'" key="english" class="inline-flex items-center">
              {{ $t('navigation.language.ar') }} 🇸🇦
            </span>
            <span v-else key="arabic" class="inline-flex items-center">
              🇺🇸 {{ $t('navigation.language.en') }}
            </span>
          </transition>
        </button>
      </div>

      <!-- Hamburger Menu Button -->
      <button 
        class="md:hidden flex items-center p-2 rounded-md focus:outline-none"
        @click="toggleMenu"
        aria-label="Toggle menu"
      >
        <svg 
          class="w-6 h-6 text-gray-800" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            v-if="!isMenuOpen" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path 
            v-else 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </nav>

    <!-- Mobile Menu -->
    <div 
      v-if="isMenuOpen" 
      class="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm transition-all duration-300"
      @click="closeMenu"
    >
      <div 
        class="absolute right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out"
        @click.stop
      >
        <div class="p-5">
          <div class="flex justify-end">
            <button 
              class="p-2 rounded-md focus:outline-none"
              @click="closeMenu"
              aria-label="Close menu"
            >
              <svg 
                class="w-6 h-6 text-gray-800" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="mt-5 flex flex-col space-y-5">
            <NuxtLink 
              v-for="link in navLinks" 
              :key="link.name" 
              :to="link.path"
              class="text-gray-800 hover:text-gray-600 transition-colors duration-200 py-2"
              @click="closeMenu"
            >
              {{ $t(link.name) }}
            </NuxtLink>
            
            <!-- Language Toggle Button (Mobile) -->
            <button
              @click="toggleLanguage"
              class="text-gray-800 hover:text-gray-600 transition-colors duration-200 py-2 text-left"
              aria-label="Toggle language"
            >
              <transition
                enter-active-class="transition-opacity duration-500"
                leave-active-class="transition-opacity duration-500"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                leave-from-class="opacity-0"
                leave-to-class="opacity-100"
                mode="out-in"
              >
                <span v-if="locale === 'en'" key="english-mobile" class="inline-flex items-center">
                  {{ $t('navigation.language.ar') }} 🇸🇦
                </span>
                <span v-else key="arabic-mobile" class="inline-flex items-center">
                  🇺🇸 {{ $t('navigation.language.en') }}
                </span>
              </transition>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Force LTR layout for navbar */
header,
nav,
.flex {
  direction: ltr !important;
}

/* Ensure smooth transitions */
.transform {
  transition-property: transform;
}

/* Ensure text alignment is consistent */
.inline-flex {
  justify-content: flex-start;
}
</style>
