<template>
  <header class="bg-gray-100 p-4">
    <nav class="flex justify-between">
      <div>
        <NuxtLink to="/" class="font-bold">{{ $t('welcome') }}</NuxtLink>
        <NuxtLink to="/about" class="ml-4">{{ $t('about') }}</NuxtLink> <!-- ลิงก์ไปยังหน้า about -->
      </div>
      <div>
        <button @click="switchLanguage('en')" class="mr-2" :class="{ 'font-bold': currentLocale === 'en' }">English</button>
        <button @click="switchLanguage('th')" :class="{ 'font-bold': currentLocale === 'th' }">ไทย</button>
      </div>
    </nav>
  </header>
</template>

<script setup>
const { locale } = useI18n()

const currentLocale = locale

function switchLanguage(lang) {
  locale.value = lang
}
</script>

<style scoped>
.font-bold {
  font-weight: bold;
}
</style>
