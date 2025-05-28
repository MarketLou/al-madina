<template>
  <div class="pt-48 md:pt-56">
    <!-- Hero Section with Background Image -->
    <div 
      class="relative w-full h-48 md:h-64 bg-cover bg-center flex items-center" 
      style="background-image: url('/images/menu-background.jpg')"
    >
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="container mx-auto px-4 relative z-10">
        <h1 class="text-4xl md:text-5xl font-bold text-white">
          {{ $t('cart.title') || 'Your Cart' }}
        </h1>
        <p class="text-xl text-white mt-2">
          {{ $t('cart.subtitle') || 'Review your items and checkout' }}
        </p>
      </div>
    </div>

    <!-- Cart Container -->
    <div class="bg-[#FEFAEB] min-h-screen">
      <div class="container mx-auto px-4 py-8">
        <!-- Loading State -->
        <div v-if="cartStore.loading" class="flex justify-center items-center py-20">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>

        <template v-else>
          <!-- Empty Cart -->
          <div v-if="!cartStore.cart || cartStore.cartItems.length === 0" class="text-center py-16">
            <div class="text-5xl mb-4">🛒</div>
            <h2 class="text-2xl font-medium mb-2">{{ $t('cart.empty') || 'Your cart is empty' }}</h2>
            <p class="text-gray-600 mb-6">{{ $t('cart.emptyMessage') || 'Add some items to get started' }}</p>
            <NuxtLink 
              to="/menu" 
              class="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition-colors inline-block"
            >
              {{ $t('cart.browseMenu') || 'Browse Menu' }}
            </NuxtLink>
          </div>

          <!-- Cart Items -->
          <div v-else>
            <div class="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <div class="p-6 border-b border-gray-200">
                <h2 class="text-xl font-medium">{{ $t('cart.items') || 'Cart Items' }}</h2>
              </div>
              
              <!-- Cart Item List -->
              <div class="divide-y divide-gray-200">
                <div 
                  v-for="item in cartStore.cartItems" 
                  :key="item.id"
                  class="p-6 flex flex-col md:flex-row md:items-center"
                >
                  <!-- Item Details -->
                  <div class="flex-1 mb-4 md:mb-0">
                    <h3 class="font-medium">{{ item.title }}</h3>
                    <p class="text-gray-600 text-sm">{{ item.description }}</p>
                    <div class="text-gray-900 mt-1">{{ formatPrice(item.unit_price) }}</div>
                  </div>
                  
                  <!-- Quantity Controls -->
                  <div class="flex items-center mr-4">
                    <button 
                      @click="updateCartItem(item.id, item.quantity - 1)" 
                      class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md"
                      :disabled="item.quantity <= 1 || cartStore.loading"
                    >
                      -
                    </button>
                    <div class="w-10 h-8 flex items-center justify-center border-t border-b border-gray-300">
                      {{ item.quantity }}
                    </div>
                    <button 
                      @click="updateCartItem(item.id, item.quantity + 1)" 
                      class="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md"
                      :disabled="cartStore.loading"
                    >
                      +
                    </button>
                  </div>
                  
                  <!-- Item Total & Remove -->
                  <div class="flex items-center justify-between md:w-32">
                    <div class="font-medium">{{ formatPrice(item.unit_price * item.quantity) }}</div>
                    <button 
                      @click="removeCartItem(item.id)" 
                      class="text-red-500 hover:text-red-700 ml-4"
                      :disabled="cartStore.loading"
                    >
                      <span class="sr-only">Remove</span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Order Summary -->
            <div class="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <div class="p-6 border-b border-gray-200">
                <h2 class="text-xl font-medium">{{ $t('cart.summary') || 'Order Summary' }}</h2>
              </div>
              <div class="p-6">
                <div class="flex justify-between mb-2">
                  <span>{{ $t('cart.subtotal') || 'Subtotal' }}</span>
                  <span>{{ formatPrice(cartStore.subtotal) }}</span>
                </div>
                <div class="flex justify-between mb-2 text-gray-600">
                  <span>{{ $t('cart.shipping') || 'Shipping' }}</span>
                  <span>{{ formatPrice(0) }}</span>
                </div>
                <div class="flex justify-between mb-2 text-gray-600">
                  <span>{{ $t('cart.tax') || 'Tax' }}</span>
                  <span>{{ formatPrice(cartStore.cart?.tax_total || 0) }}</span>
                </div>
                <div class="border-t border-gray-200 my-4"></div>
                <div class="flex justify-between font-medium text-lg">
                  <span>{{ $t('cart.total') || 'Total' }}</span>
                  <span>{{ formatPrice(cartStore.total) }}</span>
                </div>
              </div>
            </div>
            
            <!-- Checkout Button -->
            <div class="flex justify-end">
              <button 
                @click="checkout" 
                class="bg-gray-800 text-white px-8 py-3 rounded-md hover:bg-gray-700 transition-colors"
                :disabled="cartStore.loading || checkoutLoading"
              >
                <span v-if="cartStore.loading || checkoutLoading">{{ $t('cart.processing') || 'Processing...' }}</span>
                <span v-else>{{ $t('cart.checkout') || 'Checkout' }}</span>
              </button>
            </div>

            <!-- Order Success Message -->
            <div v-if="orderSuccess" class="mt-8 bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <div class="text-5xl mb-4">✅</div>
              <h2 class="text-2xl font-medium mb-2">{{ $t('cart.orderSuccess') || 'Order Placed Successfully!' }}</h2>
              <p class="text-gray-600 mb-2">{{ $t('cart.orderMessage') || 'Thank you for your order.' }}</p>
              <p class="text-gray-800 font-medium mb-6">{{ $t('cart.orderNumber') || 'Order ID' }}: {{ orderId }}</p>
              <NuxtLink 
                to="/menu" 
                class="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition-colors inline-block"
              >
                {{ $t('cart.continueShopping') || 'Continue Shopping' }}
              </NuxtLink>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '~/stores/cart';

// Initialize cart store
const cartStore = useCartStore();
const checkoutLoading = ref(false);
const orderSuccess = ref(false);
const orderId = ref(null);

// Fetch cart on page load
onMounted(async () => {
  await cartStore.fetchCart();
});

// Format price from cents to dollars
const formatPrice = (cents) => {
  if (!cents) return '$0.00';
  return `$${(cents / 100).toFixed(2)}`;
};

// Update cart item quantity
async function updateCartItem(itemId, quantity) {
  if (quantity < 1) return;
  await cartStore.updateItem(itemId, quantity);
}

// Remove item from cart
async function removeCartItem(itemId) {
  await cartStore.removeItem(itemId);
}

// Checkout process
async function checkout() {
  checkoutLoading.value = true;
  
  try {
    const order = await cartStore.checkout();
    
    if (order) {
      orderSuccess.value = true;
      orderId.value = order.id;
    }
  } catch (error) {
    console.error('Checkout error:', error);
  } finally {
    checkoutLoading.value = false;
  }
}
</script>

<style scoped>
/* Add any cart-specific styles here */
</style>
