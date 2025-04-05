<template>
  <div class="relative min-h-screen pt-16">
    <!-- Video Background -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <video 
        class="absolute min-w-full min-h-full object-cover"
        autoplay 
        loop 
        muted 
        playsinline
      >
        <source src="/videos/halmadinahero.mov" type="video/quicktime">
        <source src="/videos/hero.mp4" type="video/mp4">
        {{ $t('home.browserSupport') }}
      </video>
      <!-- Overlay to ensure text is readable -->
      <div class="absolute inset-0 bg-black bg-opacity-40"></div>
    </div>
    
    <!-- Content -->
    <div class="relative z-10 pt-20 container mx-auto px-4 min-h-screen flex items-center">
      <div class="max-w-4xl mx-auto text-white">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">{{ $t('home.welcome') }}</h1>
        <p class="text-xl md:text-2xl mb-8">{{ $t('home.tagline') }}</p>
        <div class="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg text-gray-800">
          <h2 class="text-2xl font-semibold mb-4">{{ $t('home.specialties.title') }}</h2>
          <p class="text-gray-700">
            {{ $t('home.specialties.description') }}
          </p>
          <div class="mt-6">
            <a href="#menu" class="inline-block px-6 py-3 bg-[#FEFAEB] text-gray-800 font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300">
              {{ $t('home.specialties.viewMenu') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
