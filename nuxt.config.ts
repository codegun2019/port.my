// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@nuxtjs/i18n'], // ตรวจสอบว่า i18n ถูกเพิ่มใน modules
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'th', iso: 'th-TH', file: 'th.json', name: 'ไทย' }
    ],
    lazy: true,
    langDir: 'locales/', // ชี้ไปที่โฟลเดอร์ที่เก็บไฟล์ JSON
    strategy: 'no_prefix', // ไม่ใช้คำนำหน้าใน URL
    defaultLocale: 'th' // กำหนดภาษาเริ่มต้น
  },

  compatibilityDate: '2024-09-21'
})