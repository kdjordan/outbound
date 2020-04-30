import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
       modalOpen: false,
       homeSelection: {
           home: '',
           option: ''
       }

    },
    mutations: {
        toggleModal(state) {
            state.modalOpen = !state.modalOpen
        },
        setHomeSelection(state, payload) {
            console.log(payload)
            state.homeSelection.home = payload.home
            state.homeSelection.option = payload.option
        }
    },
    getters: {
       getModalState(state) {
           return state.modalOpen
       },
       getHomeSelected(state) {
           return state.homeSelection
       }
    },
    actions: {
       
    }

})