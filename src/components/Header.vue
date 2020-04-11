<template>
  <div class="row">
    <div class="col-6 col-lg-12">
      <div class="header">
        <h1>Quotes Added</h1>
        <div class="progress-bar">
          <div
            v-if="quoteCount > 0"
            class="progress-bar text-center"
            :style="[{'background-color': '#007BFF', margin: 0, color: 'white', 'padding-top': '10px', width: (quoteCount / maxQuotes) * 100 + '%'}]"
          >{{ quoteCount }} / {{ maxQuotes }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    maxQuotes: Number,
    quoteCount: Number
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.progress-bar {
  background-color: #c7c7c7;
  border-radius: 10px;
  color: #000;
  font-size: 16px;
  height: 35px;
  margin: 10px auto;
  width: 100%;
}
</style>
