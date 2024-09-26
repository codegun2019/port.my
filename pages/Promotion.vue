<template>
  <!-- <HeaderComponent /> -->
  <WithdrawComponent />
  <TraditionComponent />
  <StartComponent />
  <!-- <section class="container mx-auto p-6">
    <h1 class="text-3xl text-center mb-4">{{ $t('welcome') }}</h1>
    <p class="text-lg text-center">{{ $t('about') }}</p>
  </section> -->
</template>

<script lang="ts" setup>
import WithdrawComponent from '~/components/Promotion/WithdrawComponent.vue'
import StartComponent from '~/components/Accounting/StartComponent.vue'
import TraditionComponent from '~/components/Promotion/TraditionComponent.vue'
</script>

<style scoped>
</style>
