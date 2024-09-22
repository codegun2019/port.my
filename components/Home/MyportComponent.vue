<template>
  <div class="bg-black text-white py-16 px-16">
    <div class="rounded-t-[24px] border px-10 border-Color/background-card">
      <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <!-- Text Section -->
        <div class="md:w-1/2 ">
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
        <div class="md:w-1/2 mt-8 md:mt-0">
          <img :src="myportImage" alt="Phone Image" class="w-full h-auto">
        </div>
      </div>
    </div>

    <!-- Grid Section -->
    <div class="grid grid-cols-1 divide-y divide-Color/background-card rounded-b-[24px] border border-t-0 border-Color/background-card md:grid-cols-3 md:divide-x md:divide-y-0 ">
      <div class="p-6 text-center">
        <div class="text-3xl text-primary-400 mb-4">
          <i class="fas fa-chart-line"></i> <!-- ไอคอน -->
        </div>
        <h3 class="text-xl font-bold">สเปรด 0.0</h3>
        <p class="text-gray-400 mt-2">มอบสเปรดที่เหนือชั้นกว่าใคร</p>
        <p class="text-gray-400">ซื้อขายด้วยสเปรดเริ่มต้นที่ 0.0 pips</p>
      </div>
      <div class="p-6 text-center">
        <div class="text-3xl text-primary-400 mb-4">
          <i class="fas fa-university"></i> <!-- ไอคอน -->
        </div>
        <h3 class="text-xl font-bold">การซื้อขายระดับสถาบัน</h3>
        <p class="text-gray-400 mt-2">ลดความคลาดเคลื่อนสำหรับการทำธุรกรรม</p>
        <p class="text-gray-400">พร้อมกับภาพคล่องสูง</p>
      </div>
      <div class="p-6 text-center">
        <div class="text-3xl text-primary-400 mb-4">
          <i class="fas fa-tachometer-alt"></i> <!-- ไอคอน -->
        </div>
        <h3 class="text-xl font-bold">การดำเนินการที่รวดเร็ว</h3>
        <p class="text-gray-400 mt-2">ความเร็วในการดำเนินการเฉลี่ยต่ำกว่า 30ms</p>
        <p class="text-gray-400">Fibre optic latency ต่ำ</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import myportImage from '~/assets/images/section1-phone.png'

</script>

<style scoped>
.border-Color\/background-card {
  --tw-border-opacity: 1;
  border-color: rgb(39 39 39 / var(--tw-border-opacity));
}
*, ::before, ::after {

    border-color: #272727;
}
</style>
