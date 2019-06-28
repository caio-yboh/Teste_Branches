<template>
  <div>
    <h3>Author Quote</h3>
    <button @click="counter++">Increase</button>
    <p>{{counter}}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        counter: 0
      }
    },
    created() {
      console.log('Component Author Created!')
    },
    destroyed() {
      console.log('Component Author Destroyed!')
    },
    deactivated() {
      console.log('Component Author Deactivated!');
    },
    activated() {
      console.log('Component Author Activated!');
    }
  }
</script>

<style scoped>
</style>
