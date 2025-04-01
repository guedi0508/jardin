import axios from 'axios';

// store/auth.js
const state = {
  token: localStorage.getItem('token') || null,
};

const getters = {
  isAuthenticated: (state) => !!state.token,
};

const actions = {
  login({ commit }, token) {
    localStorage.setItem('token', token);
    commit('setToken', token);
  },
  logout({ commit }) {
    localStorage.removeItem('token');
    commit('setToken', null);
  },
  checkAuthStatus({ commit }) {
    const token = localStorage.getItem('token');
    if (token) {
      commit('setToken', token);
    }
  },
};

const mutations = {
  setToken(state, token) {
    state.token = token;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};