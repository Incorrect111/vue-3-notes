<template>
<div class="note-form__wrapper">
  <form class="note-form" @submit.prevent="onSubmit">
    <textarea type="text" required v-model="inputValue" placeholder="Type your note" />
    <button class="btn btnPrimary" type="submit">Add note</button>
  </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    onSubmit() {
      this.$emit('onSubmit', this.inputValue)
      console.log(this.inputValue)
      this.inputValue = ''
    }
  }
}
</script>

<style>

.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.note-form{
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
}


</style>
