<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link :to="{ name: 'home'}">Home</router-link> |
    <!-- 프로그래밍 방식 네비게이션 -->
    <button @click="toHome">홈으로!!!</button>
    <br>
    <!-- AboutView에서 데이터를 입력 받아 HelloView로 이동 -->
    <input type="text" @keyup.enter="goToHello" v-model="inputData">
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      inputData: null,
    }
  },
  methods: {
    toHome() {
      this.$router.push({name: 'home'})
    },
    goToHello() {
      this.$router.push({name: 'hello', params: { userName: this.inputData}})
    }
  }
}
</script>