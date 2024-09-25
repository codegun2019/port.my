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
    <div class="container mx-auto py-8 lg:w-2/4 w-100 table-withdraw mb-10">
      <div class="overflow-x-auto withdrawal-scroll-block accordion-table">
        <table class="table-auto w-full text-left text-white w-full flex-no-wrap rounded-lg overflow-hidden my-5">
          <thead>
            <tr class="hidden lg-block border-b border-[#3e3f3f]  flex flex-col flex-no wrap md:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <th class="py-3 px-6">ช่อง</th>
              <th class="py-3 px-6">ฝากขั่นต่ำ</th>
              <th class="py-3 px-6">ถอนขั่นต่ำ</th>
              <th class="py-3 px-6">ถอนสูงสุด</th>
              <th class="py-3 px-6">ระยะเวลา</th>
            </tr>
          </thead>
          <tbody>
            <tr class="flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <td class="py-3 px-6 flex items-center">
                <img :src="IconDeposit" alt="bronze" class="w-8 h-8 mr-2">
                Qr Code
              </td>
              <td class="py-3 px-6">100 THB</td>
              <td class="py-3 px-6">500 THB</td>
              <td class="py-3 px-6">300,000 THB/DAY</td>
              <td class="py-3 px-6">ทันที</td>
            </tr>
            <tr class="flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <td class="py-3 px-6 flex items-center">
                <img :src="IconDeposit" alt="silver" class="w-8 h-8 mr-2">
                Online Banking
              </td>
              <td class="py-3 px-6">100 THB</td>
              <td class="py-3 px-6">500 THB</td>
              <td class="py-3 px-6">300,000 THB/DAY</td>
              <td class="py-3 px-6">ทันที</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="container mx-auto py-8 lg:w-2/4 w-100 table-withdraw mb-10">
      <div class="overflow-x-auto withdrawal-scroll-block accordion-table">
        <table class="table-auto w-full text-left text-white w-full flex-no-wrap rounded-lg overflow-hidden my-5">
          <thead>
            <tr class="hidden lg-block border-b border-[#3e3f3f]  flex flex-col flex-no wrap md:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <th class="py-3 px-6">ช่อง</th>
              <th class="py-3 px-6">ฝากขั่นต่ำ</th>
              <th class="py-3 px-6">ถอนขั่นต่ำ</th>
              <th class="py-3 px-6">ถอนสูงสุด</th>
              <th class="py-3 px-6">ระยะเวลา</th>
            </tr>
          </thead>
          <tbody>
            <tr class="flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <td class="py-3 px-6 flex items-center">
                <img :src="IconDeposit" alt="bronze" class="w-8 h-8 mr-2">
                Qr Code
              </td>
              <td class="py-3 px-6">100 THB</td>
              <td class="py-3 px-6">500 THB</td>
              <td class="py-3 px-6">300,000 THB/DAY</td>
              <td class="py-3 px-6">ทันที</td>
            </tr>
            <tr class="flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <td class="py-3 px-6 flex items-center">
                <img :src="IconDeposit" alt="silver" class="w-8 h-8 mr-2">
                Online Banking
              </td>
              <td class="py-3 px-6">100 THB</td>
              <td class="py-3 px-6">500 THB</td>
              <td class="py-3 px-6">300,000 THB/DAY</td>
              <td class="py-3 px-6">ทันที</td>
            </tr>
            <tr class="flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <td class="py-3 px-6 flex items-center">
                <img :src="IconDeposit" alt="silver" class="w-8 h-8 mr-2">
                Online Banking
              </td>
              <td class="py-3 px-6">100 THB</td>
              <td class="py-3 px-6">500 THB</td>
              <td class="py-3 px-6">300,000 THB/DAY</td>
              <td class="py-3 px-6">ทันที</td>
            </tr>
          </tbody>
        </table>
      </div>
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