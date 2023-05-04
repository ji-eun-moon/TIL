<template>
  <div id="app">
    <h1>소득세 계산기</h1>
    <IncomeView />
  </div>
</template>

<script>
import IncomeView from './components/IncomeView.vue'

export default {
  name: 'App',
  components: {
    IncomeView,
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
