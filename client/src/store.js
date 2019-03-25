import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/database/server'
import swal from 'sweetalert'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    role: ''
  },
  mutations: {
    setUserRole(state, payload) {
      state.role = payload
    },
    setIsLogin(state, payload) {
      state.isLogin = payload
    }
  },
  actions: {
    verifyToken({ commit }, { isToken }) {
      axios
        .get('/user/verify', {
          headers: {
              token: isToken
          }
        })
        .then(({ data }) => {
          commit('setUserRole', data.role)
          commit('setIsLogin', true)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    userRegistration({ commit }, { firstName, lastName, username, email, password }) {
      const data = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password
      }

      axios
        .post('/user/register', data)
        .then(({ data }) => {
            router.push('/')
            swal("Register berhasil!!", "Harap LOGIN terlebih dahulu untuk melanjutkan!!", "success")
        })
        .catch((error) => {
            console.log(error)
        })
    },
    userLogin({ commit }, { username, password }) {
      const data = {
        username: username,
        password: password
      }
      console.log(data, 'masuk')
      axios
        .post('/user/login', data)
        .then(({ data }) => {
            localStorage.setItem('token', data.token)
            commit('setUserRole', data.role)
            commit('setIsLogin', true)
            router.push('/')
        })
        .catch((error) => {
            console.log(error)
        })

    }
  },
  getters: {
    isLogin(state) {
      return state.isLogin
    },
    getRole(state) {
      return state.role
    }
  }
})
