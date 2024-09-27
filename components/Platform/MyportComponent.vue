<template>
  <div class="bg-black text-white">
    <section class="mx-auto" id="section-myport">
      <div class="px-10">
        <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <!-- Text Section -->
          <div class="md:w-1/2 md:py-16 py-8">
            <h2 class="text-4xl font-bold">
              <span class="text-primary-400 underline">myport </span>App Trade
            </h2>
            <p class="mt-4 text-lg text-gray-400">
              พบกับตราสารมากกว่า 250+ รายการด้วยสเปรดที่ต่ำเป็นพิเศษ 0.0 pips ไม่มีรีโควต ราคาดีที่สุด
              และข้อจำกัดทางการค้าเป็นศูนย์ รับประกันโอกาสในการซื้อขายที่ราบรื่นและคุ้มค่าสำหรับลูกค้าคนสำคัญของเราที่ IUX
            </p>
            <div class="mt-6 flex flex-col xl:flex-row space-x-0 xl:space-x-4 flex gap-4 ">
              <NuxtLink to="/">
                <button
                  class="py-[10px] px-[16px] bg-primary-500 text-primary-900 rounded-full hover:bg-primary-600 disabled:bg-[#2F2F2F] disabled:text-[#666666] max-h-[44px] btn-primary-iux-round whitespace-nowrap"
                >
                  IUX/ App Trade
                </button>
              </NuxtLink>
              <NuxtLink to="/">
                <button
                  class="py-[10px] px-[16px] bg-transparent border border-primary-500 rounded-full hover:bg-primary-600 text-primary max-h-[44px] whitespace-nowrap text-primary-100"
                >
                  IUX/ Web Trade
                </button>
              </NuxtLink>
              <NuxtLink to="/">
                <button
                  class="py-[10px] px-[16px] bg-transparent border border-primary-500 rounded-full hover:bg-primary-600 text-primary max-h-[44px] whitespace-nowrap text-primary-100"
                >
                  MetaTrader5
                </button>
              </NuxtLink>
              <NuxtLink to="/">
                <button
                  class="py-[10px] px-[16px] bg-transparent border border-primary-500 rounded-full hover:bg-primary-600 text-primary max-h-[44px] whitespace-nowrap text-primary-100"
                >
                  MetaTrader5 WebTerminal
                </button>
              </NuxtLink>
            </div>
          </div>

          <!-- Image Section -->
          <div class="md:w-1/2 mt-8 md:mt-0 px-5 lg:px-16 pt-16">
            <img :src="myportImage" alt="Phone Image" class="w-[80%] h-auto mx-auto">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import myportImage from '~/assets/images/trade-image.png'
import checkIcon from '~/assets/flags/check.svg'
import bighomefast from '~/assets/flags/bighomefast.svg'
import bighomeone from '~/assets/flags/bighomeone.svg'
import bighomemoney from '~/assets/flags/bighomemoney.svg'

</script>

<style scoped>

</style>
