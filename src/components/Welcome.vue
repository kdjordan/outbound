<template>
<div>
    <!-- <Header /> -->
  <div class="page">
      <div class="page__container">
          <div class="page__content">
              <div class="welcome__title">OutBound Properties</div>
                <div class="welcome__subtitle">- Presents - </div>
                <div class="welcome__images">
                    <div class="welcome__images--controls" @click="bumpIndex('down')">&lt;</div>
                        <img :src="logos[index]" :class="{sixty: getSixty, forty: getForty}">
                    <div class="welcome__images--controls" @click="bumpIndex('up')">&gt;</div>
                </div>
                <div>
                    <p>Maple Wood Grove is an exclusive small develoment in Northeast Portland Oregon. This project is the culmination of years work by Valerie Nipper and Don Etter. Both are long time Portland residents, and have deep roots in the community. All homes will be built by Both Sides Construction, a business owned and operated by Don for 30+ years.</p>
                    <div class="details">
                        <div>LOCATION: 169th St and Halsey</div>
                        <div>HOMES AVAILABLE: 4</div>
                        <div class="details__buttons">
                            <button class="btn-both-sides">Begin Tour of MAple Wood Grove</button>
                            <a href="https://www.bothsidesconstruction.com/" target="_blank" class="details__buttons--link"><button class="btn-both-sides">Learn ABout Both Sides Construction</button></a>
                        </div>
                    </div>
                </div>
          </div>
      </div>
  </div>
</div>

</template>

<script>
import Header from './Header'
export default {
    data() {
        return {
            isWelcome: true,
            index: 0,
            logos: [
                require('../assets/mwgLogos/SVG/logo1-1.svg'),
                require('../assets/mwgLogos/SVG/logo1-2.svg'),
                require('../assets/mwgLogos/SVG/logo2-1.svg'),
                require('../assets/mwgLogos/SVG/logo2-2.svg'),
                require('../assets/mwgLogos/SVG/logo2-3.svg'),
                require('../assets/mwgLogos/SVG/logo2-4.svg'),
                require('../assets/mwgLogos/SVG/logo3-1.svg'),
                require('../assets/mwgLogos/SVG/logo3-2.svg'),
                require('../assets/mwgLogos/SVG/logo3-3.svg'),
                require('../assets/mwgLogos/SVG/logo3-4.svg'),
                
            ]
        }
    },
    components: {
        Header
    },
    methods: {
        bumpIndex(dir) {
            if (dir == 'up'){
                if (this.index == this.logos.length-1) {
                    this.index = 0
                } else {
                    this.index++
                }
            } else if(dir == 'down'){
                 if (this.index == 0) {
                    this.index = this.logos.length-1
                } else {
                    this.index--
                }
            }
        }
    },
    computed: {
        getSixty() {
             if (this.index > 1 && this.index < 6) {
                 return true
            } else {
                return false;
            }
        },
        getForty() {
            if(this.index > 5 && this.index < this.logos.length) {
                return true
            } else {
                return false
            }
        }
    },
}
</script>

<style lang="scss">
@import '../scss/_variables.scss';
@import '../scss/_typography.scss';
@import '../scss/_animations.scss';

p {
    width: 80%;
    margin: 0 auto;
    padding: 2rem 0;
}

.forty {
    width: 40% !important;
}

.sixty {
    width: 60% !important;
    padding: 3rem 0;
}

.details {
    text-align: center;
}

.page {
    background-image: url("../assets/homes/home1/home-hero.jpg");
    
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    top: 0;
    left: 0;

    &__container {
        background: $colorWhite;
        width: 80%;
        margin: 0 auto;
        padding: 2rem;
        // margin-top: 7%;
        position: absolute;
        // top: 1%;
        left: 50%;
        transform: translate(-50%, 5%);
    }

    &__content {
        border: 1px solid grey;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
    }
}

img {
    width: 100%;
    object-fit: cover;
}

.welcome {
    &__title {
        font-size: 2rem;
        text-transform: uppercase;
        text-align: center;
        // margin: 1rem 0;
    }

    &__subtitle {
        padding: .5rem 0;
    }

    &__images {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        & img {
            width: 20%;
        }

        &--controls {
            font-size: 2rem;
            margin: 0 2rem;
            padding: .2rem;
            opacity: 30%;

            &:hover {
                cursor: pointer;
                opacity: 10%;
            }
        }
    }
}

.btn-both-sides {
    cursor: pointer;
    margin-top: .5rem;
    padding: .5rem 1rem;
    text-transform: uppercase;
    background: transparent;
    border: 1px solid $color1;
    color: $color1;
    transition: all .4s ease;

    &:hover {
        background: $color1;
        color: white;
    }
}


</style>