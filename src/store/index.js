import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import axios from 'axios';

import { BASE_API_URL } from '@/data';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      _id: '',
      name: '',
      status: '',
      roles: [],
      description: '',
      picture: '',
    },
  },
  getters: {
    isAdmin: (state) => {
      return state.user.roles.includes('ADMIN');
    },
    isUser: (state) => {
      return state.user.roles.includes('USER');
    },
    isUserAuthorized: (state) => {
      return Boolean(state.user._id);
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.user = {
        ...state.user,
        ...payload,
      };
    },
    clearUser(state) {
      state.user._id = '';
      state.user.name = '';
      state.user.status = '';
      state.user.roles = [];
      state.user.description = '';
      state.user.picture = '';
    },
  },
  actions: {
    loadCurrentUser({ commit }) {
      return axios
        .get(`${BASE_API_URL}/users/current`, {
          headers: {
            Authorization: `Bearer: ${localStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          commit('updateUser', response.data);
        })
        .catch((error) => console.log('error', error));
    },
  },
  plugins: [createLogger()],
});
