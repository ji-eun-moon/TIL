<template>
  <div id="app">
    <SideBar/>
      <div class="container">
        <router-view/>
      </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'

export default {
  components: {
    SideBar
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
  display: flex;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.container {
  border-radius: .5rem;
  border: 2px solid #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin: 5px;
  width: 100vw;
  height: 100vh;
}
</style>
