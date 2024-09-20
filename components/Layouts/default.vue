<template>
  <div>
    <!-- HeaderComponent.vue จะถูกแสดงในทุกหน้า -->
    <HeaderComponent />

    <!-- เนื้อหาหลักของแต่ละหน้าจะถูกแสดงใน Nuxt component -->
    <Nuxt />

    <!-- FooterComponent.vue จะถูกแสดงในทุกหน้า -->
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
