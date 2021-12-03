const getters = { isAuthenticated: (state) => !!state.token };

const initialState = {
  token: null,
};

const actions = {
  login({ commit }, token) {
    commit("SET_TOKEN", token);
  },
  signout({ commit }) {
    commit("REMOVE_TOKEN");
  },
};

const mutations = {
  ["SET_TOKEN"](state, token) {
    state.token = token;
  },
  ["REMOVE_TOKEN"](state) {
    state.token = null;
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
