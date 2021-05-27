<template>
  <div class="container">
    <div class="kop">Calculate</div>
    <h2>Select Currency</h2>

    <v-select
      class="shadow-element"
      label="naam"
      :options="currency"
      v-model="$store.state.balancecurrency"
      @input="onchange"
    ></v-select>
    <h2>Account Balance</h2>

    <Currencyinput class="shadow-element" :currency="chosencurrency" />
    <!-- <input class="shadow-element" type="number"> -->
    <!-- <Currencyfield /> -->

    <h2>Risk</h2>
    <Procent class="shadow-element" :risk="chosenrisk" />

    <h2>Stop loss in pips:</h2>
    <Pips class="shadow-element" />

    <button v-on:click="verzenden(index)" class="button">
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
// import AutoNumeric from "autonumeric";
import Cookie from "js-cookie";
import Procent from "../components/Procent.vue";
import Pips from "../components/Pips.vue";
export default {
  components: { Procent },
  data() {
    return {
      selected: "EUR",
    };
  },
  computed: {
    currency() {
      return this.$store.state.valuta;
    },
    chosenbalance() {
      return this.$store.state.prevbalance;
    },
    chosenrisk() {
      return this.$store.state.prevrisk;
    },
    chosenpips() {
      return this.$store.state.prevpips;
    },
    chosencurrency() {
      return this.$store.state.valuta.find(
        (e) => e.naam == this.$store.state.balancecurrency
      );
    },
  },

  mounted() {
    // document.querySelector(".balancecurrency").value = Cookie.get(
    //   "balancecurrency"
    // );
  },
  methods: {
    verzenden() {
      let chosenbalance = this.chosenbalance;
      let chosenrisk = this.chosenrisk;
      if ((chosenbalance && chosenrisk) == "") {
        alert("empty");
      } else {
        this.volgende();
      }
    },
    onchange(value) {
      Cookie.set("balancecurrency", value.naam, { expires: 7 });
      this.$store.state.balancecurrency = value.naam;
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
  color: black;
  font-size: 200%;
  background: none;
  width: 100%;
  border: none;
  margin-top: 50px;
  font-family: "Roboto", sans-serif;
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
.balancecurrency {
  font-weight: bolder;
  color: white;
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
  box-shadow: 2px 8px 20px rgba(13, 143, 254, 0.15);
}
.custominput {
  margin-bottom: 30px;
  background: #3dcbf8;
  border-radius: 10px;
  margin-top: 7px;
  border: none;
  box-shadow: 2px 8px 20px rgba(13, 143, 254, 0.15);
}
.pipsinput {
  margin-bottom: 30px;
  border-radius: 10px;
  margin-top: 7px;
  border: none;
  box-shadow: 2px 8px 20px rgba(13, 143, 254, 0.15);
}
.button {
  width: 100%;
  height: 40px;
  border: none;
  margin-bottom: 50px;
  position: relative;
}
.button p {
  margin-left: 30px;
  font-size: 20px;
}
</style>