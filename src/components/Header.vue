<template>
  <div class="header">
      <div class="header-container">
          <div class="header-container__left">
              <img src="../assets/ob-logo-wht.svg" alt="" class="logo">
          </div>
          <div class="header-container__right">
            <nav>
                <ul>
                    <router-link to="/home1" class="header-container__right--link">Oswego</router-link>
                    <router-link to="/home2" class="header-container__right--link">Columbia</router-link>
                    <router-link to="/home3" class="header-container__right--link">Laurelwood</router-link>
                    <router-link to="/home4" class="header-container__right--link">Willamette</router-link>
                    <!-- <li>Oswego</li>
                    <li>Columbia</li>
                    <li>Laurelwood</li>
                    <li>Willamette</li> -->
                </ul>
            </nav>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../scss/_variables.scss';

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