import { serviceMock } from '@/services/mock.service'
import {createStore} from 'vuex'


export const store = createStore({
  state: {
    loading:false,
    data:[]
  },
  actions:{
   async getMock(contex){
        const data = await serviceMock.getMock()
        contex.commit('GET_MOCK',data)
    }
  },
  mutations: {
    GET_MOCK(state,payload) {
      state.loading = true
      state.data = payload
      state.loading = false
    }
  },
  getters:{
    loading: state => state.loading,
    data: state => state.data
  }

})