<template>
  <div>
    <!-- Header component -->
    <HeaderComponent />

    <!-- ใช้ NuxtPage แทน Nuxt -->
    <NuxtPage />

    <!-- Footer component -->
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '~/components/Layouts/HeaderComponent.vue'
import FooterComponent from '~/components/Layouts/FooterComponent.vue'

export default {
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>
