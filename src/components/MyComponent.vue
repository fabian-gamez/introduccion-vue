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
  max-width: 800px;
  margin: 40px auto;
  padding: 35px;
  font-family: Arial, sans-serif;
  background: #f5f7fa;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  text-align: center;
}

button {
  padding: 12px 24px;
  margin-top: 15px;
  border: none;
  border-radius: 8px;
  background: #2c3e50;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background: #3498db;
  transform: translateY(-2px);
  box-shadow: 0 5px 12px rgba(52, 152, 219, 0.3);
}

button:active {
  transform: translateY(0);
}
</style>