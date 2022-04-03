<template>
  <div id="app">
    <p src= "./components/Plop.vue"></p>
    <!-- <p>plop <br>(à la place du logo dans App.vue)</p> -->
    <!--<img alt="Vue logo" src="./assets/logo.png"> -->
    <Plop msg=""/> 
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Plop from './components/Plop.vue'

export default {
  name: 'App',
  components: {
    Plop
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
</style>
