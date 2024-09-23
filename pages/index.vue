<template>
  <HeaderComponent />
  <MyportComponent />
  <ReadyComponent />

  <section class="container mx-auto p-6">
    <h1 class="text-3xl text-center mb-4">{{ $t('welcome') }}</h1>
    <p class="text-lg text-center">{{ $t('about') }}</p>
  </section>
</template>

<script lang="ts" setup>
import HeaderComponent from '~/components/Home/HeaderComponent.vue'
import MyportComponent from '~/components/Home/MyportComponent.vue'
import ReadyComponent from '~/components/Home/ReadyComponent.vue'

</script>

<style scoped>
</style>
