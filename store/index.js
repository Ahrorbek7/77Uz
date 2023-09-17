import Vue from 'vue';
import Vuex from 'vuex';
import categoryData from "../database/categories.json"
Vue.use(Vuex);

export const state = () => ({
  categories: [],
});

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories;
  },
};

export const actions = {
  fetchCategories({ commit }) {
    // Fetch categories from your JSON file or API
    const categories = categoryData.categories;
    commit('setCategories', categories);
  },
};

export const getters = {
  getCategories(state) {
    return state.categories;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
}); 