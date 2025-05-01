<template>
  <div class="min-h-screen bg-white flex flex-col">
    <NavBar />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer1 />
  </div>
</template>

<script setup>
import Footer1 from '~/components/Footer1.vue';
</script>
