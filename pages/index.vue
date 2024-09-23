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
import HeaderComponent from '~/components/Home/HeaderComponent.vue'
import MyportComponent from '~/components/Home/MyportComponent.vue'
import ReadyComponent from '~/components/Home/ReadyComponent.vue'
import WordComponent from '~/components/Home/WordComponent.vue'
import BuysellComponent from '~/components/Home/BuysellComponent.vue'
import PaymentComponent from '~/components/Home/PaymentComponent.vue'
import TraderComponent from '~/components/Home/TraderComponent.vue'
import StartComponent from '~/components/Home/StartComponent.vue'

</script>

<style scoped>
</style>
