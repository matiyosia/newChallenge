import { serviceMock } from "@/services/mock.service";
import { createStore } from "vuex";

export const store = createStore({
  state: {
    loading: false,
    data: [],
  },
  actions: {
    async getMock(context) {
      const data = await serviceMock.getMock();
      context.commit("GET_MOCK", data);
    },
  },
  mutations: {
    GET_MOCK(state, payload) {
      state.data = payload;
    },
  },
  getters: {
    loading: (state) => state.loading,
    data: (state) => state.data,
  },
});
