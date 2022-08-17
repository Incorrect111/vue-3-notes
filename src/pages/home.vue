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
          tags: ['work']
        },
        {
          title: 'Finish course',
          tags: ['work', 'home']
        },
        {
          title: 'Hello',
          tags: []
        }
      ]
    }
  },

  mounted(){
    this.getNotes();
  },

  watch: {
    notes: {
      handler(updatedList){
        localStorage.setItem('notes', JSON.stringify(updatedList))
      },
      deep: true
    }
  },
  methods: {
    getNotes(){
      const localNotes = localStorage.getItem("notes")
      if (localNotes) {
        this.notes = JSON.parse(localNotes)
      }
    },
    handleSubmit(title) {
      const note = {
        title: title,
        tags:[]
      }
      this.notes.push(note)
      console.log(this.notes)
    },
    handleRemove(index) {
      this.notes.splice(index, 1)
    },
    handleTag(tag) {
      return tag
    }
  }
}
</script>
