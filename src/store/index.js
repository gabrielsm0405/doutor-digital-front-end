import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth";
import inference from "./inference";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
  },
  mutations: {
    ["LOADING"](state, loadingState) {
      state.loading = loadingState;
    },
  },
  actions: {},
  modules: {
    auth,
    inference,
  },
});
