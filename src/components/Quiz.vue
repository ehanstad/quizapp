<template>
  <a @click="getQuiz(quiz.id)">
    <div>
      <h2>{{ quiz.name }}</h2>
      <p>{{ quiz.info }}</p>
    </div>
  </a>
</template>

<script>
import { mapActions } from 'vuex';

export default {

  name: 'Quiz',

  props: {
    quiz: Object,
  },

  methods: {
    ...mapActions(['fetchQuiz']),

    getQuiz(id) {
      this.fetchQuiz(id);
      this.$router.push('quiz');
    },
  },
};
</script>

<style scoped>
a :hover {
  background-color: #0A043C;
  color: #FFE3D8;
}
div {
  background-color: #FFE3D8;
  color: #0A043C;
  width: 50%;
  border: 1px solid black;
  margin: 10px;
}
h2, p {
  padding-left: 10px;
}
</style>
