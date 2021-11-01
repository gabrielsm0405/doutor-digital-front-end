const TOKEN_STORAGE_KEY = "KNJNkjnkjnLKNLKnln12182";

const getters = { isAuthenticated: (state) => !!state.token };

const initialState = {
  token: null,
};

const actions = {
  initialize({ commit }) {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);

    if (token) commit("SET_TOKEN", token);
    else commit("REMOVE_TOKEN");
  },
  signout({ commit }) {
    commit("REMOVE_TOKEN");
  },
};

const mutations = {
  ["SET_TOKEN"](state, token) {
    localStorage.setItem(TOKEN_STORAGE_KEY, token);

    state.token = token;
  },
  ["REMOVE_TOKEN"](state) {
    localStorage.removeItem(TOKEN_STORAGE_KEY);

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
