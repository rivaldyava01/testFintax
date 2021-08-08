<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div id="app">
     <Navbar></Navbar>
  </div>
 
</template>

<script>
import Navbar from './components/navbar.vue'
export default {
  name: 'app',
 components: {
      Navbar
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
