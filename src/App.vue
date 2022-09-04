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
import Header from './components/System/Header.vue'
import Footer from './components/System/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style></style>
