import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
       isModalContact: false,
        modalOpen: false,
        homeSelection: {
           home: '',
           option: ''
        }
    },
    mutations: {
        goNextHome(state) {
            if(state.index == 4) {
                state.index = 1
            } else {
                state.index++
            }
        },
        goPrevHome(state) {
            if(state.index == 1) {
                state.index = 1
            } else {
                state.index--
            }
        },
        toggleModal(state) {
            state.modalOpen = !state.modalOpen
        },
        setModalContact(state, payload) {
            state.isModalContact = payload;
        },
        setHomeSelection(state, payload) {
            state.homeSelection = payload
        }
        
     },
    getters: {
       getModalState(state) {
           return state.modalOpen
       },
       getHomeSelected(state) {
        return state.homeSelection
       },
       getModalContact(state) {
           return state.isModalContact
       }
    },
    actions: {
       
    }

})