<template>
  <div id="app" class="container">
    <Header :maxQuotes="maxQuotes" :numOfQuotes="numOfQuotes" />
    <NewQuote @onSubmitQuote="submitQuote" />
    <AllQuotes :quotes="quotes" @onDeleteQuote="deleteQuote" />
    <div class="col-sm-12 del-info">
      <div class="alert alert-warning">Info: Click on a quote to delete it!</div>
    </div>
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
    },
    deleteQuote(idx) {
      this.quotes = this.quotes.filter((quote, id) => id !== idx);
    }
  }
};
</script>

<style>
#app {
  margin: 60px auto;
}
.del-info {
  margin-top: 50px;
}
</style>
