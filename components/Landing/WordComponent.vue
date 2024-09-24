<template>
  <div class="bg-dark-500 text-white md:py-16 py-5 md:px-16 px-5 min-h-screen flex items-center justify-center">
    <section class="container mx-auto" id="myport-section">
      <div class="bg-dark-500 text-white py-16">
        <div class="container mx-auto text-center">
          <h3 class="text-5xl font-bold mb-24 mt-24">
            ตลาดโลก<span class="text-primary-400">อยู่เพียง</span>ปลายนิ้วมือของคุณ?
          </h3>

          <div class="mt-5 flex flex-wrap justify-center gap-4 mx-auto" style="max-width:895px">
            <!-- Card 1 -->
            <div class="basis-[40%] md:basis-[30%]">
              <div class="bg-dark-500 h-full border border-dark-400 rounded-[24px] pt-[24px] md:pt-[56px] pb-[24px]">
                <div class="flex justify-center mt-4">
                  <img :src="Word1Image" alt="CFD Icon" class="w-[42px] h-[42px] md:w-[62px] md:h-[62px] lg:h-[82px] lg:w-[82px]">
                </div>
                <h6 class="text-center text-white md:text-heading-body text-body-4 mt-4">สกุลเงิน</h6>
                <p class="text-center text-white mb-4 md:text-heading-body text-body-4">
                  <span class="text-primary-400"> 60+ </span>ผลิตภัณฑ์
                </p>
              </div>
            </div>

            <!-- Card 2 -->
            <div class="basis-[40%] md:basis-[30%]">
              <div class="bg-dark-500 h-full border border-dark-400 rounded-[24px] pt-[24px] md:pt-[56px] pb-[24px]">
                <div class="flex justify-center mt-4">
                  <img :src="Word1Image" alt="Stock Icon" class="w-[42px] h-[42px] md:w-[62px] md:h-[62px] lg:h-[82px] lg:w-[82px]">
                </div>
                <h6 class="text-center text-white md:text-heading-body text-body-4 mt-4">หุ้น</h6>
                <p class="text-center text-white mb-4 md:text-heading-body text-body-4">
                  <span class="text-primary-400"> 120+ </span>ผลิตภัณฑ์
                </p>
              </div>
            </div>

            <!-- Card 3 -->
            <div class="basis-[40%] md:basis-[30%]">
              <div class="bg-dark-500 h-full border border-dark-400 rounded-[24px] pt-[24px] md:pt-[56px] pb-[24px]">
                <div class="flex justify-center mt-4">
                  <img :src="Word1Image" alt="Index Icon" class="w-[42px] h-[42px] md:w-[62px] md:h-[62px] lg:h-[82px] lg:w-[82px]">
                </div>
                <h6 class="text-center text-white md:text-heading-body text-body-4 mt-4">ดัชนี</h6>
                <p class="text-center text-white mb-4 md:text-heading-body text-body-4">
                  <span class="text-primary-400"> 23+ </span>ผลิตภัณฑ์
                </p>
              </div>
            </div>

            <!-- Card 4 -->
            <div class="basis-[40%] md:basis-[30%]">
              <div class="bg-dark-500 h-full border border-dark-400 rounded-[24px] pt-[24px] md:pt-[56px] pb-[24px]">
                <div class="flex justify-center mt-4">
                  <img :src="Word1Image" alt="Crypto Icon" class="w-[42px] h-[42px] md:w-[62px] md:h-[62px] lg:h-[82px] lg:w-[82px]">
                </div>
                <h6 class="text-center text-white md:text-heading-body text-body-4 mt-4">Crypto CFD</h6>
                <p class="text-center text-white mb-4 md:text-heading-body text-body-4">
                  <span class="text-primary-400"> 5+ </span>ผลิตภัณฑ์
                </p>
              </div>
            </div>

            <!-- Card 5 -->
            <div class="basis-[40%] md:basis-[30%]">
              <div class="bg-dark-500 h-full border border-dark-400 rounded-[24px] pt-[24px] md:pt-[56px] pb-[24px]">
                <div class="flex justify-center mt-4">
                  <img :src="Word1Image" alt="Commodity Icon" class="w-[42px] h-[42px] md:w-[62px] md:h-[62px] lg:h-[82px] lg:w-[82px]">
                </div>
                <h6 class="text-center text-white md:text-heading-body text-body-4 mt-4">คอมโมดิตี้</h6>
                <p class="text-center text-white mb-4 md:text-heading-body text-body-4">
                  <span class="text-primary-400"> 19+ </span>ผลิตภัณฑ์
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Word1Image from '~/assets/flags/cfds.svg'
</script>

<style scoped>
.border-dark-400 {
  --tw-border-opacity: 1;
  border-color: rgb(39 39 39 / var(--tw-border-opacity));
}

.bg-dark-500 {
  background-color: #121212;
}
</style>
