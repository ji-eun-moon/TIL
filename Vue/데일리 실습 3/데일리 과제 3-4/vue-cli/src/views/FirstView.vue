<template>
  <div class="first">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="첫 번째 페이지 입니다."/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
