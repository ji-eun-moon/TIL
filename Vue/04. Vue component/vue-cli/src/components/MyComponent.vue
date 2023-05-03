<template>
  <div class="border">
    <h1>This is my Component</h1>
    <MyChild/>
    <MyChild/>
    <MyChild/>
  </div>
</template>

<script>
// 자식 컴포넌트
import MyChild from '@/components/MyChild.vue'

export default {
    name: 'MyComponent',
    components: {
        MyChild,
    }

}
</script>

<style>
.border { 
    border: solid;
}
</style>