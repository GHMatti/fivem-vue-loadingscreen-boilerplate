<template>
  <v-app>
    <div id="bg">
      <img src="./assets/bg.jpeg" />
    </div>
    <div id="progress">
      <v-progress-linear v-model="progress" v-bind:indeterminate="total === 0"></v-progress-linear>
      <p>{{ msg }}</p>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      total: 0,
      count: 0,
      msg: '',
    };
  },
  computed: {
    progress() {
      return (this.count / this.total) * 100.0;
    },
  },
  mounted() {
    this.listener = window.addEventListener('message', (event) => {
      const item = event.data || event.detail;
      if (item.name) this.msg = item.name;
      if (item.count) this.total += item.count;
      if (item.idx) this.count += 1;
    });
  },
};
</script>

<style>
::-webkit-scrollbar {
  width: 0;
  background: yellow;
  display: inline !important;
}

#bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
}

#progress {
  position: fixed;
  top: 30%;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20%;
  text-align: center;
  z-index: 11;
}

#bg img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: block;
  max-width: 100%;
  width: auto;
  height: auto;
}
</style>
