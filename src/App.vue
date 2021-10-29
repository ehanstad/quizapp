<template>
  <div class="container">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};

</script>

<style>
.container {
  margin: 0;
  width: 100%;
  height: 100vh;
  background-color: #03506F;
  overflow: auto;
}
#app {
  font-family:'Courier New', Courier, monospace;
  height: 100vh;
}
html {
  margin: 0;
  width: 100%;
  height: 100vh;
}
body {
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
