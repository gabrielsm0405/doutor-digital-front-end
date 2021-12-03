import session from "../api/session";

const initialState = {
  response: null,
};

const actions = {
  getInference({ commit }, { key, file }) {
    commit("LOADING", true, { root: true });

    var formData = new FormData();
    formData.append("originalImage", file);
    formData.append("key", key);

    return session
      .post("/inference/", formData)
      .then((response) => {
        commit("auth/SET_TOKEN", key, { root: true });

        response.data.sort((firstEl, secondEl) => {
          if (firstEl.prediction < secondEl.prediction) return 1;
          else return -1;
        });
        commit("SET_RESPONSE", response.data);
        commit("SET_TOKEN", key);

        commit("LOADING", false, { root: true });
      })
      .catch((error) => {
        commit("LOADING", false, { root: true });
        commit("ALERT", error.response.data.error, { root: true });
      });
  },
};

const mutations = {
  ["SET_RESPONSE"](state, response) {
    state.response = response;
  },
  ["REMOVE_RESPONSE"](state) {
    state.response = null;
  },
};

export default {
  namespaced: true,
  state: initialState,
  actions,
  mutations,
};
