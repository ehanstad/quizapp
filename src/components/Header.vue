<template>
  <div id="header">
    <a @click="loadFront">
      <h1>Quiz</h1>
    </a>
    <NavBar />
  </div>
</template>

<script>
import NavBar from './NavBar.vue';

export default {
  name: 'Header',

  components: {
    NavBar,
  },

  methods: {
    loadFront() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
#header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #EEEEEE;
  background-color: #0A043C;
}
div {
  width: 100%;
}
h1 {
  font-size: 60px;
}
</style>
