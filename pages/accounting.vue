<template>
  <!-- <HeaderComponent /> -->
  <AccountingComponent />
  <PackageComponent />
  <StartComponent />
  <!-- <section class="container mx-auto p-6">
    <h1 class="text-3xl text-center mb-4">{{ $t('welcome') }}</h1>
    <p class="text-lg text-center">{{ $t('about') }}</p>
  </section> -->
</template>

<script lang="ts" setup>
import AccountingComponent from '~/components/Accounting/AccountingComponent.vue'
import PackageComponent from '~/components/Package/PackageComponent.vue'
import StartComponent from '~/components/Accounting/StartComponent.vue'

</script>

<style scoped>
</style>
