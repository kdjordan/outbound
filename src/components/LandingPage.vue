<template>
  <div class="landing">
     <img src="../../src/assets/ob-logo.svg" alt="">
    <div>
        <form @click.prevent>
            <div>
                <input type="text" placeholder="Enter Passphrase" v-model="pass" required>
            </div>
            <button @click="theSubmit">SUBMIT</button>
            <div v-if="error" class="error">INCORRECT</div>
        </form>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            error: false,
            pass: '',
            phrase: 'maple'
        }
    },
    methods: {
        theSubmit() { 
            console.log('submitted')
            if (this.pass !== this.phrase) {
                this.error = true
                this.noError()
            } else {
                console.log('passed')
                this.$router.push('/welcome')
            }
        },
        noError() {
            setTimeout(() => {
                this.error = false
            }, 2000)
        }
    }
}
</script>

<style lang="scss">
@import '../scss/_variables.scss';

.error {
    color: red;
}

input {
    height: 2rem;
    padding-left: .7rem;
    width: 15%;
    overflow: hidden;
    margin: .5rem 0;
    outline: none;
    border: 1px solid $color1;

}

button {
    padding: 1rem 2rem;
    margin: .5rem 0;
    background: transparent;
    letter-spacing: 1px;
    color: $color1;

    &:hover {
        background: $color1;
        color: $colorWhite;
    }
}

.landing {
    text-align: center;
    // border: 1px solid red;
    width: 80%;
    margin: 0 auto;
    margin-top: 10%;

    // & > div {
    //     display: inline-block;
    // }


    & img {
        width: 80%;
     }
}
</style>