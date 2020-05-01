<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <transition name="fade">
      <div v-if="getModalState">
        <Modal />
      </div>
    </transition >
  </div>
</template>

<script>
import Header from './components/Header'
import Modal from './components/Modal'

export default {
  components: {
    Header,
    Modal
  },
  name: 'app',
  computed: {
    getModalState() {
      return this.$store.getters.getModalState
    }
  }
}
</script>

<style lang="scss">
@import './scss/_base.scss';
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


</style>
