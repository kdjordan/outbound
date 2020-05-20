<template>
  <div class="modal-overlay" @click="toggleModal">
      <div class="modal" @click.stop>
            <div class="modal__close" aria-label="Close Account Info Modal Box" @click="toggleModal">&times;</div>
            <div v-if="!getIsModalContact" class="modal__title">Great Choice !</div>
            <div v-else class="modal__title">Thanks for Your Interest</div>
            <div v-if="!getIsModalContact" class="modal__mssg">Please enter your information below to reserve your spot on the list for this home. We will be answering all inquiries in the order in which we receive them. Due to high interest, please allow us a day or two to respond. We are looking forward to speaking with you !  
            </div>
            <div v-else class="modal__mssg">Simply let us know who you are and we'll contact you as soon as we can.   
            </div>
            <div v-if="!getIsModalContact" class="modal__order">
                <div>HOME: <span>The {{getHome.home}} Home</span></div>
                <div>OPTIONS: <span>{{getHome.option}}</span></div>
            </div>
            <div class="modal__input">
                <form class="modal__input--form">
                    <input type="text" placeholder="Name" required>
                    <input type="email" placeholder="Email" required>
                    <input type="phone" placeholder="Phone">
                
                <div class="center">
                    <button class="form-send-btn">SEND</button>
                </div>
                </form>
            </div>
          </div>
      
  </div>
</template>

<script>
export default {
methods: {
    toggleModal() {
        console.log('clicked')
        this.$store.commit('toggleModal')
    }
},
computed: {
    getHome(){
        return this.$store.getters.getHomeSelected
    },
    getIsModalContact() {
        return this.$store.getters.getModalContact
    }
}
}
</script>

<style lang="scss">
@import '../scss/_variables.scss';

.center {
    width: 40%;
    margin: 0 auto;
    text-align: center;
}

input {
    height: 2rem;
    padding-left: .7rem;
    width: 80%;
    overflow: hidden;
    margin: .5rem 0;
    outline: none;
    border: 1px solid $color1;

}

::placeholder {
    letter-spacing: 1px;
    font-family: $fontRoboto;
    font-style: italic;
    font-size: 1vw;
    color: $color1;
}

.modal {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: $colorWhite;
    z-index: 99;
    width: 40%;
    padding: 1rem 2rem 2rem 2rem;
    max-width: 700px;
    // min-width: 300px;

    &__close {
        cursor: pointer;
        font-size: 2rem;
        display: inline-block;

        &:hover {
            color: $color1;
        }
    }

    &__title {
        font-size: 2vw;
        text-align: center;
        margin-bottom: .5rem;
    }

    &__mssg {
        width: 80%;
        margin: 0 auto;
        text-align: center;
        margin-bottom: .5rem;
    }

    &__order {
        width: 80%;
        margin: 0 auto;

        & div > span {
            text-transform: uppercase;
            font-style: italic;
            font-size: .8rem;
        }
        
    }

    &__input {
        text-align: center;
        margin: 0 auto;
        
        &--form {
            margin: 0 auto;
        }
    }
}

.modal-overlay {
    position: fixed;
    top: 0;
    right: 0;
    background: $colorWhite;
    width: 100vw;
    height: 100vh;
    background: $color2;
    opacity: .97;
    z-index: 20;
}

.form-send-btn {
    letter-spacing: inherit;
    font-size: 1rem;
    padding: .5rem 1rem;
    background: $color1;
    color: $colorWhite;
    margin-top: .5rem;
}

</style>