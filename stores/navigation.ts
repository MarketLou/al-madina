import { defineStore } from 'pinia'

interface NavigationState {
  isMenuOpen: boolean
  currentLocale: string
}

export const useNavigationStore = defineStore('navigation', {
  state: (): NavigationState => ({
    isMenuOpen: false,
    currentLocale: 'en',
  }),

  actions: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
    setLocale(locale: string) {
      this.currentLocale = locale
    },
  },

  persist: true,
})
