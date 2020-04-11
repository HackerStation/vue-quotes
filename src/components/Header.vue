<template>
  <div class="header">
    <div class="row">
      <div class="col-6 col-lg-12">
        <h1>Quotes Added</h1>
        <div class="progress-bar">
          <div
            class="progress-bar text-center"
            v-if="currentNumOfQuotes > 0"
            :style="[{'background-color': '#007BFF', margin: 0, color: 'white', 'padding-top': '10px', width: currentNumOfQuotes * 10 + '%'}]"
          >{{ currentNumOfQuotes }} / {{ totalNumOfQuotes }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: function() {
    return {
      totalNumOfQuotes: 10,
      currentNumOfQuotes: 0
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.progress-bar {
  background-color: #c7c7c7;
  border-radius: 10px;
  color: #000;
  font-size: 16px;
  height: 40px;
  margin: 10px auto;
  width: 100%;
}
</style>
