<template>
  <div class="question" :style="{background: color}">
    <label>{{ question.text }}</label>
    <input
      v-model="answer"
      @change="controlAnswer"
      type="text"
      name="answer"
    />
    <img :src="question.img" />
  </div>
</template>

<script>
export default {
  name: 'Question',
  props: {
    question: {
      type: Object,
    },
  },
  data() {
    return {
      answer: '',
      color: '#FFE3D8',
    };
  },
  methods: {
    controlAnswer() {
      this.question.answers.forEach((a) => {
        if (a === this.answer) {
          this.color = 'yellowgreen';
        }
      });
    },
  },
};
</script>

<style scoped>
.question {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self:baseline;
  border: solid black 1px;
  background-color: yellowgreen;
  color: black;
  width: 700px;
  margin-bottom: 20px;
}
input {
  width: 290px;
}
img {
  width: 500px;
  margin: 10px;
  border: solid black 1px;
}
label {
  font-size: 25px;
  margin: 10px;
}
</style>
