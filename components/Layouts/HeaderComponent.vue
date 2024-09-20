<template>
  <div class="bg-black text-white min-h-screen">
    <!-- Navigation bar -->
    <nav class="flex justify-between items-center p-4">
      <!-- Logo and Navigation Links -->
      <div class="flex items-center space-x-6">
        <!-- ใช้ SVG โลโก้แทนรูปภาพ -->
        <div class="h-8">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" class="h-full w-full">
            <circle cx="50" cy="50" r="50" fill="#4CAF50"/>
            <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="20" dy=".3em">LOGO</text>
          </svg>
        </div>
        <a href="#" class="hover:text-green-400">{{ $t('menu.buy') }}</a>
        <a href="#" class="hover:text-green-400">{{ $t('menu.platform') }}</a>
        <a href="#" class="hover:text-green-400">{{ $t('menu.more') }}</a>
      </div>

      <!-- Language switcher and buttons -->
      <div class="flex items-center space-x-4">
        <div class="relative">
          <!-- Language dropdown -->
          <button @click="toggleDropdown" class="flex items-center bg-gray-800 px-3 py-2 rounded-lg">
            <!-- SVG สำหรับธงภาษาไทย -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="h-4 mr-2">
              <g fill-rule="evenodd">
                <path fill="#ff4b55" d="M0 0h640v480H0z"/>
                <path fill="#f5f5f5" d="M0 96h640v288H0z"/>
                <path fill="#2a5f9e" d="M0 192h640v96H0z"/>
              </g>
            </svg>
            <span>TH</span>
            <svg class="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          <div v-if="isDropdownOpen" class="absolute mt-2 bg-white text-black py-2 w-20 rounded-lg shadow-lg">
            <!-- SVG สำหรับธงภาษาอังกฤษ -->
            <button @click="switchLanguage('en')" class="flex items-center px-4 py-2 hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="h-4 mr-2">
                <path fill="#012169" d="M0 0h640v480H0z"/>
                <path fill="#FFF" d="M0 0l640 480m0-480L0 480" stroke="#FFF" stroke-width="60"/>
                <path fill="#C8102E" d="M0 0l640 480m0-480L0 480" stroke="#C8102E" stroke-width="40"/>
                <path fill="#FFF" d="M320 0v480M0 240h640" stroke="#FFF" stroke-width="100"/>
                <path fill="#C8102E" d="M320 0v480M0 240h640" stroke="#C8102E" stroke-width="60"/>
              </svg>
              <span>EN</span>
            </button>
            <!-- SVG สำหรับธงภาษาไทย -->
            <button @click="switchLanguage('th')" class="flex items-center px-4 py-2 hover:bg-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" class="h-4 mr-2">
                <g fill-rule="evenodd">
                  <path fill="#ff4b55" d="M0 0h640v480H0z"/>
                  <path fill="#f5f5f5" d="M0 96h640v288H0z"/>
                  <path fill="#2a5f9e" d="M0 192h640v96H0z"/>
                </g>
              </svg>
              <span>TH</span>
            </button>
          </div>
        </div>

        <a href="#" class="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg">{{ $t('buttons.open_account') }}</a>
        <a href="#" class="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg">{{ $t('buttons.login') }}</a>
      </div>
    </nav>

    <!-- Hero section -->
    <div class="text-center mt-16">
      <h1 class="text-4xl font-bold">{{ $t('hero.title') }}</h1>
      <h2 class="text-3xl text-green-500 mt-4">{{ $t('hero.subtitle') }}</h2>
      <p class="text-lg mt-6 max-w-2xl mx-auto">{{ $t('hero.description') }}</p>
      <button class="mt-8 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg">{{ $t('hero.cta') }}</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isDropdownOpen = ref(false)

function toggleDropdown() {
  isDropdownOpen.value = !isDropdownOpen.value
}

const { locale } = useI18n()

function switchLanguage(lang) {
  locale.value = lang
  // isDropdownOpen.value = false
}
</script>

<style scoped>
/* Custom styles for the hero section if needed */
</style>

