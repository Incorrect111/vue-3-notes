<template>
  <Form @onSubmit="handleSubmit" />
  <List @onRemove="handleRemove" :items="notes" />
</template>

<script>
import Form from '@/components/Notes/Form.vue'
import List from '@/components/Notes/List.vue'

export default {
  components: { Form, List },
  data() {
    return {
      notes: [
        {
          title: 'Learn vue 3',
          tags: [
            {
              title: 'work'
            }
          ]
        },
        {
          title: 'Finish course',
          tags: [
            {
              title: 'work'
            },
            {
              title: 'home'
            }
          ]
        }
      ]
    }
  },

  watch: {
    notes: {
      handler(updatedList) {
        localStorage.setItem('notes', JSON.stringify(updatedList))
      },
      deep: true
    }
  },
  methods: {
    // * Get / Set notes
    getNotes() {
      const localNotes = localStorage.getItem('notes')
      if (localNotes) {
        this.notes = JSON.parse(localNotes)
      }
    },
    // * submit note
    handleSubmit(note) {
      this.notes.push(note)
    },

    // * remove note
    handleRemove(index) {
      this.notes.splice(index, 1)
    }
  }
}
</script>
