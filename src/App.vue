<template>
  <div id="app" class="container">
    <Header :maxQuotes="maxQuotes" :numOfQuotes="numOfQuotes" />
    <NewQuote @onSubmitQuote="submitQuote" />
    <AllQuotes :quotes="quotes" />
  </div>
</template>

<script>
import Header from "./components/Header";
import NewQuote from "./components/NewQuote";
import AllQuotes from "./components/AllQuotes";

export default {
  name: "App",
  components: {
    Header,
    NewQuote,
    AllQuotes
  },
  data: function() {
    return {
      quotes: [],
      maxQuotes: 5,
      numOfQuotes: 0
    };
  },
  methods: {
    submitQuote(quote) {
      this.quotes.push(quote);
      this.numOfQuotes++;
    }
  }
};
</script>

<style>
#app {
  margin: 60px auto;
}
</style>
