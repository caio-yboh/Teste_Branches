<template>
  <div>
    <h3>New Quote</h3>
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
      console.log('Component New Created!')
    },
    destroyed() {
      console.log('Component New Destroyed!')
    },
    deactivated() {
      console.log('Component New Deactivated!');
    },
    activated() {
      console.log('Component New Activated!');
    }
  }
</script>

<style scoped>
</style>
