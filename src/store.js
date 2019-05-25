import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: 0,
    username: {},
      itmes: [
          {name: '妈妈', tel: 1234555656, status: "亲人"},
          {name: 'nic', tel: 1234555656, status: "朋友"},
          {name: '爸爸', tel: 1234555656, status: "亲人"},
          {name: 'wind', tel: 1234555656, status: "朋友"},
          {name: 'lily', tel: 1234555656, status: "同学"},
          {name: '爷爷', tel: 1234555656, status: "亲人"},
          {name: 'tom', tel: 1234555656, status: "同学"},
          {name: 'tom', tel: 1234555656, status: "同学"},
          {name: 'tom', tel: 1234555656, status: "同学"},
          {name: 'tom', tel: 1234555656, status: "同学"},
          {name: '外婆', tel: 1234555656, status: "亲人"},
          {name: 'tom', tel: 1234555656, status: "同学"},
          {name: 'tom', tel: 1234555656, status: "同学"},
          {name: 'tom', tel: 1234555656, status: "同学"},
          {name: '外婆', tel: 1234555656, status: "亲人"},
      ]
  },
  mutations: {
    // changelogin (state, data) {
    //   state.isLogin = data
    //     sessionStorage.setItem('token',state.isLogin)
    // },
    add(state,value) {
        state.username = value
        var list = JSON.parse(localStorage.getItem("cmts") || '[]')
        list.unshift(state.username)
        localStorage.setItem('cmts', JSON.stringify(list))
    },
      totalall(state,value){
        var item= value
          state.itmes.push(item)
      }
  },
  actions: {

  }
})
