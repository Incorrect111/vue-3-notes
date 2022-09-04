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
  mutations: {},
  actions: {},
  getters: {
    getNotes: state => state.notes
  }
})