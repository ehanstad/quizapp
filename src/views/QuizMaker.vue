<template>
  <div class="quiz-maker">

    <h2>Create quiz</h2>
    <form @submit="saveQuestion">
      <div>
        <label>Question</label>
        <input type="text" v-model="question" name="question">
      </div>
      <div>
        <label>Image src</label>
        <input type="text" v-model="img" name="img">
      </div>
      <div>
        <label>Correct answers</label>
        <input type="text" v-model="answer" name="answer">
      </div>
      <input class="button" type="submit" value="Add question">
    </form>

    <div class="questions">
      <div :key="question.id" v-for="question in this.questions">
          <Question :question="question"/>
      </div>
    </div>

    <form @submit="saveQuiz" id="quiz-maker">
      <select v-model="category" name="category" id="category">
        <option value="" selected disabled hidden>Category</option>
        <option value="music">Music</option>
        <option value="music">Film</option>
        <option value="music">Geography</option>
      </select>
      <div>
        <label>Quiz name</label>
        <input type="text" v-model="name" name="name">
      </div>
      <div>
        <label>Describe your quiz</label>
        <input type="text" v-model="info" name="info">
      </div>
      <input class="button" type="submit" value="Save Quiz">
    </form>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { uuid } from 'vue-uuid';
import Question from '../components/QuestionSmall.vue';

export default {
  name: 'QuizMaker',

  components: {
    Question,
  },

  computed: mapGetters(['allQuizes']),

  data() {
    return {
      name: '',
      info: '',
      question: '',
      img: '',
      answer: '',
      category: '',
      questions: [],
    };
  },

  beforeMount() {
    this.questions = this.$store.state.quizes.questions;
  },

  updated() {
    this.questions = this.$store.state.quizes.questions;
  },

  methods: {
    ...mapActions(['addQuestion', 'addQuiz']),

    saveQuiz() {
      const c = {
        name: this.name,
        info: this.info,
        category: this.category,
        questions: this.$store.state.quizes.questions,
      };
      this.addQuiz(c);
    },
    saveQuestion() {
      const id = uuid.v1();
      const question = {
        text: this.question,
        img: this.img,
        id,
        answer: this.answer,
      };
      this.addQuestion(question);
    },
  },
};
</script>

<style scoped>
h2 {
  color: #EEEEEE;
  font-size: 30px;
  margin-left: 20px;
}
form {
  margin-left: 40px;
}
label {
  color: #EEEEEE;
  font-size: 20px;
  margin-bottom: 5px;
}
div {
  display: flex;
  flex-direction: column;
}
input {
  width: 230px;
  margin-bottom: 5px;
}
.questions {
  direction: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  margin: 20px;
}
.button {
  display:inline-block;
  background-color: #03506F;
  padding:0.35em 1.2em;
  border:0.1em solid #FFFFFF;
  margin:0 0.3em 0.3em 0;
  border-radius:0.12em;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  font-weight:300;
  color:#FFFFFF;
  text-align:center;
  transition: all 0.2s;
  margin: 10px;
  width: 150px;
}
.button:hover {
  color:#03506F;
  background-color:#FFFFFF;
}
select {
  padding: 5px;
  width: 150px;
  margin-bottom: 10px;
  margin-top: 10px;
  cursor: pointer;
  background-color: #03506F;
  color: #FFFFFF;
  border: #FFFFFF solid 1px;
  list-style: none;
  font-size: 15px;
  font-family:'Roboto',sans-serif;
}
option {
  background-color: #EEEEEE;
  color: #03506F;
}
</style>
