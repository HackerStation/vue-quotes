<template>
  <div id="app" class="container">
    <Header />
    <NewQuote />
    <AllQuotes />
    <Quote />
  </div>
</template>

<script>
import Header from "./components/Header";
import NewQuote from "./components/NewQuote";
import AllQuotes from "./components/AllQuotes";
import Quote from "./components/Quote";

export default {
  name: "App",
  components: {
    Header,
    NewQuote,
    AllQuotes,
    Quote
  }
};
</script>

<style>
#app {
  /* font-family: "Arizonia", cursive; */
  margin: 60px auto;
}
</style>
