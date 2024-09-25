<template>
  <section class="bg-primary-600" id="section-payment">
    <div class="container py-4 mx-auto">
      <div class="flex justify-between flex-nowrap overflow-scroll md:overflow-hidden no-scrollbar" style="gap: 24px;">
        <!-- ใช้รูปภาพที่ import มาแสดง -->
        <img :src="CryptopayImage" alt="Crypto Pay" />
        <img :src="LocalpayImage" alt="Local Pay" />
        <img :src="WirepayImage" alt="Wire Pay" />
        <img :src="TruemoneyImage" alt="True Money" />
        <img :src="UnionpayImage" alt="Union Pay" />
      </div>
    </div>
  </section>
</template>

<script setup>
import CryptopayImage from '~/assets/images/payment/cryptopay.svg'
import LocalpayImage from '~/assets/images/payment/localpay.svg'
import WirepayImage from '~/assets/images/payment/wirepay.svg'
import TruemoneyImage from '~/assets/images/payment/truemoney.svg'
import UnionpayImage from '~/assets/images/payment/unionpay.svg'
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
