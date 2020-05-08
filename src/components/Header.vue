<template>
  <div class="header">
      <div class="header-container">
          <div class="header-container__left">
              <img src="../assets/ob-logo-wht.svg" alt="" class="logo">
          </div>
          <div class="header-container__right">
            <nav>
                <ul>
                    <router-link to="/welcome" class="header-container__right--link">Home</router-link>
                    <router-link to="/home1" class="header-container__right--link" active-class="isActive">Oswego</router-link>
                    <router-link to="/home2" class="header-container__right--link" active-class="isActive">Columbia</router-link>
                    <router-link to="/home3" class="header-container__right--link" active-class="isActive">Laurelwood</router-link>
                    <router-link to="/home4" class="header-container__right--link" active-class="isActive">Willamette</router-link>
                    <router-link to="" @click.native="doEmailModal" class="header-container__right--link">Contact</router-link>
                </ul>
            </nav>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        doEmailModal() {
            this.$store.commit('setModalContact', true)
            this.$store.commit('toggleModal')

        }
    }

}
</script>

<style lang="scss">
@import '../scss/_variables.scss';

.isActive {
    border-bottom: 2px solid #042a64 !important;
    border-top: 2px solid #042a64 !important;
    color: #042a64 !important;
}

.header {
    background: transparent;
    z-index: 2; 
   
    &-container {
        padding: 1rem;
        width: 100%;
        max-width: 120rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        

        &__left {
            
            & .logo {
                width: 70%;
            }

        }

        &__right {
            text-transform: uppercase;
            font-weight: bold;

            &--link {
                margin: 0 1rem;
                padding: .1rem 0;
                letter-spacing: .2rem;
                color: $colorWhite;
                border-bottom: 2px solid transparent;
                border-top: 2px solid transparent;
                transition: all .4s linear;

                &:hover {
                    color: #042a64;
                    border-bottom: 2px solid #042a64;
                    border-top: 2px solid #042a64;
                }
            }
        }

    }
}
    
</style>