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
        <!-- Loading State -->
        <div v-if="isLoading" class="flex justify-center items-center py-20">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>

        <template v-else>
          <!-- Menu Navigation -->
          <div class="overflow-x-auto mb-8">
            <div class="flex space-x-8 min-w-max border-b border-gray-200">
              <button 
                v-for="category in productCategories" 
                :key="category.id"
                @click="activeCategory = category.id"
                class="pb-2 px-1 -mb-px text-gray-700 hover:text-gray-900 transition-colors"
                :class="{ 'border-b-2 border-gray-800 font-medium': activeCategory === category.id }"
              >
                {{ category.name }}
              </button>
            </div>
          </div>
          
          <!-- Menu Items -->
          <div v-if="filteredProducts.length > 0">
            <div class="grid md:grid-cols-2 gap-6">
              <div 
                v-for="product in filteredProducts" 
                :key="product.id"
                class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div class="flex flex-col h-full">
                  <div v-if="product.thumbnail" class="mb-4 h-48 overflow-hidden rounded-md">
                    <img 
                      :src="product.thumbnail" 
                      :alt="product.title" 
                      class="w-full h-full object-cover"
                    >
                  </div>
                  <div class="flex-1">
                    <h3 class="font-medium text-lg">{{ product.title }}</h3>
                    <p class="text-gray-600 mt-1 line-clamp-2">{{ product.description }}</p>
                    <div class="mt-2 text-gray-900 font-medium">
                      {{ formatPrice(product.variants[0]?.prices[0]?.amount) }}
                    </div>
                  </div>
                  <div class="mt-4 flex justify-between items-center">
                    <div class="flex items-center">
                      <button 
                        @click="decrementQuantity(product.id)" 
                        class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md"
                        :disabled="productQuantities[product.id] <= 1"
                      >
                        -
                      </button>
                      <div class="w-10 h-8 flex items-center justify-center border-t border-b border-gray-300">
                        {{ productQuantities[product.id] || 1 }}
                      </div>
                      <button 
                        @click="incrementQuantity(product.id)" 
                        class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md"
                      >
                        +
                      </button>
                    </div>
                    <button 
                      @click="addToCart(product)" 
                      class="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
                      :disabled="cartStore.loading"
                    >
                      <span v-if="cartStore.loading">Adding...</span>
                      <span v-else>Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="text-center py-12">
            <p class="text-gray-600">{{ $t('menu.noItemsFound') }}</p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n();
import { useCartStore } from '~/stores/cart';

// Initialize cart store
const cartStore = useCartStore();

// Fetch cart on page load
onMounted(async () => {
  await cartStore.fetchCart();
});

// Active category and loading state
const activeCategory = ref(null);
const isLoading = ref(true);
const products = ref([]);
const productCategories = ref([]);
const productQuantities = ref({});

// Format price from cents to dollars
const formatPrice = (cents) => {
  if (!cents) return '$0.00';
  return `$${(cents / 100).toFixed(2)}`;
};

// Fetch products from Medusa
async function fetchProducts() {
  isLoading.value = true;
  
  try {
    const { $medusa, $medusaRegionId } = useNuxtApp();
    console.log('Fetching products from Medusa with region ID:', $medusaRegionId);
    
    // Get the response from Medusa with region_id
    const response = await $medusa.products.list({
      limit: 100,
      region_id: $medusaRegionId
    });
    
    console.log('Medusa response:', response);
    
    // Handle the response structure correctly
    if (response && response.products) {
      products.value = response.products;
      console.log('Products loaded:', products.value.length);
      
      // Extract unique categories from products
      const categories = new Map();
      
      products.value.forEach(product => {
        if (product.collection) {
          categories.set(product.collection.id, {
            id: product.collection.id,
            name: product.collection.title
          });
        }
      });
      
      productCategories.value = Array.from(categories.values());
      console.log('Categories found:', productCategories.value.length);
      
      // Set default active category if available
      if (productCategories.value.length > 0 && !activeCategory.value) {
        activeCategory.value = productCategories.value[0].id;
      } else if (productCategories.value.length === 0) {
        // If no categories, show all products
        activeCategory.value = null;
      }
      
      // Initialize quantities
      products.value.forEach(product => {
        productQuantities.value[product.id] = 1;
      });
    } else {
      console.error('Invalid response structure from Medusa API');
      products.value = [];
    }
  } catch (error) {
    console.error('Error fetching products:', error);
    products.value = [];
  } finally {
    isLoading.value = false;
  }
}

// Call fetchProducts on component mount
onMounted(() => {
  fetchProducts();
});

// Filter products based on active category
const filteredProducts = computed(() => {
  if (!activeCategory.value) return products.value;
  
  return products.value.filter(product => 
    product.collection && product.collection.id === activeCategory.value
  );
});

// Quantity management
function incrementQuantity(productId) {
  if (!productQuantities.value[productId]) {
    productQuantities.value[productId] = 1;
  }
  productQuantities.value[productId]++;
}

function decrementQuantity(productId) {
  if (productQuantities.value[productId] > 1) {
    productQuantities.value[productId]--;
  }
}

// Add to cart function
async function addToCart(product) {
  if (!product.variants || product.variants.length === 0) {
    console.error('Product has no variants');
    return;
  }
  
  const variantId = product.variants[0].id;
  const quantity = productQuantities.value[product.id] || 1;
  
  try {
    await cartStore.addItem(variantId, quantity);
    // Reset quantity after adding to cart
    productQuantities.value[product.id] = 1;
  } catch (error) {
    console.error('Error adding to cart:', error);
  }
}
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
