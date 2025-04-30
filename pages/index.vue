<template>
  <div class="relative min-h-screen pt-16 bg-[#FEFAEB]">
    <!-- Content -->
    <div class="relative z-10 pt-20 container mx-auto px-4 min-h-screen flex items-center">
      <div class="max-w-4xl mx-auto text-gray-800">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">{{ $t('home.welcome') }}</h1>
        <p class="text-xl md:text-2xl mb-8">{{ $t('home.tagline') }}</p>
        <div class="bg-white p-8 rounded-lg shadow-lg text-gray-800">
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

  <!-- New Bubble Section -->
  <div class="relative bg-[#FEFAEB] py-20">
    <div class="container mx-auto px-4">
      <!-- Eggshell White Bubble Container -->
      <div class="bg-[#F8F6F0] rounded-[50px] p-10 md:p-12 lg:p-14 shadow-lg mx-auto max-w-7xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <!-- Left Column: Text -->
          <div class="text-gray-800">
            <h2 class="text-3xl font-bold mb-4 text-gray-900">{{ $t('home.kebabSection.title') }}</h2>
            <p class="text-lg leading-relaxed">
              {{ $t('home.kebabSection.description') }}
            </p>
          </div>
          
          <!-- Right Column: Video Player -->
          <div class="w-full aspect-w-16 aspect-h-9">
            <div class="rounded-xl overflow-hidden shadow-lg h-full">
              <video 
                class="w-full h-full object-cover rounded-xl"
                autoplay 
                loop 
                muted 
                playsinline
                controls
              >
                <source src="/videos/halmadinahero.mov" type="video/quicktime">
                <source src="/videos/hero.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
