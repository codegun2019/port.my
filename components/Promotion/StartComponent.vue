<template>
  <section class="bg-primaryDarkNight" id="section-start-trader">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <!-- Right content section -->
      <div class="flex items-center px-[16px] pb-[62px] pt-[16px] md:pb-0 md:pt-[0]">
        <div class="px-5">
          <div>
            <h3 class="text-4xl font-bold mb-4 text-center md:text-left">
              <span class="text-white">เริ่มต้นซื้อขายกับ my</span>
              <span class="text-primary-500">port</span>
              <span class="text-white">ได้แล้ววันนี้</span>
            </h3>
            <p class="mt-2 text-center text-secondary-400 md:text-start lg:text-body-3">
              พร้อมให้ซื้อขายแล้วทุกแพลตฟอร์ม IUX Web Trade, IUX App Trade, และ MetaTrader5
            </p>
          </div>
          <div class="mt-3 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
            <a href="https://portal.iux.com/th/register">
              <button
                class="py-[10px] px-[16px] bg-primary-500 text-primary-900 rounded-full hover:bg-primary-600 disabled:bg-[#2F2F2F] disabled:text-[#666666] max-h-[44px] btn-primary-iux-round whitespace-nowrap"
              >
                ซื้อขายด้วย 0.0 pips
              </button>
            </a>
            <a href="https://portal.iux.com/th/register">
              <button
                class="py-[10px] px-[16px] bg-transparent border border-primary-500 rounded-full hover:bg-primary-600 text-primary max-h-[44px] whitespace-nowrap text-primary-100"
              >
                บัญชีทดลอง
              </button>
            </a>
          </div>
        </div>
      </div>
      <!-- Left image section -->
      <div class="bg-cover bg-cover bg-no-repeat":style="{
          backgroundImage: `url(${BglightImage})`,
        }">
        <div>
          <img :src="footerImage" alt="img-footer" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BglightImage from '~/assets/images/bg-light.png'
import footerImage from '~/assets/images/landing/footer-img.png'
</script>
