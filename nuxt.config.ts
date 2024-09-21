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
  
  // การตั้งค่าแถบโหลด
  loading: {
    color: '#00C58E', // สีของแถบโหลด
    height: '4px', // ความสูงของแถบโหลด
    continuous: true // ให้โหลดอย่างต่อเนื่อง
  },
  
  // การตั้งค่า loading indicator (ในโหมด SPA)
  loadingIndicator: {
    name: 'circle', // รูปแบบการแสดงโหลด (เช่น circle, cube, pulse)
    color: '#00C58E', // สีของแอนิเมชันโหลด
    background: 'white' // สีพื้นหลังขณะโหลด
  },

  modules: ['@nuxtjs/i18n'], // เพิ่ม i18n เป็นโมดูล
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
