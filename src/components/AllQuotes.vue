<template>
  <div class="row">
    <div class="all-quotes">
      <Quote v-for="(quote, idx) in quotes" :key="idx" @click.native="deleteQuote(idx)">{{ quote }}</Quote>
    </div>
  </div>
</template>

<script>
import Quote from "./Quote";
export default {
  name: "AllQuotes",
  props: {
    quotes: Array
  },
  components: {
    Quote
  },
  methods: {
    deleteQuote(idx) {
      this.$emit("onDeleteQuote", idx);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.all-quotes {
  padding: 15px;
}
</style>