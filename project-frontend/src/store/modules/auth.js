import axios from "axios";

export default {
  state: {
    user: {},
    token: '',
  },
  mutations: {
    setUserData(state, data){
      state.user = data;
    },
    setToken(state, data){
      localStorage.setItem('access_token', data)
    }
  },
  getters: {
    getUserData(state) {
      return state.user
    }
  },
  actions: {
    LOGIN_USER(context, data){
      return new Promise((resolve, reject) => {
        axios.post('/auth/login', data)
          .then(res => {
            if(res.status === 200){
              context.commit('setToken', res.data.access_token)
              resolve(true)
            }
          })
          .catch(error => {reject(error)})
      })
    },
    REGISTER_USER(context, data){
      return new Promise((resolve, reject) => {
        axios.post('/auth/registration', data)
          .then((res) => {
            if(res.status === 200){
              resolve(res.data);
            }
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    GET_USER(context){
      return new Promise((resolve, reject) => {
        axios.post('/auth/me')
          .then(res => {
            if(res.status === 200){
              context.commit('setUserData', res.data)
              resolve(true)
            }
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
}
