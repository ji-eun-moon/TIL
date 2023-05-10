<template>
  <div id="app">
    <h1>Todo</h1>
    <h2>All Todos: {{ allTodosCount }}</h2>
    <h2>Complete Todos: {{ completedTodosCount }}</h2>
    <h2>unCompleted Todos: {{ unCompletedTodosCount }}</h2>
    <TodoForm/>
    <TodoList />
    <button @click="loadTodos">Todo 불러오기</button>
  </div>
</template>

<script>
import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList,
    TodoForm,
  },
  computed: {
    allTodosCount() {
      return this.$store.getters.allTodosCount
    },
    completedTodosCount() {
      return this.$store.getters.completedTodosCount
    },
    unCompletedTodosCount() {
      return this.$store.getters.unCompletedTodosCount
    },
  },
  methods: {
      loadTodos() {
      this.$store.dispatch('loadTodos')
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
