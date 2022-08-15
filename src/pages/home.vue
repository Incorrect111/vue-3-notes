<template>
  <Form @onSubmit="handleSubmit" />
  <List @onRemove="handleRemove" :notes="notes" />
</template>

<script>
import Form from '@/components/Notes/Form.vue'
import List from '@/components/Notes/List.vue'

export default {
  components: { Form, List },
  data() {
    return {
       notes: ['task1','task2','task3'],
    }
  },
  methods: {
    handleSubmit(note) {
      this.notes.push(note)
    },
    handleRemove(index) {
      this.notes.splice(index, 1);
    }
  }
}
</script>
