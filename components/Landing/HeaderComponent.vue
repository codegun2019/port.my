<template>
  <div class="bg-black text-white min-h-screen" id="section-header">
      <!-- Hero section -->
      <div :style="{ backgroundImage: `url(${cover})` }" class="text-center pt-[200px] px-5 bg-[50%_0] bg-no-repeat md:bg-cover md:bg-center  h-screen">
        <section class="container mx-auto" id="header-section">
          <h1 class="text-4xl font-bold">{{ $t("hero.title") }}</h1>
          <h2 class="text-3xl text-primary-500 mt-4">{{ $t("hero.subtitle") }}</h2>
          <p class="text-lg mt-6 max-w-2xl mx-auto text-secondary-500">{{ $t("hero.description") }}</p>
          <button class="mt-8 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg">
            {{ $t("hero.cta") }}
          </button>
        </section>
      </div>
    
    <!-- Hero section Tab -->
    <section class="bg-dark-900 text-white py-4">
      <div class="flex justify-between items-center text-center">
        <div class="flex-1">
          <h2 class="text-lg font-bold">LotBack</h2>
          <p class="text-sm">โปรแกรม</p>
        </div>
        <div class="flex-1">
          <h2 class="text-lg font-bold">0.0</h2>
          <p class="text-sm">สเปรดต่ำ</p>
        </div>
        <div class="flex-1">
          <h2 class="text-lg font-bold">STP</h2>
          <p class="text-sm">บัญชี</p>
        </div>
        <div class="flex-1">
          <h2 class="text-lg font-bold">ฟรีสว็อป</h2>
          <p class="text-sm">คอมมิชชั่น</p>
        </div>
      </div>
    </section>
  </div>
</template>


<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

import cover from '~/assets/images/cover-landing.png'

const isDropdownOpen = ref(false)
const { locale } = useI18n()


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
