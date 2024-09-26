<template>
  <section class="bg-dark-900" id="section-promotion">
    <div class="flex justify-center items-center min-h-screen p-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl w-full">
        <!-- Card 1: My Bonus -->
        <div class="bg-card-50 border-2 scale-95 hover:scale-105 transform-gpu transition duration-300 ease-in-out border-card-100 hover:border-primary-500 rounded-xl shadow-md p-6 text-white relative hover:shadow-lg transition duration-300 ease-in-out flex flex-col">
          <div class="mb-20">
            <h2 class="text-2xl font-semibold mb-2">my <span class="font-bold text-primary-500">Bonus</span></h2>
            <p class="text-sm mb-4">โบนัส 30% เพียงเริ่มต้นฝากเงินที่ $100 ขึ้นไป</p>
          </div>
          <div class="flex items-center justify-between mt-auto pt-4">
            <h3 class="text-5xl font-bold text-primary-400">50%</h3>
            <div class="text-white bg-primary-400 rounded-full p-2">
              <arrow-icon />
            </div>
          </div>
        </div>
        
        <!-- Card 2: My Lotback -->
        <div class="bg-card-50 border-2 hover:scale-105 transform-gpu transition duration-300 ease-in-out border-card-100 hover:border-primary-500 rounded-xl shadow-md p-6 text-white relative hover:shadow-lg transition duration-300 ease-in-out flex flex-col">
          <div class="mb-20">
            <h2 class="text-2xl font-semibold mb-2">my <span class="font-bold text-primary-500">Lotback</span></h2>
            <p class="text-sm mb-4">ได้เงินคืนทุกๆการเทรด เริ่มต้นที่ $1 / 1Lot 
              ยิ่งเทรดมากเท่าไหร่ ก็ได้คืนมากเท่านั้น 
              เพียงฝากเงินเริ่มต้น $500 ขึ้นไป ก็สามาถรับ Lotback ได้เลยทันที
            </p>
          </div>
          <div class="flex items-center justify-between mt-auto pt-4">
            <h3 class="text-5xl font-bold text-primary-400">50$</h3>
            <div class="text-white bg-primary-400 rounded-full p-2">
              <arrow-icon />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import ArrowIcon from '~/components/composables/ArrowIcon.vue'; // Assuming you have an ArrowIcon component

export default {
  components: {
    ArrowIcon,
  },
};
</script>