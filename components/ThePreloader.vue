<script lang="ts" setup>
import { gsap } from 'gsap'
import { ref, computed, onMounted, nextTick } from 'vue'

// ตัวแปรเก็บค่าของเปอร์เซ็นต์
const count = ref(0)
const number_of_images_loaded = ref(0)
const total_images = ref(100) // เปลี่ยนเป็น 100 เพื่อแสดงการนับ 0-100%
const image_index = ref(0)

onMounted(() => {
  nextTick(() => {
    setTimeout(async () => {
      await document.fonts.load

      gsap.to('.preloader__percent', {
        opacity: 1,
        duration: 0.2
      })

      gsap.set('body', { overflow: 'hidden' }) // ป้องกันการ scroll ขณะโหลด

      // เริ่มการนับเลขแทนการโหลดรูปภาพ
      startCounting()
    }, 0)
  })
})

// ฟังก์ชันเริ่มการนับเลข
const startCounting = () => {
  gsap.to(count, {
    value: 100, // ค่าเป้าหมาย
    duration: 1, // ระยะเวลา 5 วินาที
    ease: 'power1.out',
    onUpdate: () => {
      count.value = Math.floor(count.value) // ปรับค่าเป็นตัวเลขเต็ม
    },
    onComplete: () => {
      // เมื่อโหลดครบ 100% ซ่อน preloader
      gsap.fromTo('.preloader', {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
      }, {
        clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
        duration: 0.0001,
        onComplete() {
          gsap.set('body', { clearProps: 'all' }) // คืนค่า body
        }
      })
    }
  })
}
</script>
<template>
  <div class="preloader h-screen w-screen flex justify-center items-center fixed inset-0 z-50 bg-black text-white">
    <div class="preloader__percent h3 text-center">
      <div class="loader mb-4 mx-auto"></div> <!-- เพิ่ม margin-bottom เพื่อให้มีช่องว่างระหว่าง loader และเปอร์เซ็นต์ -->
      {{ count }}% <!-- แสดงเปอร์เซ็นต์การนับ -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.preloader__percent {
  opacity: 0;
  font-size: 80px;
  transition: opacity 0.5s ease-in-out;
}

/* HTML: <div class="loader"></div> */
.loader {
  width: 45px;
  aspect-ratio: .75;
  --c: no-repeat linear-gradient(#fff 0 0);
  background: 
    var(--c) 0%   50%,
    var(--c) 50%  50%,
    var(--c) 100% 50%;
  animation: l7 1s infinite linear alternate;
}

@keyframes l7 {
  0%  {background-size: 20% 50% ,20% 50% ,20% 50% }
  20% {background-size: 20% 20% ,20% 50% ,20% 50% }
  40% {background-size: 20% 100%,20% 20% ,20% 50% }
  60% {background-size: 20% 50% ,20% 100%,20% 20% }
  80% {background-size: 20% 50% ,20% 50% ,20% 100%}
  100%{background-size: 20% 50% ,20% 50% ,20% 50% }
}
</style>
