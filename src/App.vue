<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p v-for="(msg, index) in messages" v-bind:key="index">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      messages: [],
    };
  },
  mounted() {
    this.listener = window.addEventListener('message', (event) => {
      const item = event.data || event.detail;
      // to use progressbars first check for item.count then
      // for item.idx in the next ones to get the current
      // progress percentage
      this.messages.push(JSON.stringify(item));
    });
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  background-color: #ffffff;
}
</style>
