const FILE_STORAGE_KEY = "knsadas99a0902m1";

const initialState = {
  response: null,
};

const actions = {
  getInference({ commit }, { key, file }) {
    commit("LOADING", true, { root: true });

    console.log(key);
    console.log(file);

    const response = "JUST_A_TEST";
    commit("auth/SET_TOKEN", key, { root: true });
    commit("SET_RESPONSE", response);

    commit("LOADING", false, { root: true });
  },
};

const mutations = {
  ["SET_RESPONSE"](state, response) {
    localStorage.setItem(FILE_STORAGE_KEY, response);
    state.response = response;
  },
};

export default {
  namespaced: true,
  state: initialState,
  actions,
  mutations,
};
