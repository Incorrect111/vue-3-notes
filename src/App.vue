<template>
  <div class="wrapper">
    <Header />
    <div class="wrapper-content">
      <div class="container">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { site } from '@/_config'

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {}
  }
}
</script>

<style></style>
