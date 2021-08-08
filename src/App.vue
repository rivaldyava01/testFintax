<template>
  <div id="App">
    <Navbar></Navbar>
    <home-content></home-content>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue'
import homeContent from './components/homeContent.vue'
import Footer from './components/footer.vue'
export default {
  name: 'app',
 components: {
      Navbar,
      homeContent,
      Footer,
 }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
body {
 margin: 0;
 font-family: Arial, Helvetica, sans-serif;
}
</style>
