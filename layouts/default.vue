<template>
  <div>
    <ThePreloader />
    <!-- Header component -->
    <NavbarComponent />
    <HeaderComponent />
    <!-- Main content area -->
    <NuxtPage />
    <!-- Footer component -->
    <FooterComponent />
  </div>
</template>

<script lang="ts" setup>
import NavbarComponent from '~/components/Layouts/NavbarComponent.vue'
import FooterComponent from '~/components/Layouts/FooterComponent.vue'
</script>
