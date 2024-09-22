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
  <div class="preloader">
    <div class="preloader__percent h3">
      {{ count }}% <!-- แสดงเปอร์เซ็นต์การนับ -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.preloader {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
.preloader__percent {
  opacity: 0;
  font-size: 80px;
  transition: opacity 0.5s ease-in-out;
}
</style>
