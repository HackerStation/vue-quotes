<template>
  <div class="row">
    <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <div class="new-quote">
        <h3>Quote</h3>
        <textarea
          id="new-quote"
          cols="80"
          rows="5"
          placeholder="Enter your quote..."
          @change="updateQuote"
          v-model="quote"
        ></textarea>
        <div class="submit-quote text-center">
          <button class="btn btn-primary" @click="submitQuote">Add Quote</button>
        </div>
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
      this.quote = event.target.value.trim();
    },
    submitQuote() {
      if (this.quote && this.quote.length !== 0) {
        this.$emit("onSubmitQuote", this.quote);
        this.quote = "";
      } else {
        alert("Please enter a quote");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.new-quote {
  margin: 60px auto;
  /* width: 66.66%; */
}
#new-quote {
  margin-top: 10px;
}
.submit-quote {
  margin-top: 15px;
}
</style>