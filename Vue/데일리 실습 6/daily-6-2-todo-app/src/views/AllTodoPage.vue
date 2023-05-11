<template>
  <div>
    <h1>모든 할일</h1>
    <hr>
    <TodoList :todos="allTodoList" />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue"

export default {
    name: 'AllTodoPage',

    components: {
      TodoList,
    },

    computed: {
      allTodoList() {
        return this.$store.state.todo.list
      }
    }
}
</script>

<style>

</style>