<template>
  <section id="section-trader" :style="{
      backgroundImage: `url(${BglightImage})`,
    }" class="bg-bottom 2xl:bg-contain bg-left bg-black min-h-screen bg-top text-white bg-[80%_0%] bg-no-repeat">
    <div class="container mx-auto px-[16px]">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <!-- Left content -->
        <div class="flex items-center justify-center pl-0 pt-[62px] lg:justify-start lg:pl-12 lg:pt-0">
          <div>
            <h2 class="text-4xl lg:text-left xl:tex-teft text-center font-bold">
              MetaTrader<span class="text-primary-500">5</span>
            </h2>
            <h2 class="mt-[16px] text-center text-body-2 text-white sm:text-body-1 md:mt-0 lg:text-start lg:text-heading-6">
              เทอร์มินอลซื้อขายที่ทรงพลัง
            </h2>
            <p class="mt-3 text-center text-body-4 text-secondary-500 sm:text-body-3 lg:text-start lg:text-heading-body">
              การซื้อขายที่ประสบความสำเร็จเริ่มต้นด้วยการซื้อขายที่สะดวกและใช้งานได้จริง MetaTrader เป็นตัวเลือกที่ดีที่สุดสำหรับเทรดเดอร์ยุคใหม่
            </p>
            <div class="flex justify-center lg:justify-start">
              <a href="th/platforms/mt5">
                <button class="bg-transparent text-primary-500 hover:text-secondary-500 text-primary mt-[16px] flex items-center px-0 font-[500] text-primary">
                  ดูเพิ่มเติม&nbsp;
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
                    <path fill-rule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clip-rule="evenodd"></path>
                  </svg>
                </button>
              </a>
            </div>

            <!-- Download buttons for MetaTrader -->
            <div class="mt-[50px] hidden lg:block">
              <div class="mb-0 ms-0 text-body-4 text-secondary sm:text-body-3 md:mb-[28px] lg:text-heading-body">ดาวน์โหลด MetaTrader ได้ที่</div>
              <div class="flex max-w-[315px] flex-wrap items-center">
                <div class="basis-1/3">
                  <a target="_blank" href="https://download.mql5.com/cdn/web/iux.markets.limited/mt5/iuxmarkets5setup.exe">
                    <img :src="mt5Windows" alt="windows" class="w-100 mb-2" />
                  </a>
                </div>
                <div class="basis-1/3">
                  <a target="_blank" href="https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.dmg">
                    <img :src="mt5Macos" alt="macos" class="w-100 mb-2" />
                  </a>
                </div>
                <div class="basis-1/3">
                  <a target="_blank" href="https://download.mql5.com/cdn/mobile/mt5/android">
                    <img :src="mt5Android" alt="android" class="w-100 mb-2" />
                  </a>
                </div>
                <div class="basis-1/3">
                  <a target="_blank" href="https://download.mql5.com/cdn/mobile/mt5/ios">
                    <img :src="mt5Ios" alt="ios" class="w-100 mb-2" />
                  </a>
                </div>
                <div class="basis-1/3">
                  <a target="_blank" href="https://portal.iux.com/en/webterminal/version5?sever=live">
                    <img :src="mt5Web" alt="web" class="w-100 mb-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right content: Image -->
        <div class="flex justify-center px-[30px] 2xl:px-[150px] xl:px-[150px] lg:px-[50px] py-[40px] lg:py-[128px]">
          <div>
            <img :src="mt5Image" alt="tradeonmobile" width="100%" />
            <div class="mt-[50px] block lg:hidden">
              <div class="mb-[16px] ms-0 text-center text-body-4 text-secondary sm:text-body-3 md:mb-[28px] lg:text-heading-body">
                ดาวน์โหลด MetaTrader ได้ที่
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BglightImage from '~/assets/images/bg-light.png'
import mt5Windows from '~/assets/images/landing/icons/mt5-windows.svg'
import mt5Macos from '~/assets/images/landing/icons/mt5-macos.svg'
import mt5Android from '~/assets/images/landing/icons/mt5-android.svg'
import mt5Ios from '~/assets/images/landing/icons/mt5-ios.svg'
import mt5Web from '~/assets/images/landing/icons/mt5-web.svg'
import mt5Image from '~/assets/images/landing/mt5.png'
</script>
