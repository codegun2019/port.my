<template>
  <!-- <HeaderComponent /> -->
  <TraderComponent />
  <MarketComponent />
  <StartComponent />
  <!-- <section class="container mx-auto p-6">
    <h1 class="text-3xl text-center mb-4">{{ $t('welcome') }}</h1>
    <p class="text-lg text-center">{{ $t('about') }}</p>
  </section> -->
</template>

<script lang="ts" setup>
import TraderComponent from '~/components/Landing/TraderComponent.vue'
import MarketComponent from '~/components/Landing/MarketComponent.vue'
import StartComponent from '~/components/Landing/StartComponent.vue'

</script>

<style scoped>
</style>
