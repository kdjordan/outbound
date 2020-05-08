<template>
<div class="page1">
    <Header />
    <main @click="closeAll"></main>
        <div>
             <transition name="raise">
                <div v-if="detailsOpen" class="details">
                        <div class="details__title">The Oswego Home</div>
                        <div class="details__desc">
                            <p>
                            Stunning Country Estate boats custom home nestled in a 10 acre pastoral setting surrounded by beautiful views of the Coburg Hills. This 4 bedroom home offers the master on the main level w/private patio & updated master bath w/sitting area & oversized shower, Formal living & dining room w/open concept kitchen, French doors out to a covered patio perfect for entertaining or relaxing and enjoying the beautiful landscaping, pastures or take a walk down by the creek. Truly a Dream!
                            </p>
                            <p>
                            Stunning Country Estate boats custom home nestled in a 10 acre pastoral setting surrounded by beautiful views of the Coburg Hills. This 4 bedroom home offers the master on the main level w/private patio & updated master bath w/sitting area & oversized shower, Formal living & dining room w/open concept kitchen, French doors out to a covered patio perfect for entertaining or relaxing and enjoying the beautiful landscaping, pastures or take a walk down by the creek. Truly a Dream!
                            </p>
                        </div>
                </div>
            </transition>
            <transition name="raise">
                <div v-if="optionsOpen" class="options">
                    <div class="options__container">
                        <div class="options--1">
                            <div class="options__title">Beach</div>
                            <div class="options__desc">
                                <ul>
                                    <li>+ Sears Appliances</li>
                                    <li>+ Choice of Exterior Color</li>
                                    <li>+ Choice of Interior Color</li>
                                    <li>+ Option 3</li>
                                    <li>+ Option 4</li>
                                    <li>+ Option 5</li>
                                </ul>
                                <div class="options__price">* Cost Included In Base Price</div>
                                <div>
                                    <button class="options__button" @click="optionSelected('beach')">SELECT</button>
                                </div>
                            </div>
                            
                        </div>
                        <div class="options--2">
                            <div class="options__title">Lagoon</div>
                            <div class="options__desc">
                                <ul>
                                    <li>+ Sears Appliances</li>
                                    <li>+ Choice of Exterior Color</li>
                                    <li>+ Choice of Interior Color</li>
                                    <li>+ Option 3</li>
                                    <li>+ Option 4</li>
                                    <li>+ Option 5</li>
                                </ul>
                                <div class="options__price">$5,000</div>
                                <div>
                                    <button class="options__button" @click="optionSelected('lagoon')">SELECT</button>
                                </div>
                            </div>
                        </div>
                        <div class="options--3">
                            <div class="options__title">Open Water</div>
                            <div class="options__desc">
                                <ul>
                                    <li>+ Sears Appliances</li>
                                    <li>+ Choice of Exterior Color</li>
                                    <li>+ Choice of Interior Color</li>
                                    <li>+ Option 3</li>
                                    <li>+ Option 4</li>
                                    <li>+ Option 5</li>
                                </ul>
                                <div class="options__price">$10,000</div>
                                <div>
                                    <button class="options__button" @click="optionSelected('open water')">SELECT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tip">Select to Reseve Your Spot for this Home</div>
                </div>
            </transition>
        </div>
        <div>
            <transition name="raise">
                <div v-if="floorPlanOpen" class="details">
                        <!-- <div class="details__title">Plan1</div> -->
                        <div class="details__img">
                        <img src="../../assets/homes/home1/floorplan-1.jpg" alt="">
                        <img src="../../assets/homes/home1/floorplan-2.jpg" alt="">
                        <img src="../../assets/homes/home1/floorplan-3.jpg" alt="">
                        <img src="../../assets/homes/home1/floorplan-4.jpg" alt="">
                        </div>
                </div>
            </transition>
        </div>
         <div class="info">
            <div class="info__container">
                
                <div>
                    <div class="info-title">The Oswego Home</div>
                    <div class="info__desc">2,438 SQ FEET / 4 BED / 3.5 BATH / $549k</div>
                </div>
                <div class="info__controls">
                    <button class="home-button" @click.stop="toggleDetails" :class="{buttonActive: detailsOpen}">
                        DETAILS
                    </button>
                    <button class="home-button" @click.stop="toggleOptions" :class="{buttonActive: optionsOpen}">
                        OPTIONS
                    </button>
                    <button class="home-button" @click.stop="toggleFloorPlan" :class="{buttonActive: floorPlanOpen}">
                        FLOORPLAN
                    </button>
                </div>
            <div class="info__next">
                <button class="home-button" @click="goPreviousHome">PREVIOUS</button>
                <button class="home-button" @click="goNextHome">NEXT</button>
            </div>
            </div>
            
        </div>
</div>
</template>

<script>
import Header from '../Header'
export default {
    components: {
        Header
    },
    data() {
        return {
            home: 'Oswego',
            detailsOpen: false,
            optionsOpen: false,
            floorPlanOpen: false,
        }
    },
    methods: {
        goNextHome(){
            this.$router.push('/home2')
        },
        goPreviousHome(){
            this.$router.push('/home4')
        },
        closeAll(){
            this.detailsOpen = false
            this.optionsOpen = false
            this.floorPlanOpen = false
        },
        toggleDetails() {
            this.optionsOpen = false
            this.floorPlanOpen = false
            setTimeout(() => {
                this.detailsOpen = !this.detailsOpen
            }, 300)
        },
        toggleOptions() {
            this.detailsOpen = false
            this.floorPlanOpen = false
             setTimeout(() => {
                 this.optionsOpen = !this.optionsOpen
            }, 300)
        },
        toggleFloorPlan() {
            this.optionsOpen = false
            this.detailsOpen = false
             setTimeout(() => {
                 this.floorPlanOpen = !this.floorPlanOpen
            }, 300)
        },
        optionSelected(option) {
            this.optionsOpen = false
            this.$store.commit('setHomeSelection', {home: 'Oswego', option: option})
            this.$store.commit('toggleModal')
            this.$store.commit('setModalContact', false)
            console.log(option)
        }
    }

}
</script>

<style lang="scss">
@import '../../scss/_variables.scss';
@import '../../scss/_typography.scss';
@import '../../scss/_page.scss';
@import '../../scss/_animations.scss';

main {
    flex: 1 0 auto;
}

.page1 {
    background-image: url("./../../assets/homes/home1/home-hero.jpg") !important;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;

    &__container {
        flex: 1 0 auto;
        min-height: 100%;
    }
}

img {
    width: 100%;
    object-fit: cover;
}



</style>