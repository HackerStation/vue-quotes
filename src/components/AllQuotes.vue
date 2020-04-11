<template>
  <div class="row">
    <div class="all-quotes">
      <Quote v-for="quote in quotes" :key="quote">{{ quote }}</Quote>
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>