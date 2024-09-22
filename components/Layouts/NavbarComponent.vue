<template>
  <div class="bg-black text-white">
    <!-- Navigation bar -->
    <nav class="flex justify-between items-center p-4">
      <!-- Logo and Hamburger menu icon for mobile -->
      <div class="flex items-center space-x-0 sm:space-x-6">
        <div class="h-8 hidden sm:block" >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" class="h-full w-full">
            <circle cx="50" cy="50" r="50" fill="#4CAF50" />
            <text x="50%" y="50%" text-anchor="middle" fill="white" font-size="20" dy=".3em">LOGO</text>
          </svg>
        </div>

        <!-- Hamburger icon for mobile -->
        <button @click="toggleMobileMenu" class="md:hidden block">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-8 w-8">
            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Menu items (hidden on mobile, shown on desktop) -->
        <div :class="{'hidden': isMobileMenuOpen, 'hidden': !isMobileMenuOpen}" class="md:flex md:space-x-6">
          <a href="#" class="hover:text-primary-400">{{ $t("menu.buy") }}</a>
          <a href="#" class="hover:text-primary-400">{{ $t("menu.platform") }}</a>
          <a href="#" class="hover:text-primary-400">{{ $t("menu.more") }}</a>
        </div>
      </div>

      <!-- Language switcher and buttons (shown in both mobile and desktop) -->
      <div class="flex items-center space-x-4">
        <div class="relative">
          <!-- Language dropdown -->
          <button @click="toggleDropdown" class="flex items-center bg-gray-800 px-3 py-2 rounded-lg">
            <img :src="currentFlag" alt="Selected Language" class="h-4 w-6" />
            <span>{{ currentLanguage }}</span>
            <svg class="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          <div v-if="isDropdownOpen" class="absolute mt-2 bg-white text-black py-2 w-20 rounded-lg shadow-lg">
            <button @click="switchLanguage('en')" class="flex items-center px-4 py-2 hover:bg-gray-200">
              <img :src="enFlag" alt="EN" class="h-4 w-6" />
              <span>EN</span>
            </button>
            <button @click="switchLanguage('th')" class="flex items-center px-4 py-2 hover:bg-gray-200">
              <img :src="thFlag" alt="TH" class="h-4 w-6" />
              <span>TH</span>
            </button>
            <button @click="switchLanguage('lo')" class="flex items-center px-4 py-2 hover:bg-gray-200">
              <img :src="loFlag" alt="LO" class="h-4 w-6" />
              <span>LA</span>
            </button>
            <button @click="switchLanguage('zh')" class="flex items-center px-4 py-2 hover:bg-gray-200">
              <img :src="zhFlag" alt="ZH" class="h-4 w-6" />
              <span>CN</span>
            </button>
            <button @click="switchLanguage('jp')" class="flex items-center px-4 py-2 hover:bg-gray-200">
              <img :src="jpFlag" alt="JP" class="h-4 w-6" />
              <span>JP</span>
            </button>
          </div>
        </div>

        <a href="#"  class="px-4 py-2 bg-primary-500 hover:bg-primary-700 text-white rounded-lg">{{ $t("buttons.open_account") }}</a>
        <a href="#" class="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg hidden sm:block">{{ $t("buttons.login") }}</a>
      </div>
    </nav>

    <!-- Fullscreen Mobile Menu -->
    <div
      v-if="isMobileMenuOpen"
      class="fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center z-50"
    >
      <button @click="toggleMobileMenu" class="absolute top-4 right-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <a href="#" class="text-2xl py-4">{{ $t("menu.buy") }}</a>
      <a href="#" class="text-2xl py-4">{{ $t("menu.platform") }}</a>
      <a href="#" class="text-2xl py-4">{{ $t("menu.more") }}</a>

      <div class="flex items-center space-x-4 py-4">
        <a href="#" class="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg">{{ $t("buttons.open_account") }}</a>
        <a href="#" class="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg">{{ $t("buttons.login") }}</a>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, computed } from "vue";
import { useI18n } from "vue-i18n";
import thFlag from '~/assets/flags/th.svg'
import enFlag from '~/assets/flags/en.svg'
import loFlag from '~/assets/flags/lo.svg'
import zhFlag from '~/assets/flags/zh.svg'
import jpFlag from '~/assets/flags/jp.svg'

const isDropdownOpen = ref(false)
const isMobileMenuOpen = ref(false)
const { locale } = useI18n()

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

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function switchLanguage(lang) {
  locale.value = lang;
  localStorage.setItem("selectedLanguage", lang);
  isDropdownOpen.value = false;
}

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
