<template>
  <div class="bg-black">
    <section class="page-header bg-gradient-to-r py-12">
      <div class="bg-black text-white py-10">
        <div class="container mx-auto">
          <!-- Grid layout with 2 columns on larger screens -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 partner-programs px-5">
            <!-- Card 1 -->
            <div class="partner-item bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl p-6">
              <p class="text-lg font-semibold text-center">
                การจ่ายเงินโปรแกรมความภักดีแบบรายเดือน
              </p>
            </div>
            <!-- Card 2 -->
            <div class="partner-item bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl p-6 special-card">
              <p class="text-lg font-semibold text-center">รับค่าคอมมิชชันสูงถึง 72%</p>
            </div>
            <!-- Card 3 -->
            <div class="partner-item bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl p-6">
              <p class="text-lg font-semibold text-center">สื่อการตลาดและการสนับสนุน</p>
            </div>
            <!-- Card 4 -->
            <div class="partner-item bg-gradient-to-r from-gray-700 to-gray-800 rounded-xl p-6">
              <p class="text-lg font-semibold text-center">
                อีเวนต์และกิจกรรมวีไอพีสุดเอ็กซ์คลูซีฟ
              </p>
            </div>
          </div>

          <!-- Caption -->
          <p class="text-center text-sm text-gray-400 mt-6">
            *
            โปรดทราบว่าสิทธิประโยชน์ทั้งหมดของโปรแกรมพันธมิตรเป็นไปตามข้อกําหนดและเงื่อนไข
          </p>
        </div>
      </div>
      
      <div class="container mx-auto text-center md:pt-[100px] pt-5 md:pb-[55px] pb-5">
        <h2 class="text-4xl font-bold text-white">
          ก้าวสู่ my<span class="text-primary-400">Partner</span>
        </h2>
        <p class="page-header-description text-lg mb-6 text-secondary-500">
          ก้าวสู่การสร้างรายได้กับ myport <br />
          โอกาสทางการเทรด ที่ให้มากกว่าการเทรด<br />
        </p>
      </div>

      <article class="bg-gradient-to-b from-[#333333] to-[#222222] rounded-lg p-6 max-w-lg mx-auto">
        <!-- Partner program subheading and description -->
        <hgroup class="mb-4">
          <h3 class="text-2xl font-bold text-white mb-2">ผู้แนะนำโบรกเกอร์ (IB)</h3>
          <p class="text-sm text-secondary-500">
            รับค่าคอมมิชชันสูงถึง 72% โดยการแนะนําเพื่อน เพื่อนร่วมงาน หรือนักเรียนของคุณ เหมาะสําหรับผู้ให้บริการ EA
            ที่ปรึกษาด้านการเทรด ผู้ให้บริการสัญญาณเทรด และสถาบันการเทรด
          </p>
        </hgroup>

        <!-- List of partner program properties -->
        <ul class="mb-4 space-y-2 text-white">
          <li class="flex items-start text-sm">
            <span class="text-primary-400">✦</span>
            <span class="ml-2">
              ส่วนแบ่งสเปรดของ EUR/USD ต่อล็อตสูงสุดถึง <strong>$14.4</strong>
            </span>
          </li>
          <li class="flex items-start text-sm">
            <span class="text-primary-400">✦</span>
            <span class="ml-2">
              ส่วนแบ่งสเปรดของ EUR/USD ต่อล็อตสูงสุดถึง <strong>$7.5</strong>
            </span>
          </li>
          <li class="flex items-start text-sm">
            <span class="text-primary-400">✦</span>
            <span class="ml-2">
              Loyalty Bonus สูงสุดถึง <strong>20%</strong> ของค่าคอมมิชชันรายเดือน
            </span>
          </li>
        </ul>

        <!-- Link to partner program page -->
        <a
          href="https://www.markets4you.asia/th/introducing-broker-program/"
          class="inline-flex items-center text-primary-400 hover:text-primary-300 font-semibold"
        >
          เรียนรู้เพิ่มเติม
          <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </article>

      <div class="container mx-auto text-center md:pt-[100px] pt-5 md:pb-[55px] pb-5">
        <h2 class="text-4xl font-bold text-white">
          เริ่มต้น my<span class="text-primary-400">partner ง่ายๆ</span>
        </h2>
        <p class="page-header-description text-lg mb-6 text-secondary-500">
          ก้าวสู่การสร้างรายได้กับ myport <br />
          โอกาสทางการเทรด ที่ให้มากกว่าการเทรด<br />
          ซึ่งได้รับการออกแบบมาเพื่อฉลองการเติบโตและความสําเร็จของคุณ<br />
        </p>
      </div>

      <div class="bg-black text-white py-12">
        <!-- Header Section -->
        <div class="flex justify-center items-center space-x-4 px-6 md:px-20">
          <div class="flex -space-x-2">
            <img class="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/40?img=1" alt="Partner 1">
            <img class="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/40?img=2" alt="Partner 2">
            <img class="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/40?img=3" alt="Partner 3">
          </div>
          <div class="text-xl md:text-2xl font-bold">
            พาร์ทเนอร์เข้าร่วมกว่า 102,000 ราย!
          </div>
        </div>


        <!-- Steps Section -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-6 md:px-20 mt-10">
          <!-- Step 1 -->
          <div>
            <h1 class="text-6xl font-bold text-white opacity-10">01</h1>
            <h2 class="text-2xl font-bold mt-4">สมัคร</h2>
            <p class="text-gray-300 mt-2">ลงทะเบียนและเลือกโปรแกรม IB <br/> หรือ Multi-level ของเรา</p>
          </div>
          <!-- Step 2 -->
          <div>
            <h1 class="text-6xl font-bold text-white opacity-10">02</h1>
            <h2 class="text-2xl font-bold mt-4">เชิญเพื่อน</h2>
            <p class="text-gray-300 mt-2">แชร์ลิงก์พาร์ทเนอร์ที่ไม่ซ้ำใครของคุณ<br/>ผ่านช่องทางออนไลน์</p>
          </div>
          <!-- Step 3 -->
          <div>
            <h1 class="text-6xl font-bold text-white opacity-10">03</h1>
            <h2 class="text-2xl font-bold mt-4">รับรายได้มากขึ้น</h2>
            <p class="text-gray-300 mt-2">รับรายได้สูงถึง 75% <br/>แบบไม่จำกัดทุก 4 ชั่วโมง</p>
          </div>
        </div>

        <!-- Call to Action Button -->
        <div class="flex justify-center mt-12">
          <NuxtLink to="/">
            <button
              class="group flex mx-auto items-center justify-center font-bold py-[12px] pr-[2px] pl-[16px] bg-white border border-transparent rounded-full hover:bg-primary-600 hover:text-white text-black max-h-[44px] whitespace-nowrap space-x-2 shadow-lg"
            >
              <span>ร่วมเป็นพาร์ทเนอร์กับเรา</span>
              <!-- Icon with green background and hover effect -->
              <div class="text-white bg-primary-500 rounded-full p-2 flex items-center justify-center group-hover:bg-white group-hover:text-primary-500 transition-colors duration-300">
                <ArrowIcon class="w-4 h-4" />
              </div>
            </button>
          </NuxtLink>
        </div>
        <div class="container mx-auto text-center md:pt-[100px] pt-5 md:pb-[55px] pb-5">
          <h2 class="text-4xl font-bold text-white">
            เสียงตอบรับจาก my<span class="text-primary-400">partner</span>
          </h2>
          <p class="page-header-description text-lg mb-6 text-secondary-500">
            ก้าวสู่การสร้างรายได้กับ myport <br />
            ซึ่งได้รับการออกแบบมาเพื่อฉลองการเติบโตและความสําเร็จของคุณ<br />
          </p>
        </div>
      </div>
      <!-- comment card -->
      <div class="bg-back py-10">
  <div class="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
    <!-- Testimonial 1 -->
    <div class="bg-gradient-to-b from-[#333333] to-[#222222] text-white p-6 rounded-lg shadow-lg">
      <div class="flex items-center mb-4">
        <img class="w-10 h-10 rounded-full" src="https://i.pravatar.cc/40?img=1" alt="User 1">
        <div class="ml-3">
          <p class="text-sm font-bold">ธนกร ดาการวด</p>
          <p class="text-xs text-gray-400">เป็นพันธมิตรมา 6 ปี</p>
        </div>
      </div>
      <p class="text-sm">
        “Markets4you เดินได้อย่างรวดเร็วในช่วงไม่กี่ปีที่ผ่านมา ตอนนี้ทำเว็บที่ทันสมัยและใช้งานง่าย ทำให้การทำงานกับ Markets4you ราบรื่นมาก”
      </p>
    </div>

    <!-- Testimonial 2 -->
    <div class="bg-gradient-to-b from-[#333333] to-[#222222] text-white p-6 rounded-lg shadow-lg">
      <div class="flex items-center mb-4">
        <img class="w-10 h-10 rounded-full" src="https://i.pravatar.cc/40?img=2" alt="User 2">
        <div class="ml-3">
          <p class="text-sm font-bold">เมลวิน ตัน</p>
          <p class="text-xs text-gray-400">เป็นพันธมิตรมา 3 ปี</p>
        </div>
      </div>
      <p class="text-sm">
        “ผมทำงานกับ Markets4you และได้รับค่าคอมมิชชันจำนวนมาก สอนผมสร้างความมั่นใจในการทำงานจริง ๆ”
      </p>
    </div>

    <!-- Testimonial 3 -->
    <div class="bg-gradient-to-b from-[#333333] to-[#222222] text-white p-6 rounded-lg shadow-lg">
      <div class="flex items-center mb-4">
        <img class="w-10 h-10 rounded-full" src="https://i.pravatar.cc/40?img=3" alt="User 3">
        <div class="ml-3">
          <p class="text-sm font-bold">วิลเลียน ตัน</p>
          <p class="text-xs text-gray-400">เป็นพันธมิตรมา 2 ปี</p>
        </div>
      </div>
      <p class="text-sm">
        “การร่วมงานกับ Markets4you มากกว่า 2 ปีทำให้เห็นความมั่นคงและบริการที่เยี่ยมยอด”
      </p>
    </div>

    <!-- Testimonial 4 -->
    <div class="bg-gradient-to-b from-[#333333] to-[#222222] text-white p-6 rounded-lg shadow-lg">
      <div class="flex items-center mb-4">
        <img class="w-10 h-10 rounded-full" src="https://i.pravatar.cc/40?img=4" alt="User 4">
        <div class="ml-3">
          <p class="text-sm font-bold">ปราวิน คุตะ</p>
          <p class="text-xs text-gray-400">เป็นพันธมิตรมา 3 ปี</p>
        </div>
      </div>
      <p class="text-sm">
        “สถานการณ์ของ Markets4you ได้พัฒนาขึ้นเรื่อย ๆ พร้อมโอกาสในการสร้างรายได้ให้กับพาร์ทเนอร์”
      </p>
    </div>

    <!-- Testimonial 5 -->
    <div class="bg-gradient-to-b from-[#333333] to-[#222222] text-white p-6 rounded-lg shadow-lg">
      <div class="flex items-center mb-4">
        <img class="w-10 h-10 rounded-full" src="https://i.pravatar.cc/40?img=5" alt="User 5">
        <div class="ml-3">
          <p class="text-sm font-bold">ไมเคิล วิเซนต์</p>
          <p class="text-xs text-gray-400">เป็นพันธมิตรมา 4 ปี</p>
        </div>
      </div>
      <p class="text-sm">
        “ตลอดเวลาที่ทำงานกับ Markets4you ผมได้รับประสบการณ์ที่ยอดเยี่ยมมาก ๆ”
      </p>
    </div>
  </div>
</div>



    </section>
  </div>
</template>

<script lang="ts" setup>
import ArrowIcon from "~/components/composables/ArrowIcon.vue"; // Assuming you have an ArrowIcon component
</script>

<style scoped>
.partner-programs .special-card {
  padding-bottom: 100px;
  background: linear-gradient(135deg, #111827, #1f2937);
  background-blend-mode: multiply;
}

.partner-programs .partner-item {
  background-blend-mode: multiply;
  padding-bottom: 50px; /* Default padding for other cards */
}
</style>
