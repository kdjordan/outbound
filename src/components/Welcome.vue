<template>
<div>
  <div class="welcome">
      <div class="welcome__container">
          <div class="welcome__content">
              <div class="welcome__title">OutBound Properties</div>
                <div class="welcome__subtitle">- Presents - </div>
                <div class="welcome__images">
                    <div class="welcome__images--controls" @click="bumpIndex('down')">&lt;</div>
                        <img :src="logos[index]" :class="{sixty: getSixty, forty: getForty}" :key="index">
                    <div class="welcome__images--controls" @click="bumpIndex('up')">&gt;</div>
                </div>
                <div>
                    <p>Maple Wood Grove is an exclusive development in Northeast Portland Oregon. This project is the culmination of years work by Valerie Nipper and Don Etter. Both are long time Portland residents, and have deep roots in the community. All homes will be built by Both Sides Construction, a business owned and operated by Don for 30+ years.</p>
                    <div class="welcome__details">
                        <div class="welcome__details--location">
                            <div>LOCATION: <a href="https://goo.gl/maps/Wp3XGMfnXJQ2byUJ8" target="_blank"> 169th St and Halsey</a></div>
                            <div>HOMES AVAILABLE: 4</div>
                        </div>
                        <div class="welcome__details--buttons">
                            <router-link to="/home1"><button class="btn-both-sides">Begin Tour of MAple Wood Grove</button></router-link>
                            <!-- <a href="http://10.0.0.57:8080/home1" class="details__buttons--link"><button class="btn-both-sides">Begin Tour of MAple Wood Grove</button></a> -->
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
        },
        resetState() {
            console.log('caxlled')
            this.isWelcome = true,
            this.index = 0
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
    beforeDestroy() {
            this.resetState();
        }

}
</script>

<style lang="scss">
@import '../scss/_variables.scss';
@import '../scss/_typography.scss';
@import '../scss/_animations.scss';

p {
    width: 80%;
    margin: 0 auto !important;
    text-align: center;
    padding: 2rem 0 1rem 0;
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

.welcome {
    background-image: url("../assets/homes/home1/home-hero.jpg");
    
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;

    &__container {
        background: $colorWhite;
        width: 80%;
        margin: 0 auto;
        padding: 2rem;
        margin-top: 2%;
        min-height: 0% !important;
     
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

    &__details {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: $fontRoboto;

        &--location {
            text-align: center;
            margin-bottom: 1rem;

            & a {
                color: #2c3e50;
                // padding-bottom: 2px;
                border-bottom: 1px solid #2c3e50;
                transition: all .4s;

                &:hover {
                    border-bottom: 1px solid transparent;
                }
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
    outline: none;
    border: 1px solid $color1;
    color: $color1;
    transition: all .4s ease;

    &:hover {
        background: $color1;
        color: white;
    }
}


</style>