<template>
  <div class="page">
      <div class="info">
          <div class="info__container">
              <div>
                <div class="info-title">The Oswego Home</div>
                <div class="info__desc">2,438 SQ FEET / 4 BED / 3.5 BATH / $549k</div>
                </div>
                <div class="info__controls">
                    <button class="home-button" @click="toggleDetails" :class="{buttonActive: detailsOpen}">
                        DETAILS
                    </button>
                    <button class="home-button" @click="toggleOptions" :class="{buttonActive: optionsOpen}">
                        OPTIONS
                    </button>
                    <button class="home-button" @click="toggleFloorPlan" :class="{buttonActive: floorPlanOpen}">
                        FLOORPLAN
                    </button>
                    
                </div>
          <div class="info__next">
              <button class="home-button">NEXT HOME&nbsp;&nbsp;&nbsp;<span>&gt;</span></button>
          </div>
          </div>
      </div>
      <div>
          <transition name="raise">
              <div v-if="detailsOpen" class="details">
                    <div class="details__title">The Oswego Home</div>
                    <div class="details__desc">
                        <p>
                        Stunning Country Estate boats custom home nestled in a 10 acre pastoral setting surrounded by beautiful views of the Coburg Hills. This 4 bedroom home offers the master on the main level w/private patio & updated master bath w/sitting area & oversized shower, Formal living & dining room w/open concept kitchen, French doors out to a covered patio perfect for entertaining or relaxing and enjoying the beautiful landscaping, pastures or take a walk down by the creek. Truly a Dream!
                        </p>
                    </div>
              </div>
          </transition>
      </div>
      <div>
          <transition name="raise">
              <div v-if="optionsOpen" class="options">
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
  </div>
</template>

<script>
export default {
    data() {
        return {
            home: 'Oswego',
            detailsOpen: false,
            optionsOpen: false,
            floorPlanOpen: false,
        }
    },
    methods: {
        toggleDetails() {
            this.optionsOpen = false
            this.floorPlanOpen = false
            this.detailsOpen = !this.detailsOpen
        },
        toggleOptions() {
            this.detailsOpen = false
            this.floorPlanOpen = false
            this.optionsOpen = !this.optionsOpen
        },
        toggleFloorPlan() {
            this.optionsOpen = false
            this.detailsOpen = false
            this.floorPlanOpen = !this.floorPlanOpen
        },
        optionSelected(option) {
            this.optionsOpen = false
            this.$store.commit('setHomeSelection', {home: 'oswego', option: option})
            this.$store.commit('toggleModal')
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


.page {
    background-image: url("../../assets/homes/home1/home-hero.jpg");
    background-size: cover;
    background-position: center;
    height: 80vh;
    overflow: auto;
}

img {
    width: 100%;
    object-fit: cover;
}



</style>