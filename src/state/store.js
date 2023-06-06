import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            userName: '',
            userId: ''
        }
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        userName(state) {
            return state.userName
        },
        userId(state) {
            return state.userId
        }
    }
})

export default store