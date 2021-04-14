import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    nama : '',
    umur : 1,
    tinggal : '',
    accessed : false
  },
  getters : {
    user(state){
      return {nama : state.nama, umur : state.umur, tinggal : state.tinggal}
    },
    accessed(state){
      return state.accessed
    },
  },
  mutations: {
    SET_USER(state, data){
      state.nama = data.nama
      state.umur = data.umur
      state.tinggal = data.tinggal
    },
    SET_LOGIN(state, data){
      state.accessed = data
    },
  },
  actions: {
    login({commit}, form){
      commit('SET_USER', form)
      commit('SET_LOGIN', true)
    },
    logout({commit}){
      commit('SET_LOGIN', false)
    }
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
