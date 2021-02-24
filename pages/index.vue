<template>
  <div class="container">
    <!-- {{ chosenbalance }}
    {{ chosenrisk }}
    {{ chosenpips }} -->
    <h2>Select currency</h2>
    <select class="custominput balancecurrency" @change="onchange">
      <option
        v-for="(fiat, index) in currency"
        :key="index"
        :value="fiat.naam"
      >
        {{ fiat.naam }}
      </option>
    </select>
    <h2>Account balance</h2>
    <Currencyinput class="custominput" :currency="chosecurrency" />

    <h2>Risk management</h2>
    <Procent class="custominput" :risk="chosenrisk" />

    <h2>Stop loss in pips:</h2>
   <Pips/>

    <button v-on:click="volgende(index)" class="button">
      <p>Select currency pair</p>
      <svg
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script>
import AutoNumeric from "autonumeric";
import Cookie from "js-cookie";
import Procent from "../components/Procent.vue";
import Pips from '../components/Pips.vue';
export default {
  components: { Procent },

  computed: {
    currency() {
      return this.$store.state.valuta;
    },
    chosenbalance() {
      return this.$store.state.gekozenbalance;
    },
    chosenrisk() {
      return this.$store.state.gekozenrisk;
    },
    chosenpips() {
      return this.$store.state.gekozenpips;
    },
    chosecurrency() {
      return this.$store.state.valuta.find(e => e.naam ==  this.$store.state.balancecurrency)
    }
  },
  mounted() {
      // console.log(this.$store.state.valuta.find(e => true))
      // this.$store.dispatch('createcountry', {
      //   inhabitants: 900000000012323,
      //   name: 'Korea'
      // })
    console.log(this.$store.state.balancecurrency)
    // console.log(this.$store.state.valuta.find(e => e.naam ==  this.$store.state.balancecurrency))
      document.querySelector('.balancecurrency').value = Cookie.get('balancecurrency')
      console.log(Cookie.get('balancecurrency'))
  },
  methods: {
    onchange(event) {
      Cookie.set('balancecurrency', event.target.value)
      this.$store.state.balancecurrency = event.target.value;
    },
    volgende() {
      this.$router.push("/currency");
    },
    
  },
};
</script>



<style scoped>
.labBalance {
  /* height: 40px; */
  width: 50px;
  color: black;
  font-size: 200%;
  background: none;
  width: 100%;
  /* display: block; */
  margin-top: 50px;
  font-family: Arial, Helvetica, sans-serif;
}
.risk {
  height: 40px;
  width: 50px;
  color: black;
  font-size: 200%;
  background: none;
  width: 100%;
  display: block;
  margin-top: 50px;
  font-family: Arial, Helvetica, sans-serif;
}
.pips {
  height: 40px;
  width: 50px;
  color: black;
  font-size: 200%;
  background: none;
  width: 100%;
  display: block;
  margin-top: 50px;
  font-family: Arial, Helvetica, sans-serif;
}
input[type="number"],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  /* margin-top: 50px; */
}
.custominput {
  margin-bottom: 30px;
}
</style>