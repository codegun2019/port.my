<template>
  <div :style="{
      backgroundImage: `url(${BglightImage})`,
    }" class="bg-light 2xl:bg-bottom bg-top 2xl:bg-contain xl:bg-contain lg:bg-contain 2xl:bg-left bg-no-repeat bg-black text-white  min-h-screen flex items-center justify-center">
    <section  class=" px-[16px] py-[62px] md:py-[125px]" id="buysell-section">
      <div class="container mx-auto">
        <div class="container-section-custom">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <!-- Left side image -->
            <div class="">
              <div class="flex justify-center pb-[62px] md:pb-0 mt-16">
                <img :src="BuyphoneImage" alt="custom-image" />
              </div>
            </div>
            <!-- Right side content -->
            <div>
              <h2 class="text-5xl font-bold mb-24 mt-24 text-center 2xl:text-left xl:text-left">
                ซื้อขายง่ายๆ บน <span class="text-primary-400">มือถือ</span>
              </h2>
              <p class="mt-[28px] text-center text-button-2 md:text-heading-body lg:text-start">
                เข้าถึงตลาด CFD ผ่านแอปพลิเคชันมือถือที่ออกแบบมาให้ใช้งานง่าย ด้วยการดำเนินการตามคำสั่งที่รวดเร็ว 
                และประสิทธิภาพสูงสุดเพื่อการซื้อขายที่ราบรื่น
              </p>
              <div class="flex justify-center lg:justify-start">
                <a href="/your-link" class="mt-[16px]">
                  <button class="bg-transparent hover:text-secondary text-primary flex items-center font-[500]">
                    ดูเพิ่มเติม &nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                      <path fill-rule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clip-rule="evenodd"></path>
                    </svg>
                  </button>
                </a>
              </div>

              <div class="mt-8 flex justify-center gap-6 lg:justify-start">
                <!-- Embedded content or widgets -->
                <div class="your-widget-1" data-your-app-lazy="true"></div>
                <div class="your-widget-2" data-your-app-lazy="true"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import BuyphoneImage from '~/assets/images/tradeonmobile.png'
import BglightImage from '~/assets/images/bg-light.png'

</script>

<style scoped>

</style>
