import Medusa from '@medusajs/medusa-js'
import { defineNuxtPlugin } from '#app'

export const useRegionId = () => {
  const config = useRuntimeConfig()
  return config.public.MEDUSA_REGION
}

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const medusaUrl = config.public.MEDUSA_BACKEND_URL
  
  console.log('Initializing Medusa client with URL:', medusaUrl)
  console.log('Using Medusa region ID:', config.public.MEDUSA_REGION)
  
  const medusaClient = new Medusa({ 
    baseUrl: medusaUrl,
    maxRetries: 3,
    publishableApiKey: config.public.MEDUSA_PUBLISHABLE_API_KEY
  })

  return {
    provide: {
      medusa: medusaClient,
      medusaRegionId: config.public.MEDUSA_REGION
    }
  }
})
