<template>
  <div class="row">
    <form action="">
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <label for="">Quote</label>
        <textarea class="form-control" name="" id="" cols="3" rows="10" v-model="quoteText"></textarea>
      </div>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
        <button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quoteText: ''
    }
  },
  methods: {
    createNew() {
      this.$emit('quoteAdded', this.quoteText)
      this.quoteText = ''
    }
  }
}
</script>

<style scoped>

</style>
