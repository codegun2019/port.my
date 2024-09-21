<template>
  <div>
    <!-- Header component -->
    <HeaderComponent />

    <!-- Main content area -->
    <NuxtPage />

    <!-- Footer component -->
    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from '~/components/Layouts/HeaderComponent.vue'
import FooterComponent from '~/components/Layouts/FooterComponent.vue'
</script>
