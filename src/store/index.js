import { createStore } from 'vuex';

export const store = createStore({
  state: {
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
    ],
  },
  mutations: {
    pushNote(state, note) {
      state.notes.push(note)
    }
  },
  actions: {
    pushNote(context, note){
      context.commit('pushNote', note)
    }
  },
  getters: {
    getNotes: state => state.notes
  }
})