<template>
  <div class="bg-black text-white min-h-screen">
    <!-- Navigation bar -->
    <nav class="flex justify-between items-center p-4">
      <!-- Logo and Navigation Links -->
      <div class="flex items-center space-x-6">
        <!-- ใช้ SVG โลโก้แทนรูปภาพ -->
        <div class="h-8">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" class="h-full w-full">
            <circle cx="50" cy="50" r="50" fill="#4CAF50" />
            <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="20" dy=".3em">
              LOGO
            </text>
          </svg>
        </div>
        <a href="#" class="hover:text-green-400">{{ $t("menu.buy") }}</a>
        <a href="#" class="hover:text-green-400">{{ $t("menu.platform") }}</a>
        <a href="#" class="hover:text-green-400">{{ $t("menu.more") }}</a>
      </div>

      <!-- Language switcher and buttons -->
      <div class="flex items-center space-x-4">
        <div class="relative">
          <!-- Language dropdown -->
          <button @click="toggleDropdown" class="flex items-center bg-gray-800 px-3 py-2 rounded-lg">
              <!-- แสดงธงตามภาษาที่เลือก -->
              <img :src="currentFlag" alt="Selected Language" class="h-4 w-6" />
              <span>{{ currentLanguage }}</span>
              <svg class="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          <div v-if="isDropdownOpen" class="absolute mt-2 bg-white text-black py-2 w-20 rounded-lg shadow-lg">
            <!-- ใช้ไฟล์ SVG ธงอังกฤษ -->
            <button @click="switchLanguage('en')" class="flex items-center px-4 py-2 hover:bg-gray-200">
              <img :src="enFlag" alt="EN" class="h-4 w-6" />
              <span>EN</span>
            </button>

            <!-- ใช้ไฟล์ SVG ธงไทย -->
            <button @click="switchLanguage('th')" class="flex items-center px-4 py-2 hover:bg-gray-200">
              <img :src="thFlag" alt="TH" class="h-4 w-6" />
              <span>TH</span>
            </button>

            <!-- ใช้ไฟล์ SVG ธงลาว -->
            <button @click="switchLanguage('lo')" class="flex items-center px-4 py-2 hover:bg-gray-200">
              <img :src="loFlag" alt="LO" class="h-4 w-6" />
              <span>LA</span>
            </button>

            <!-- ใช้ไฟล์ SVG ธงจีน -->
            <button @click="switchLanguage('zh')" class="flex items-center px-4 py-2 hover:bg-gray-200">
              <img :src="zhFlag" alt="ZH" class="h-4 w-6" />
              <span>CN</span>
            </button>

            <!-- ใช้ไฟล์ SVG ธงญี่ปุ่น -->
            <button @click="switchLanguage('jp')" class="flex items-center px-4 py-2 hover:bg-gray-200">
              <img :src="jpFlag" alt="JP" class="h-4 w-6" />
              <span>JP</span>
            </button>
          </div>
        </div>

        <a href="#" class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg">{{
          $t("buttons.open_account") }}</a>
        <a href="#" class="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg">{{ $t("buttons.login") }}</a>
      </div>
    </nav>

    <!-- Hero section -->
    <div class="text-center mt-16">
      <h1 class="text-4xl font-bold">{{ $t("hero.title") }}</h1>
      <h2 class="text-3xl text-green-500 mt-4">{{ $t("hero.subtitle") }}</h2>
      <p class="text-lg mt-6 max-w-2xl mx-auto">{{ $t("hero.description") }}</p>
      <button class="mt-8 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg">
        {{ $t("hero.cta") }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

import thFlag from '~/assets/flags/th.svg'
import enFlag from '~/assets/flags/en.svg'
import loFlag from '~/assets/flags/lo.svg'
import zhFlag from '~/assets/flags/zh.svg'
import jpFlag from '~/assets/flags/jp.svg'

const isDropdownOpen = ref(false)
const { locale } = useI18n()

// ฟังก์ชันเพื่อกำหนดธงตามภาษาที่เลือก
const currentFlag = computed(() => {
  switch (locale.value) {
    case 'th':
      return thFlag
    case 'en':
      return enFlag
    case 'lo':
      return loFlag
    case 'zh':
      return zhFlag
    case 'jp':
      return jpFlag
    default:
      return enFlag
  }
})

// แสดงชื่อภาษาปัจจุบัน
const currentLanguage = computed(() => {
  switch (locale.value) {
    case 'th':
      return 'TH'
    case 'en':
      return 'EN'
    case 'lo':
      return 'LA'
    case 'zh':
      return 'CN'
    case 'jp':
      return 'JP'
    default:
      return 'EN'
  }
})


function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

function switchLanguage(lang) {
  locale.value = lang;
  localStorage.setItem("selectedLanguage", lang); // บันทึกค่าภาษาใน localStorage
  isDropdownOpen.value = false;
}

// อ่านค่าภาษาเก่าจาก localStorage เมื่อตอนโหลดหน้าเว็บ
onMounted(() => {
  const savedLanguage = localStorage.getItem("selectedLanguage");
  if (savedLanguage) {
    locale.value = savedLanguage;
  }
});
</script>

<style scoped>
/* Custom styles for the hero section if needed */
</style>
