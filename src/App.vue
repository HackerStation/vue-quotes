<template>
  <div id="app" class="container">
    <Header :maxQuotes="maxQuotes" :currentQuotes="currentQuotes" />
    <NewQuote @onSubmitQuote="quotes.push($event)" />
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
      quotes: ["Hey!", "Hey hey hey!!"],
      maxQuotes: 5,
      currentQuotes: 0
    };
  },
  methods: {}
};
</script>

<style>
#app {
  /* font-family: "Arizonia", cursive; */
  margin: 60px auto;
}
</style>
