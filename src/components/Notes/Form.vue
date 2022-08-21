<template>
  <div class="note-form__wrapper">
    <form class="note-form" @submit.prevent="onSubmit">
      <textarea
        type="text"
        required
        v-model="inputValue"
        placeholder="Type your note"
      />
      <TagsList :isActive = false @onItemClick="pushTags" :items="tags" />
      <button class="btn btnPrimary" type="submit">Add note</button>
    </form>
  </div>
</template>

<script>
import TagsList from '@/components/UI/TagsList.vue'

export default {
  components: {
    TagsList
  },
  data() {
    return {
      inputValue: '',
      tags: [
        {
          title: 'home',
          isActive: false
        },
        {
          title: 'work',
          isActive: false
        },
        {
          title: 'travel',
          isActive: false
        }
      ],
      tagsSelected: []
    }
  },
  methods: {
    //push note
    onSubmit() {
      this.$emit('onSubmit', {
        title: this.inputValue,
        tags: this.tagsSelected
      })
      this.inputValue = ''
      this.tagsSelected = []
      
    },
    //push tags
    pushTags(tag) {
      this.isActive =! this.isActive
      if (!this.tagsSelected.some(el => el.title === tag.title)) {
        this.tagsSelected.push(tag)
      }
    }
  }
}
</script>

<style lang="scss">
.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.note-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  textarea {
    margin-bottom: 0;
  }
}
</style>
