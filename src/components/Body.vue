<template>
  <div id="body">
    <div :key="quiz.id" v-for="quiz in quizes">
      <Quiz :quiz="quiz"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Quiz from './Quiz.vue';

export default {
  name: 'Body',

  components: {
    Quiz,
  },

  data() {
    return {
      quizes: [],
    };
  },

  computed: mapGetters(['allQuizes']),

  created() {
    this.fetchQuizes();
    this.quizes = this.$store.state.quizes.quizes;
  },

  methods: {
    ...mapActions(['fetchQuizes']),
  },
};
</script>

<style scoped>
#body {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
