<template>
  <div class="bg-dark-500 text-white md:py-16 py-5 md:px-16 px-5 items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4">
        ข้อเสนอสุดพิเศษ my <span class="text-primary-500">Promotion</span>
      </h1>
      <!-- คำอธิบาย -->
      <p class="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
        ออกแบบบัญชีของตัวเอง ด้วยการเลือกโปรโมชั่นที่ต้องการ ให้เหมาะกับสไตล์การเทรดของตัวเองได้ง่ายๆ เพียงคลิกเดียว 
      </p>
    </div>
  </div>
  </template>

  <script lang="ts" setup>
  import { ref } from 'vue'
  import IconDeposit from '~/assets/flags/cfds.svg'
  
  </script>

  <style scoped>
  .table-withdraw {
    background: linear-gradient(#333, #212121);
    border-radius: 2.5rem;
  }
  </style>