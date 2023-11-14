import {createStore} from 'vuex'

export const store = createStore({
  state: {
    loading:false,
    file:'IMAGE'
  },
  actions:{
   async getFile(contex,file){
        contex.commit('FILE_UPLOAD',file)
    }
  },
  mutations: {
    FILE_UPLOAD(state,payload) {
      state.loading = true
      state.file = payload
      state.loading = false
    }
  },
  getters:{
    loading: state => state.loading,
    file: state => state.file
  }

})