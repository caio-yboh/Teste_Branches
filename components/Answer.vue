<template>
  <div class="container" style="width: 600px;">
    <div class="row" v-if="correct">
      <div class="alert alert-success text-center">
          <h1>That's Correct!</h1>
          <hr>
          <button class="btn btn-primary" @click="onNextQuestion">Next Question</button>
      </div>
    </div>
    <div class="row" v-if="!correct">
      <div class="alert alert-danger text-center">
        <h1>Wrong, try again!</h1>
        <hr>
        <button class="btn btn-primary" @click="onNextQuestion">Next Question</button>
      </div>
    </div>
  </div>
</template>
<style>

</style>
<script>
    export default{
      props: ['correct'],
      methods: {
          onNextQuestion() {
              this.$emit('confirmed');
          }
      }
    }
</script>
