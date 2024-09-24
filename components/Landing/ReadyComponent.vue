<template>
  <div class="bg-primaryDarkNight text-white py-16 px-4 lg:px-24 pt-16">
    <section class="container mx-auto" id="ready-section">
    <!-- Section Header -->
      <div class="text-center my-10">
        <h2 class="text-5xl font-bold mb-24 mt-24">
          <span class="text-primary-400">พร้อม</span>ที่จะซื้อขายหรือยัง?
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-16 mb-24">
        <!-- Card 1: Market Analysis -->
        <div class="bg-dark-900 rounded-xl pt-16 px-5 text-center border border-dark-400 flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-bold mb-4">เข้าถึงการวิเคราะห์ได้ตลอด</h3>
            <p class="text-gray-400 mb-6">
              ดูแผนภูมิตลาดเพื่อติดตามข่าวสารล่าสุดของตลาด ในช่วงเวลานั้นๆ
            </p>
          </div>
          <img :src="Ready1Image" alt="Market Analysis Image" class="w-1/1.5 h-auto mx-auto rounded-lg">
        </div>

        <!-- Card 2: Popular Assets -->
        <div class="bg-dark-900 rounded-xl pt-16 px-5 text-center border border-dark-400 flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-bold mb-4">สินทรัพย์ยอดนิยม</h3>
            <p class="text-gray-400 mb-6">
              ดูตลาดโลกตามตราสารต่างๆ เพื่อการค้าขนาดมาร่ำรวย สเปรด และสปีดที่รวดเร็ว
            </p>
          </div>
          <img :src="Ready2Image" alt="Market Analysis Image" class="w-1/1.5 h-auto mx-auto rounded-lg">
        </div>

        <!-- Card 3: Economic Calendar -->
        <div class="bg-dark-900 rounded-xl pt-16 px-5 text-center border border-dark-400 flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-bold mb-4">ปฏิทินเศรษฐกิจ</h3>
            <p class="text-gray-400 mb-6">
              ติดตามข่าวการตลาดล่าสุดและกิจกรรมทางเศรษฐกิจที่กำลังจะเกิดขึ้นได้ทุกที่ ทุกเวลา
            </p>
          </div>
          <img :src="Ready3Image" alt="Market Analysis Image" class="w-1/1.5 h-auto mx-auto rounded-lg">
        </div>
      </div>

    </section>
  </div>
</template>

<script setup>
import Ready1Image from '~/assets/images/ready_1.png'
import Ready2Image from '~/assets/images/ready_2.png'
import Ready3Image from '~/assets/images/ready_3.png'

</script>

<style scoped>
.border-Color\/background-card {
  --tw-border-opacity: 1;
  border-color: rgb(39 39 39 / var(--tw-border-opacity));
}

*,
::before,
::after {

  border-color: #272727;
}
</style>
