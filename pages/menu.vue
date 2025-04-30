<template>
  <div class="pt-48 md:pt-56">
    <!-- Hero Section with Background Image -->
    <div 
      class="relative w-full h-64 md:h-80 bg-cover bg-center flex items-center" 
      style="background-image: url('/images/menu-background.jpg')"
    >
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="container mx-auto px-4 relative z-10">
        <h1 class="text-4xl md:text-5xl font-bold text-white">
          {{ $t('menu.title') }}
        </h1>
        <p class="text-xl text-white mt-2">
          {{ $t('menu.subtitle') }}
        </p>
      </div>
    </div>

    <!-- Menu Container -->
    <div class="bg-[#FEFAEB]">
      <div class="container mx-auto px-4 py-8">
        <!-- Menu Navigation -->
        <div class="overflow-x-auto mb-8">
          <div class="flex space-x-8 min-w-max border-b border-gray-200">
            <button 
              v-for="category in menuCategories" 
              :key="category.id"
              @click="activeCategory = category.id"
              class="pb-2 px-1 -mb-px text-gray-700 hover:text-gray-900 transition-colors"
              :class="{ 'border-b-2 border-gray-800 font-medium': activeCategory === category.id }"
            >
              {{ $t(category.name) }}
            </button>
          </div>
        </div>
        
        <!-- Menu Items -->
        <div v-if="filteredMenuItems.length > 0">
          <div class="grid md:grid-cols-2 gap-6">
            <div 
              v-for="(item, index) in filteredMenuItems" 
              :key="index"
              class="border-b border-gray-200 pb-4 last:border-b-0"
            >
              <div class="flex-1">
                <h3 class="font-medium text-lg">{{ $t(item.name) }}</h3>
                <p class="text-gray-600 mt-1">{{ $t(item.description) }}</p>
                <div class="mt-2 text-gray-900 font-medium">${{ item.price.toFixed(2) }}</div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="text-center py-12">
          <p class="text-gray-600">{{ $t('menu.noItemsFound') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n();

// Active menu category
const activeCategory = ref('food');

// Menu categories
const menuCategories = [
  { id: 'food', name: 'menu.categories.food' },
  { id: 'butchery', name: 'menu.categories.butchery' },
  { id: 'beverage', name: 'menu.categories.beverage' }
];

// Menu items data
const menuItems = [
  // Food items
  {
    category: 'food',
    name: 'menu.items.shawarmaPlate.name',
    description: 'menu.items.shawarmaPlate.description',
    price: 14.99
  },
  {
    category: 'food',
    name: 'menu.items.falafelWrap.name',
    description: 'menu.items.falafelWrap.description',
    price: 10.99
  },
  {
    category: 'food',
    name: 'menu.items.mixedGrill.name',
    description: 'menu.items.mixedGrill.description',
    price: 18.99
  },
  {
    category: 'food',
    name: 'menu.items.hummusMeat.name',
    description: 'menu.items.hummusMeat.description',
    price: 12.99
  },
  
  // Butchery items
  {
    category: 'butchery',
    name: 'menu.items.lambCuts.name',
    description: 'menu.items.lambCuts.description',
    price: 19.99
  },
  {
    category: 'butchery',
    name: 'menu.items.beefSelection.name',
    description: 'menu.items.beefSelection.description',
    price: 24.99
  },
  {
    category: 'butchery',
    name: 'menu.items.marinatedChicken.name',
    description: 'menu.items.marinatedChicken.description',
    price: 14.99
  },
  
  // Beverage items
  {
    category: 'beverage',
    name: 'menu.items.turkishCoffee.name',
    description: 'menu.items.turkishCoffee.description',
    price: 3.99
  },
  {
    category: 'beverage',
    name: 'menu.items.mintTea.name',
    description: 'menu.items.mintTea.description',
    price: 2.99
  },
  {
    category: 'beverage',
    name: 'menu.items.freshJuice.name',
    description: 'menu.items.freshJuice.description',
    price: 4.99
  }
];

// Filter menu items based on active category
const filteredMenuItems = computed(() => {
  // Filter by category
  if (activeCategory.value) {
    return menuItems.filter(item => item.category === activeCategory.value);
  }
  
  return menuItems;
});
</script>

<style scoped>
/* Custom scrollbar for menu navigation */
.overflow-x-auto::-webkit-scrollbar {
  height: 4px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
