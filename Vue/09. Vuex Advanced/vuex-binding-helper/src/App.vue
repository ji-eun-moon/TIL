<template>
  <div id="app">
    <h1>길이 {{ messageLength }}의 메시지 {{ message }}를 입력받음</h1>
    <h3>x2 : {{ doubleLength }}</h3>
    <h1>{{ age }}</h1>
    <!-- mapActions 배열 형태로 매핑 -->
    <!-- <input type="text" @keyup.enter="changeMessage(inputData)" v-model="inputData"> -->

    <!-- mapActions 객체 형태로 매핑 -->
    <input type="text" @keyup.enter="onSubmit" v-model="inputData">
    
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
  },

  created() {
    this.$store.dispatch('loadMessage')
  },

  computed: {

    // 둘 다 사용 가능!
    // mapState - 배열 형태로 매핑
    ...mapState(['age']),

    // mapState - 객체 형태로 매핑
    ...mapState({
      msg: state => state.message
    }),

    // mapGetters 매핑
    ...mapGetters(['messageLength', 'doubleLength'])

  },
  data() {
    return {
      inputData: null,
    }
  },
  methods: {

    // mapActions - 배열 형태로 매핑
    // ...mapActions(['changeMessage']),

    // mapActions - 객체 형태로 매핑
    ...mapActions({
      actionsChangeMessage: 'changeMessage'
    }),
    onSubmit() {
      const newMessage = this.inputData
      this.actionsChangeMessage(newMessage)
      this.inputData = null
    }
  },
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
