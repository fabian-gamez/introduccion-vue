<template>
  <div class="mi-componente">
    <h1>{{ message }}</h1>

    <button @click="changeMessage">
      Cambiar mensaje
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'MyComponent',

  computed: {
    ...mapState(['message'])
  },

  methods: {
    ...mapMutations(['setMessage']),

    changeMessage() {
      this.setMessage('Hola a todos')
    }
  }
}
</script>

<style scoped>
.mi-componente {
  padding: 30px;
  font-family: Arial, sans-serif;
}

button {
  padding: 10px;
  cursor: pointer;
}
</style>