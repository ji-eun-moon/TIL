<template>
  <div id="app">
    <SideBar/>
    <div class="router-view">
      <div class="container">
        <router-view/>
      </div>
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

.router-view {
  border-radius: .5rem;
  border: 2px solid #2c3e50;
  padding: 2rem 1.25rem;
  width: 100vw;
  height: 100vh;
  margin: 5px;
}
</style>
