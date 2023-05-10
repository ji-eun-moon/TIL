<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link :to="{ name: 'home'}">HOME</router-link> |
    <button @click="toHome">홈으로</button><br>
    <br>
    <h1>강아지 사진 불러오기</h1>
    <span>breed : </span>
    <input type="text" @keyup.enter="getDog" v-model="inputData">
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      inputData: null
    }
  },
  methods : {
    toHome() {
      this.$router.push({ name: 'home' })
    },
    getDog() {
      this.$router.push({ name: 'dog', params: { breed: this.inputData }})
    }
  }
}
</script>