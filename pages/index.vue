<template>
  <HeaderComponent />
  <MyportComponent />
  <ReadyComponent />
  <WordComponent />
  <BuysellComponent />
  <PaymentComponent />
  <TraderComponent />
  <StartComponent />
  <section class="container mx-auto p-6">
    <h1 class="text-3xl text-center mb-4">{{ $t('welcome') }}</h1>
    <p class="text-lg text-center">{{ $t('about') }}</p>
  </section>
</template>

<script lang="ts" setup>
import HeaderComponent from '~/components/Landing/HeaderComponent.vue'
import MyportComponent from '~/components/Landing/MyportComponent.vue'
import ReadyComponent from '~/components/Landing/ReadyComponent.vue'
import WordComponent from '~/components/Landing/WordComponent.vue'
import BuysellComponent from '~/components/Landing/BuysellComponent.vue'
import PaymentComponent from '~/components/Landing/PaymentComponent.vue'
import TraderComponent from '~/components/Landing/TraderComponent.vue'
import StartComponent from '~/components/Landing/StartComponent.vue'

</script>

<style scoped>
</style>
