<template>
<div class="bg-dark-500 text-white md:py-16 py-5 md:px-16 px-5 items-center justify-center">
  <div class="text-center">
    <h1 class="text-4xl font-bold mb-4">
      ภาพรวม<span class="text-primary-500">บัญชีซื้อขาย</span>
    </h1>
    <!-- คำอธิบาย -->
    <p class="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
      เลือกประเภทบัญชีที่เหมาะสมกับตัวคุณ เพื่อให้ตรงกับสไตล์การซื้อขาย ขับเคลื่อนโดยแพลตฟอร์มนวัตกรรมล้ำสมัย
    </p>
  </div>
  <section class="flex flex-col container mx-auto md:flex-row justify-center gap-8 px-4 py-12" id="section-package">
  <!-- Fixed Account Card -->
  <div class="bg-gradient-to-b from-[#333333] to-[#222222] text-white rounded-xl p-6 shadow-lg w-full md:w-1/3">
    <p class="text-gray-500 text-sm mb-2">Classic</p>
    <h3 class="text-xl font-semibold mb-4">Fixed</h3>
    <p class="text-gray-300 mb-4">
      เทรดได้อย่างง่ายดายด้วยสเปรดคงที่ <br>
      การส่งคำสั่งแบบทันที <br>
      บัญชีที่มีทศนิยม 5 ตำแหน่ง <br>
      และความสามารถในการเก็งกำไรระยะสั้น
    </p>
    <hr class="border-b-1 border-[#ffffff1f] mb-5 mt-3">
    <ul class="text-gray-400 mb-6 space-y-2">
      <li> - การส่งคำสั่งแบบทันที</li>
      <li> - ล็อตสูงสุด: 200</li>
      <li> - ไม่มีค่าคอมมิชชัน</li>
      <li> - สเปรดคงที่เริ่มต้นที่ 2 พิพ</li>
    </ul>
    <NuxtLink
      class="font-bold inline-flex items-center cursor-pointer justify-between border border-gray-400 hover:scale-110 transform-gpu rounded-full px-4 py-2 text-white hover:bg-gray-800 transition duration-300 ease-in-out"
    >
      <span>เปิดบัญชี</span>
      <span
        class="bg-primary-500 text-white rounded-full p-2 ml-3 flex items-center justify-center"
      >
      <img :src="senre" alt="Phone Image" class="w-[100%] mx-auto">
      </span>
    </NuxtLink>
  </div>

  <!-- Standard Account Card (Most Popular) - This card is larger -->
  <div class="bg-gradient-to-b from-primary-900 to-primary-500 text-white rounded-xl p-6 shadow-lg w-full md:w-1/3 relative md:scale-105 md:h-auto">
    <div class="absolute top-4 right-4 most-popular-label text-white px-3 py-1 rounded-full text-sm">นิยมมากที่สุด</div>
    <p class="text-gray-200 text-sm mb-2">Classic</p>
    <h3 class="text-xl font-semibold mb-4">Standard</h3>
    <p class="text-gray-100 mb-4">
      รับสิทธิประโยชน์จากสเปรดลอยตัว <br>
      เริ่มต้นที่ 0.9 pip ไม่มีสวอป <br>
      และไม่มีค่าธรรมเนียมเพิ่มเติม
    </p>
    <hr class="border-b-1 border-[#ffffff1f] mb-5 mt-3">
    <ul class="text-gray-100 mb-6 space-y-2">
      <li> - การส่งคำสั่งตามตลาด</li>
      <li> - ความเร็วในการส่งคำสั่ง 0.53 วินาที</li>
      <li> - ล็อตสูงสุด: 500</li>
      <li> - ไม่มีค่าคอมมิชชัน</li>
      <li> - สเปรดลอยตัวเริ่มต้นที่ 0.9 pip</li>
    </ul>
    <NuxtLink
      class="font-bold inline-flex items-center cursor-pointer justify-between border border-white rounded-full px-4 py-2 text-dark-900 bg-white hover:scale-110 transform-gpu transition duration-300 ease-in-out"
    >
      <span>เปิดบัญชี</span>
      <span
        class="bg-primary-500 text-white rounded-full p-2 ml-3 flex items-center justify-center"
      >
      <img :src="senre" alt="Phone Image" class="w-[100%] mx-auto">
      </span>
    </NuxtLink>
  </div>

  <!-- Pro Account Card -->
  <div class="bg-gradient-to-b from-[#333333] to-[#222222] text-white rounded-xl p-6 shadow-lg w-full md:w-1/3">
    <p class="text-gray-500 text-sm mb-2">Classic</p>
    <h3 class="text-xl font-semibold mb-4">Pro</h3>
    <p class="text-gray-300 mb-4">
      เพลิดเพลินกับอิสระอย่างเต็มที่ <br>
      ด้วยสเปรดลอยตัวเริ่มต้นที่ 0.1 pip <br>
      เทรดได้ในคลิกเดียว <br>
      และการเสนอราคาระดับ 2
    </p>
    <hr class="border-b-1 border-[#ffffff1f] mb-5 mt-3">
    <ul class="text-gray-400 mb-6 space-y-2">
      <li> - การส่งคำสั่งตามตลาด</li>
      <li> - ความเร็วในการส่งคำสั่ง 0.53 วินาที</li>
      <li> - ล็อตสูงสุด: 500</li>
      <li> - ค่าคอมมิชชัน $3.5 ต่อฝั่ง</li>
      <li> - สเปรดลอยตัวเริ่มต้นที่ 0.1 pip</li>
    </ul>
    <NuxtLink
      class="font-bold inline-flex items-center cursor-pointer justify-between border border-gray-400 hover:scale-110 transform-gpu rounded-full px-4 py-2 text-white hover:bg-gray-800 transition duration-300 ease-in-out"
    >
      <span>เปิดบัญชี</span>
      <span
        class="bg-primary-500 text-white rounded-full p-2 ml-3 flex items-center justify-center"
      >
        <img :src="senre" alt="Phone Image" class="w-[100%] mx-auto">
      </span>
    </NuxtLink>
  </div>
</section>

</div>
</template>

<script setup>
import senre from '~/assets/flags/senre.svg'
</script>

<style scoped>
.most-popular-label {
    padding: .25rem .75rem;
    background-image: linear-gradient(149deg, rgba(255, 255, 255, 0.17) 11.45%, rgba(255, 255, 255, 0.05) 121.43%);
    border-radius: 1.5rem;
}
</style>
