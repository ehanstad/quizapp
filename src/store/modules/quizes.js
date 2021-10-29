/* eslint-disable no-shadow */
/* eslint-disable no-return-assign */
const state = {
  activeQuiz: {},
  quizes: [],
  questions: [],
};

const getters = {
  allQuizes: () => state.quizes,
};

const actions = {
  async fetchQuizes({ commit }) {
    const res = await fetch('http://localhost:5000/quiz');
    const data = await res.json();
    commit('setQuizes', data);
  },

  async fetchQuiz({ commit }, id) {
    const res = await fetch(`http://localhost:5000/quiz/${id}`);
    const data = await res.json();
    commit('setActiveQuiz', data);
  },

  addQuestion({ commit }, question) {
    commit('newQuestion', question);
  },

  async addQuiz({ commit }, quiz) {
    await fetch('http://localhost:5000/quiz', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(quiz),
    });

    commit('resetQuestions');
  },
};

const mutations = {
  setQuizes: (state, quizes) => (state.quizes = quizes),
  setActiveQuiz: (state, quiz) => (state.activeQuiz = quiz),
  newQuestion: (state, question) => state.questions.unshift(question),
  resetQuestions: (state) => state.questions = [],
};

export default {
  state,
  getters,
  actions,
  mutations,
};
