<template>
<div class="bg-primaryDarkNight text-white">
  <section class="mx-auto" id="section-platform">
    <div class="container mx-auto px-[16px]">
      <div class="grid grid-cols-1 lg:grid-cols-2">
        <!-- Image section -->
        <div class="flex justify-center px-[52px] pt-[62px] sm:px-0 lg:pt-[82px]">
          <img :src="appTradeImage" alt="app-trade-platforms" />
        </div>
        
        <!-- Content section -->
        <div class="pb-[44px] pt-[42px] text-center lg:pt-[100px] lg:text-end">
          <h2 class="text-4xl font-bold text-white">
            สัญญาณคำสั่งซื้อขายรวดเร็ว
          </h2>
          <p class="mt-[20px] text-body-4 text-gray-400 sm:text-body-3">
            กำลังมองหาแอปการซื้อขายที่รวดเร็วและเชื่อถือได้อยู่ใช่ไหม? แอป IUX ของเราเป็นเลิศ ปรับแต่งได้ และสมบูรณ์แบบสำหรับการซื้อขายที่ราบรื่น ดำเนินการซื้อขายและจัดการคำสั่งซื้อได้อย่างง่ายดายบนหน้าจอเดียว
          </p>
          <div class="mt-[24px] flex justify-center lg:justify-end">
            <NuxtLink to="/">
              <button
                class="py-[10px] px-[16px] bg-primary-500 text-white rounded-full hover:bg-primary-600 disabled:bg-[#2F2F2F] disabled:text-[#666666] max-h-[44px] btn-primary-iux-round whitespace-nowrap"
              >
                IUX/ App Trade
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script setup>
import appTradeImage from '~/assets/images/platforms/app-trade-platforms.png'
</script>
