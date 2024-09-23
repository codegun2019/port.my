<template>
  <div class="bg-black text-white md:py-16 py-5 md:px-16 px-5">
    <section class="container mx-auto" id="myport-section">
      <div class="rounded-t-[24px] border px-10 border-Color/background-card">
        <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <!-- Text Section -->
          <div class="md:w-1/2 md:py-16 py-8">
            <h2 class="text-4xl font-bold">
              ทำไมต้อง <span class="text-primary-400 underline">my<span class="text-white">port</span></span>
            </h2>
            <p class="mt-4 text-lg text-gray-400">
              พบกับตราสารมากกว่า 250+ รายการด้วยสเปรดที่ต่ำเป็นพิเศษ 0.0 pips ไม่มีรีโควต ราคาดีที่สุด
              และข้อจำกัดทางการค้าเป็นศูนย์ รับประกันโอกาสในการซื้อขายที่ราบรื่นและคุ้มค่าสำหรับลูกค้าคนสำคัญของเราที่ IUX
            </p>
            <div class="mt-6 flex space-x-4">
              <a href="#" class="px-6 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700">
                เริ่มต้นการซื้อขาย
              </a>
              <a href="#" class="px-6 py-3 border border-primary-600 text-primary-600 rounded-full hover:bg-gray-800">
                บัญชีทดลอง
              </a>
            </div>
          </div>

          <!-- Image Section -->
          <div class="md:w-1/2 mt-8 md:mt-0 px-5 lg:px-16 pt-16">
            <img :src="myportImage" alt="Phone Image" class="w-[80%] h-auto mx-auto">
          </div>
        </div>
      </div>

      <!-- Grid Section -->
      <div
        class="grid grid-cols-1 divide-y divide-Color/background-card rounded-b-[24px] border border-t-0 border-Color/background-card md:grid-cols-3 md:divide-x md:divide-y-0 ">
        <div class="p-6">
          <div class="text-3xl text-primary-400 mb-4">
            <i class="fas fa-chart-line"></i> <!-- ไอคอน -->
          </div>
          <div class="text-center mb-5 flex flex-col items-center">
            <img :src="bighomeone" alt="Phone Image" class="w-[65px] mb-5 mt-5">
            <h3 class="text-xl text-primary-400 font-bold">สเปรด 0.0</h3>
          </div>

          <ul class="space-y-2 text-sm">
            <li class="flex gap-2"><img :src="checkIcon"> มอบสเปรดที่เหนือชั้นกว่าใคร</li>
            <li class="flex gap-2"><img :src="checkIcon"> ซื้อขายด้วยสเปรดเริ่มต้นที่ 0.0 pips</li>
            <li class="flex gap-2"><img :src="checkIcon"> ผสมผสานสภาพคล่องที่เป็นกรรมสิทธิ์หลากหลาย</li>
          </ul>
        </div>
        <div class="p-6">
          <div class="text-3xl text-primary-400 mb-4">
            <i class="fas fa-university"></i> <!-- ไอคอน -->
          </div>
          <div class="text-center mb-5 flex flex-col items-center">
            <img :src="bighomemoney" alt="Phone Image" class="w-[65px] mb-5 mt-5">
            <h3 class="text-xl text-primary-400 font-bold">การซื้อขายระดับสถาบัน</h3>
          </div>
          <ul class="space-y-2 text-sm">
            <li class="flex gap-2"><img :src="checkIcon"> ลดความผันผวนของตลาด</li>
            <li class="flex gap-2"><img :src="checkIcon"> การซื้อขายระดับสถาบันพร้อมกับสภาพคล่องสูง</li>
            <li class="flex gap-2"><img :src="checkIcon"> การซื้อขาย CFD มากกว่า 1.5 พันล้านดอลลาร์</li>
          </ul>
        </div>
        <div class="p-6">
          <div class="text-3xl text-primary-400 mb-4">
            <i class="fas fa-tachometer-alt"></i> <!-- ไอคอน -->
          </div>
          <div class="text-center mb-5 flex flex-col items-center">
            <img :src="bighomefast" alt="Phone Image" class="w-[65px] mb-5 mt-5">
            <h3 class="text-xl text-primary-400 font-bold">การดำเนินการที่รวดเร็ว</h3>
          </div>
          <ul class="space-y-2 text-sm">
            <li class="flex gap-2"><img :src="checkIcon"> ความเร็วในการดำเนินการโดยเฉลี่ยต่ำกว่า 30ms</li>
            <li class="flex gap-2"><img :src="checkIcon"> Fibre optic latency ต่ำ</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import myportImage from '~/assets/images/trade-image.png'
import checkIcon from '~/assets/flags/check.svg'
import bighomefast from '~/assets/flags/bighomefast.svg'
import bighomeone from '~/assets/flags/bighomeone.svg'
import bighomemoney from '~/assets/flags/bighomemoney.svg'

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
