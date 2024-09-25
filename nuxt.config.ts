// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true }, // เปิด Devtools
  css: ['~/assets/css/main.css'], // การเพิ่มไฟล์ CSS ที่กำหนดเอง
  plugins: ['~/plugins/router-hooks.js'],
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
  modules: ['@nuxtjs/i18n', '@nuxtjs/google-fonts'], // แก้ไขรูปแบบโมดูลให้ถูกต้อง
  googleFonts: {
    families: {
      Anuphan: [100, 300, 400, 500, 700, 800] // เลือกน้ำหนักของฟอนต์ที่ต้องการ
    },
    display: 'swap', // ปรับการแสดงผลฟอนต์เพื่อป้องกัน FOUT
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', name: 'English' },
      { code: 'th', iso: 'th-TH', file: 'th.json', name: 'ไทย' },
      { code: 'zh', iso: 'zh-CN', file: 'zh.json', name: '中文' },
      { code: 'jp', iso: 'ja-JP', file: 'jp.json', name: '日本語' },
      { code: 'lo', iso: 'lo-LA', file: 'lo.json', name: 'ລາວ' }
    ],
    lazy: false, // ปิดการโหลดแบบ lazy เพื่อโหลดทุกภาษาในครั้งเดียว
    langDir: 'locales/', // โฟลเดอร์ที่เก็บไฟล์ JSON ของภาษา
    strategy: 'no_prefix', // ไม่ใช้คำนำหน้าสำหรับ URL ภาษา
    defaultLocale: 'th' // กำหนดภาษาไทยเป็นค่าเริ่มต้น
  },

  compatibilityDate: '2024-09-21'
})
