<template>
  <section class="bg-primaryDarkNight" id="section-start-trader">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <!-- Left image section -->
      <div class="bg-cover bg-cover bg-no-repeat":style="{
          backgroundImage: `url(${BglightImage})`,
        }">
        <div>
          <img :src="footerImage" alt="img-footer" />
        </div>
      </div>
      <!-- Right content section -->
      <div class="flex items-center px-[16px] pb-[62px] pt-[16px] md:pb-0 md:pt-[0]">
        <div>
          <div>
            <h2 class="text-4xl mt-5 mb-5 font-bold lg:text-left xl:tex-teft text-center">
              <span class="text-white">เริ่มต้นซื้อขายในตลาดโลกได้แล้ววันนี้</span>
            </h2>
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
    </div>
  </section>
</template>

<script setup>
import BglightImage from '~/assets/images/bg-light.png'
import footerImage from '~/assets/images/landing/footer-img.png'
</script>
