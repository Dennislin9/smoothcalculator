<template>
  <div class="container">
    <h2>Select Currency</h2>
    <select class="custominput balancecurrency" @change="onchange">
      <option v-for="(fiat, index) in currency" :key="index" :value="fiat.naam">
        {{ fiat.naam }}
      </option>
    </select>
    <h2>Account Balance</h2>
    <!-- {{JSON.stringify(chosencurrency)}} -->
    <Currencyinput class="custominput" :currency="chosencurrency" />

    <h2>Risk</h2>
    <Procent class="  " :risk="chosenrisk" />

    <h2>Stop loss in pips:</h2>
    <Pips />

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
import Pips from "../components/Pips.vue";
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
    chosencurrency() {
      return this.$store.state.valuta.find(
        (e) => e.naam == this.$store.state.balancecurrency
      );
    },
  },
  mounted() {
    let lol = this.$store.state.valuta.find(
      (e) => e.naam == this.$store.state.balancecurrency
    );

    console.log(lol.currency);

    console.log(this.$store.state.balancecurrency);
    // console.log(this.$store.state.valuta.find(e => e.naam ==  this.$store.state.balancecurrency))
    document.querySelector(".balancecurrency").value = Cookie.get(
      "balancecurrency"
    );
    console.log(Cookie.get("balancecurrency"));
  },
  methods: {
    onchange(event) {
      Cookie.set("balancecurrency", event.target.value, { expires: 7 });
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
  
  height: 40px; 
  width: 50px;
  color:black;
  font-size: 200%;
  background: none;
  width: 100%;
  border: none;
  margin-top: 50px;
  font-family: 'Roboto', sans-serif;
  
  
}
.risk {
  height: 40px;
  width: 40px;
  color: black;
  font-size: 200%;
  background: none;
  display: block;
  margin-top: 50px;
  border-radius: 10px;
  
 
}
.pips {
  /* min-height: 780px; */
  width: 50px;
  color: black;
  font-size: 200%;
  background: none;
  width: 100%;
  display: block;
  margin-top: 50px;
  border-radius: 10px;
  
 
 
}
.balancecurrency{
  font-weight: bolder;
  color: white;
}
input[type="number"] {
    width: 100%;
  padding: 12px 20px;
  height: 48px;
  margin: 8px 0;
  display: inline-block;
  border: none;
  border-radius: 4px;
  border-radius: 10px;
  box-sizing: border-box;
  margin-top: 7px;
  box-shadow: 2px 8px 20px rgba(13, 143,254,.15)
}
select {
  width: 100%;
  padding: 12px 20px;
  height: 48px;
  margin: 8px 0;
  display: inline-block;
  border: none;
  border-radius: 4px;
  border-radius: 10px;
  box-sizing: border-box;
  margin-top: 7px;
  box-shadow: 2px 8px 20px rgba(13, 143,254,.15)

}
.custominput {
  margin-bottom: 30px;
  background:#3DCBf8;
  border-radius: 10px;
  margin-top: 7px;
  border: none;
  box-shadow: 2px 8px 20px rgba(13, 143,254, .15);
 
}



</style>