<template>
  <div class="bg-black">
    <section class="page-header bg-gradient-to-r py-12">
      <div class="container mx-auto text-center md:pt-[100px] pt-5 md:pb-[55px] pb-5">
        <h2 class="text-4xl font-bold text-white">
          ก้าวสู่ my<span class="text-primary-400">Partner</span>
        </h2>
        <p class="page-header-description text-lg mb-6 text-secondary-500">
          ก้าวสู่การสร้างรายได้กับ myport <br />
          โอกาสทางการเทรด ที่ให้มากกว่าการเทรด<br />
        </p>

        <!-- Center the button using flex and adjust the icon to be on the right side -->
        <NuxtLink to="/">
          <button
            class="group flex mx-auto hover:text-white items-center justify-center font-bold py-[12px] pr-[2px] pl-[16px] bg-white border border-transparent rounded-full hover:bg-primary-600 text-black max-h-[44px] whitespace-nowrap space-x-2 shadow-lg"
          >
            <span>ร่วมเป็นพาร์ทเนอร์กับเรา</span>
            <!-- Icon with green background and hover effect -->
            <div class="text-white bg-primary-500 rounded-full p-2 flex items-center justify-center group-hover:bg-white group-hover:text-primary-500 transition-colors duration-300">
              <ArrowIcon class="w-4 h-4" />
            </div>
          </button>
        </NuxtLink>

        <div class="page-header-paid-out text-center mt-8 text-white">
          <div class="paid-out-text text-xl font-semibold">
            จ่ายค่าคอมมิชชันตั้งแต่ปี 2007
          </div>
          <div class="paid-out-number text-4xl font-bold mt-2">$ 214,920,739.85</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import ArrowIcon from '~/components/composables/ArrowIcon.vue'; // Assuming you have an ArrowIcon component
</script>
