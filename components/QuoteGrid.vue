<template>
  <div class="row">
    <Quote v-for="(quote, index) in quotes" :key="quote.id" @click.native="deleteQuote(index)">{{quote}}</Quote>
  </div>
</template>

<script>
import Quote from './Quote.vue'

export default {
  props: {
    quotes: Array,
  },
  components: {
      Quote
  },
  data() {
    return {
      quote: undefined
    }
  },
  methods: {
    deleteQuote(index) {
      this.$emit('quoteDeleted', index)
    }
  }
}
</script>

<style scoped>

</style>
