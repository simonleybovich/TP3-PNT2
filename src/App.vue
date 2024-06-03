<template>
  <div class="conteiner mt-3">
    <div class="jumbotron">
      <h2>Trabajo Practico N°3</h2>
      <br>
      <Navbar/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h2{
  color: black;
}
</style>
