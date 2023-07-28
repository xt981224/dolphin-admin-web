// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: Number(process.env.NUXT_PORT) || 4061
  },
  devtools: {
    enabled: true
  },
  /**
   * NOTE: 使用 VSCode 和 Volar Take Over Mode 时，可以禁用为 *.vue 文件生成的 d.ts 文件
   * https://nuxt.com/docs/getting-started/installation#new-project
   */
  typescript: {
    shim: false
  },
  // Vite 配置
  vite: {
    base: '/'
  },
  modules: ['@nuxtjs/tailwindcss']
})