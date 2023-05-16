<template>
  <div>
    <h1>Article Page</h1>
    <router-link :to="{ name: 'CreateView' }">[CREATE]</router-link>
    <ArticleList />
    <hr>
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList.vue'

export default {
  name: 'ArticleView',
  components: {
    ArticleList,
  },
  computed:{
    isLogin() {
      return this.$store.getters.isLogin  // 로그인 여부
    }
  },
  created() {
    this.getArticles()
  },
  methods: {
    getArticles() {
      // 로그인이 되어 있으면 getArticles action 실행하고
      if (this.isLogin) {
        this.$store.dispatch('getArticles')
      } 
      // 로그인 되어 있지 않으면 login 페이지로 이동
      else {
        alert('로그인이 필요한 서비스 입니다.')
        this.$router.push({ name: 'LogInView' })
      }

    }
  }
}
</script>

<style>

</style>
