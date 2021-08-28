import Vue from "vue";
import Vuex from "vuex";
import axios from "../apis/server";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lastKeyword: "",
    searchResult: [],
    coronaViruses: [],
    page: 1,
    totalPage: 10,
    search_information: [],
  },
  mutations: {
    FETCH_SEARCH_ENGINE(state, payload) {
      state.lastKeyword = payload.lastKeyword;
      state.searchResult = payload.searchResult;
      state.search_information = payload.search_information;
    },
    FETCH_CORONA_INDONESIA(state, payload) {
      state.coronaViruses = [];
      state.coronaViruses = payload;
    },
    INCREMENT_PAGE(state, payload) {
      state.page = payload;
    },
  },
  actions: {
    async fetchSearchEngine(context, payload) {
      try {
        const response = await axios({
          url: `/search?keyword=${payload.keyword}&page=${payload.page}`,
          method: "GET",
        });
        context.commit("FETCH_SEARCH_ENGINE", {
          lastKeyword: payload,
          searchResult: response.data.organic_results,
          search_information: response.data.search_information,
        });
      } catch (error) {
        console.log(error);
      }
    },
    async fetchCoronaIndonesia(context) {
      try {
        const response = await axios({
          url: "/corona/indonesia",
          method: "GET",
        });
        context.commit("FETCH_CORONA_INDONESIA", response.data[0]);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
