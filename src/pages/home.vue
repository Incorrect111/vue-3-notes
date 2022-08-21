<template>
  <Form @onSubmit="handleSubmit" @addTag="handleTag" />
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
              title: 'work',
              isActive: false
            }
          ]
        },
        {
          title: 'Finish course',
          tags: [
            {
              title: 'work',
              isActive: false
            },
            {
              title: 'home',
              isActive: false
            }
          ]
        }
      ]
    }
  },

  mounted() {
    this.getNotes()
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
      //Reset tagIsactive
      note.tags.forEach(el => {
        el.isActive = false
      })
      this.notes.push(note)
    },

    // * remove note
    handleRemove(index) {
      this.notes.splice(index, 1)
    },
    handleTag(tag) {
      console.log(tag)
    }
  }
}
</script>
