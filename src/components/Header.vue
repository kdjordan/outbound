<template>
  <div class="header">
      <div class="header-container">
          <div class="header-container__left">
              <img src="../assets/ob-logo-wht.svg" alt="" class="logo">
          </div>
          <div class="header-container__right">
            <nav>
                <ul>
                    <li>Oswego</li>
                    <li>Columbia</li>
                    <li>Laurelwood</li>
                    <li>Willamette</li>
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
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
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
            
            color: white;
            text-transform: uppercase;
            font-weight: bold;

            & li {
                letter-spacing: .2rem;
            }
        }

    }
}
    
</style>