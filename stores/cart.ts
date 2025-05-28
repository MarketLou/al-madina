import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: null,
    loading: false,
    error: null
  }),

  getters: {
    cartItems: (state) => state.cart?.items || [],
    itemCount: (state) => state.cart?.items?.reduce((acc, item) => acc + item.quantity, 0) || 0,
    subtotal: (state) => state.cart?.subtotal || 0,
    total: (state) => state.cart?.total || 0
  },

  actions: {
    async initCart() {
      this.loading = true
      this.error = null
      
      try {
        const { $medusa, $medusaRegionId } = useNuxtApp()
        console.log('Creating new cart with region ID:', $medusaRegionId)
        const response = await $medusa.carts.create({
          region_id: $medusaRegionId
        })
        console.log('Cart creation response:', response)
        
        if (response && response.cart) {
          this.cart = response.cart
          
          // Store cart ID in localStorage for persistence
          if (process.client) {
            localStorage.setItem('medusa_cart_id', this.cart.id)
          }
          console.log('Cart created successfully with ID:', this.cart.id)
        } else {
          throw new Error('Invalid response structure from Medusa API')
        }
      } catch (err) {
        console.error('Failed to create cart:', err)
        this.error = err.message || 'Failed to create cart'
      } finally {
        this.loading = false
      }
    },

    async fetchCart() {
      if (process.client && localStorage.getItem('medusa_cart_id')) {
        this.loading = true
        this.error = null
        
        try {
          const { $medusa } = useNuxtApp()
          const cartId = localStorage.getItem('medusa_cart_id')
          console.log('Fetching cart with ID:', cartId)
          
          const response = await $medusa.carts.retrieve(cartId)
          console.log('Cart retrieval response:', response)
          
          if (response && response.cart) {
            this.cart = response.cart
            console.log('Cart fetched successfully')
          } else {
            console.error('Invalid response structure from Medusa API')
            await this.initCart()
          }
        } catch (err) {
          console.error('Failed to fetch cart:', err)
          this.error = err.message || 'Failed to fetch cart'
          
          // If cart not found, create a new one
          if (err.status === 404) {
            console.log('Cart not found, creating new cart')
            await this.initCart()
          }
        } finally {
          this.loading = false
        }
      } else {
        console.log('No cart ID found in localStorage, creating new cart')
        await this.initCart()
      }
    },

    async addItem(variantId, quantity = 1) {
      if (!this.cart?.id) {
        await this.fetchCart()
      }
      
      this.loading = true
      this.error = null
      
      try {
        const { $medusa } = useNuxtApp()
        console.log(`Adding item: variant ${variantId}, quantity ${quantity} to cart ${this.cart.id}`)
        
        const response = await $medusa.carts.lineItems.create(this.cart.id, {
          variant_id: variantId,
          quantity
        })
        
        console.log('Add item response:', response)
        
        if (response && response.cart) {
          this.cart = response.cart
          console.log('Item added successfully')
        } else {
          throw new Error('Invalid response structure from Medusa API')
        }
      } catch (err) {
        console.error('Failed to add item to cart:', err)
        this.error = err.message || 'Failed to add item to cart'
      } finally {
        this.loading = false
      }
    },

    async removeItem(lineItemId) {
      if (!this.cart?.id) return
      
      this.loading = true
      this.error = null
      
      try {
        const { $medusa } = useNuxtApp()
        console.log(`Removing item ${lineItemId} from cart ${this.cart.id}`)
        
        const response = await $medusa.carts.lineItems.delete(this.cart.id, lineItemId)
        console.log('Remove item response:', response)
        
        if (response && response.cart) {
          this.cart = response.cart
          console.log('Item removed successfully')
        } else {
          throw new Error('Invalid response structure from Medusa API')
        }
      } catch (err) {
        console.error('Failed to remove item from cart:', err)
        this.error = err.message || 'Failed to remove item from cart'
      } finally {
        this.loading = false
      }
    },

    async updateItem(lineItemId, quantity) {
      if (!this.cart?.id) return
      
      this.loading = true
      this.error = null
      
      try {
        const { $medusa } = useNuxtApp()
        console.log(`Updating item ${lineItemId} to quantity ${quantity} in cart ${this.cart.id}`)
        
        const response = await $medusa.carts.lineItems.update(this.cart.id, lineItemId, {
          quantity
        })
        
        console.log('Update item response:', response)
        
        if (response && response.cart) {
          this.cart = response.cart
          console.log('Item updated successfully')
        } else {
          throw new Error('Invalid response structure from Medusa API')
        }
      } catch (err) {
        console.error('Failed to update item in cart:', err)
        this.error = err.message || 'Failed to update item in cart'
      } finally {
        this.loading = false
      }
    },

    async checkout() {
      if (!this.cart?.id) return
      
      this.loading = true
      this.error = null
      
      try {
        const { $medusa } = useNuxtApp()
        console.log(`Completing checkout for cart ${this.cart.id}`)
        
        // Complete cart and create order
        const response = await $medusa.carts.complete(this.cart.id)
        console.log('Checkout response:', response)
        
        if (response && response.order) {
          // Clear cart from localStorage
          if (process.client) {
            localStorage.removeItem('medusa_cart_id')
          }
          
          // Reset cart state
          this.cart = null
          console.log('Checkout completed successfully')
          
          return response.order
        } else {
          throw new Error('Invalid response structure from Medusa API')
        }
      } catch (err) {
        console.error('Failed to checkout:', err)
        this.error = err.message || 'Failed to checkout'
        return null
      } finally {
        this.loading = false
      }
    }
  }
})
