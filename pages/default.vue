<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import { Header, Footer } from '../components/layouts'

export default {
  components: {
    Header,
    Footer
  }
}
</script>