<template>
  <div class="todo-list-item">
      <label>
        <input type="checkbox" class="me-3 d-none" :checked="isCompleted" @change="toggleCompleted">
        <i v-if="isCompleted" class="bi bi-check-circle text-success h4 clickable"></i>
        <i v-else class="bi bi-circle h4 clickable"></i>
        <span class="ms-2 clickable">
          {{ content }}
        </span>
      </label>
      <button class="btn ms-auto" @click="toggleImportant">
        <i v-if="isImportant" class="bi bi-star-fill ic-yellow" ></i>
        <i v-else class="bi bi-star ic-yellow"></i>
      </button>
  </div>
</template>

<script>
export default {
    name: 'TodoListItem',
    props: {
        todo: Object
    },
    methods:{
      toggleCompleted() {
            this.$emit('toggle-completed', this.todo.id);
        },
      toggleImportant() {
         this.$emit('toggle-important', this.todo.id)
        }
    },
    computed: {
        content() {
            return this.todo.content
        },
        isCompleted() {
            return this.todo.isCompleted
        },
        isImportant() {
            return this.todo.isImportant
        }
    
    }
}
</script>

<style scoped>
@import 'bootstrap/dist/css/bootstrap.min.css';

.todo-list-item {
  margin: 1rem 0;
  padding: 1rem;
  display: flex;
  align-items: center;
  border: 1px solid #D1D5DB;
  border-radius: .5rem;
  cursor: pointer;
}

.ic-yellow {
  color: #FBBF24;
}

.clickable {
  cursor: pointer;
}
</style>