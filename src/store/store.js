import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        homeIndex: 1,
        backgroundImages: [
            'require("../../assets/homes/home1/home-hero.jpg")'
        ],
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