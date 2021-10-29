<template>
  <div class="question">
    <label> {{ question.text }}</label>
    <img :src="question.img" />
    <h2>Right answer: {{ question.answer }}</h2>
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
};
</script>

<style scoped>
.question {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: baseline;
  border: solid black 1px;
  background-color: #FFE3D8;
  color: black;
  width: 200px;
  margin-bottom: 20px;
}
img {
  width: 150px;
  margin: 10px;
  border: solid black 1px;
}
label {
  font-size: 20px;
  margin: 10px;
}
h2 {
  font-size: 20px;
}
</style>
