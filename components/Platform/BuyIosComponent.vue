<template>
  <div class="bg-primaryDarkNight 2xl:bg-bottom bg-top 2xl:bg-contain xl:bg-contain lg:bg-contain 2xl:bg-left bg-no-repeat bg-black text-white  flex items-center justify-center">
    <section class="px-[16px]" id="buysell-section">
      <div class="container mx-auto">
        <div class="container-section-custom">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <!-- Right side content (now on the left) -->
            <div>
              <h2 class="text-5xl font-bold mb-1 mt-24 text-center 2xl:text-left xl:text-left">
                <span class="text-primary-400">myport </span> สำหรับ IOS
              </h2>
              <p class="text-gray-400 mt-[28px] text-center mb-2 text-button-2 md:text-heading-body lg:text-start">
                เข้าถึงตลาด CFD ผ่านแอปพลิเคชันมือถือที่ออกแบบมาให้ใช้งานง่าย ด้วยการดำเนินการตามคำสั่งที่รวดเร็ว
                และประสิทธิภาพสูงสุดเพื่อการซื้อขายที่ราบรื่น
              </p>
              <div class="flex justify-center lg:justify-start">
                <img :src="IosImage" class="w-[200px]" alt="custom-image" />
              </div>

              <div class="mt-8 flex justify-center gap-6 lg:justify-start">
                <!-- Embedded content or widgets -->
                <div class="your-widget-1" data-your-app-lazy="true"></div>
                <div class="your-widget-2" data-your-app-lazy="true"></div>
              </div>
            </div>
            <!-- Left side image (now on the right) -->
            <div class="">
              <div class="flex justify-center pb-[62px] pb-0 md:pb-0 mt-16">
                <Forios/>
                <img :src="IosForImage" alt="custom-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Forios from '~/components/composables/Forios.vue'
import BuyphoneImage from '~/assets/images/tradeonmobile.png'

import IosImage from '~/assets/images/platforms/download-on-the-app-store.svg'
import IosForImage from '~/assets/images/platforms/for-ios.png'
</script>

<style scoped>
</style>
