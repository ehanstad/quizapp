<template>
  <div id="nav-bar">
    <a @click="onClick()">Place 1</a>
    <a @click="loadCreateQuiz()">Create quiz</a>
    <a @click="onClick()">Place 3</a>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    onClick() {
      console.log('click');
    },
    loadCreateQuiz() {
      this.$router.push('create-quiz');
    },
  },
};
</script>

<style scoped>
a {
  color: #FFE3D8;
  text-decoration: none;
  font-size: 20px
}
a:hover {
  color: gold;
}
#nav-bar {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 10px;
}
</style>
