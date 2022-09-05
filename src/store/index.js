import {
  createStore
} from 'vuex';

export const store = createStore({
  state: {
    
  },
  mutations: {
    pushNote(state, note) {
      state.notes.push(note)
    }
  },
  actions: {
    pushNote(context, note) {
      context.commit('pushNote', note)
    }
  },
  getters: {
    getNotes: state => state.notes,
    getTags: state => state.tags
  }
})