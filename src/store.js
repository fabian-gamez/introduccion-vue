import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      message: 'Hola mundo desde Vuex'
    }
  },

  mutations: {
    setMessage(state, newMessage) {
      state.message = newMessage
    }
  }
})
