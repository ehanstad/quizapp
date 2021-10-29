import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import quizes from './modules/quizes';

const store = createStore({
  plugins: [createPersistedState({
    storage: window.sessionStorage,
  })],
  modules: {
    quizes,
  },
});

export default store;
