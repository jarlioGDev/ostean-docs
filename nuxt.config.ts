// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', 'nuxt-headlessui', 'nuxt-icon', '@vueuse/nuxt'],
  ssr: false,
  nitro: {
    preset: 'service-worker'
  },
  // Optionally change the default prefix.
  headlessui: {
    prefix: 'Headless'
  }
})
