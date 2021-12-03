import Vue from "vue";
import Vuex from "vuex";

import auth from "./auth";
import inference from "./inference";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    alertMessage: "",
  },
  mutations: {
    ["LOADING"](state, loadingState) {
      state.loading = loadingState;
    },
    ["ALERT"](state, message) {
      state.alertMessage = message;
      setTimeout(() => (state.alertMessage = ""), 100);
    },
  },
  actions: {},
  modules: {
    auth,
    inference,
  },
});
