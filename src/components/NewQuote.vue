<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <div class="new-quote">
        <h3>Quote</h3>
        <textarea
          id="new-quote"
          cols="100"
          rows="5"
          placeholder="Enter your quote..."
          @keyup="updateQuote"
        ></textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewQuote",
  data: function() {
    return {
      quote: ""
    };
  },
  methods: {
    updateQuote(event) {
      this.quote = event.target.value;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.new-quote {
  margin: 60px auto;
  width: 66.66%;
}
#new-quote {
  margin-top: 10px;
}
</style>