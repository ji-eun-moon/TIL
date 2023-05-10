<template>
  <div>
    <li @click="updateTodoStatus" :class="{ 'is-completed' : todoitem.iscompleted }">{{ todoitem.title }}</li>
    <button @click="deleteTodo">Delete</button>
  </div>
  
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    todoitem: Object,
  },
  methods: {
    deleteTodo() {
      // console.log('Todo 삭제')
      this.$store.dispatch('deleteTodo', this.todoitem)
    },
    updateTodoStatus() {
      this.$store.dispatch('updateTodo', this.todoitem)
      console.log(this.todoitem)
      console.log('updateTodo')
    }
  }
}
</script>

<style>
  .is-completed {
    text-decoration: line-through;
  }
</style>