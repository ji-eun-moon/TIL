<template>
  <ul>
    <TodoListItem v-for="todo in todos" :key="todo.id" :todo="todo"
    @toggle-completed="toggleCompleted"
    @toggle-important="toggleImportant"/>
  </ul>
</template>

<script>
import TodoListItem from './TodoListItem.vue'

export default {
    components: {
        TodoListItem
    },
    props: {
        todos: Object
    },
    methods: {
    toggleCompleted(todoId) {
      const todo = this.todos.find(todo => todo.id === todoId)
      todo.isCompleted = !todo.isCompleted
    },
    toggleImportant(todoId) {
      const todo = this.todos.find(todo => todo.id === todoId)
      todo.isImportant = !todo.isImportant
    }
  }

}
</script>

<style>

</style>