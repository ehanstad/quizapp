<template>
  <div id="quiz-body">
    <div>
      <h2>{{ quiz.name }}</h2>
      <p>{{ quiz.info }}</p>
    </div>
    <div :key="question.id" v-for="question in quiz.questions">
      <Question :question="question"/>
    </div>
  </div>
</template>

<script>
import Question from './Question.vue';

export default {
  name: 'QuizBody',
  components: {
    Question,
  },

  data() {
    return {
      quiz: {},
    };
  },

  created() {
    this.quiz = this.$store.state.quizes.activeQuiz;
  },
};
</script>

<style scoped>
#quiz-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #FFE3D8;
  width: 100%;
  overflow: auto;
}
h2, p {
  padding-right: 300px;
}
p {
  color: black;
}
</style>
