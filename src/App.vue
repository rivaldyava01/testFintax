<template>
  <Navbar></Navbar>
  <div id="app">
    <router-view />
  </div>
  <Footer></Footer>
  
</template>

<script>
import Navbar from './components/navbar.vue'
import Footer from './components/footer.vue'
export default {
  name: 'app',
 components: {
      Navbar,
      Footer,
 }
}
</script>

<style>
body {
 margin: 0;
 font-family: Arial, Helvetica, sans-serif;
}
</style>
