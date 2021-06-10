<template>
  <div class="container">
    <div class="pair"></div>
    <div class="titles">
      <div class="title risktitle">Risk</div>

      <div class="title amounttitle">Amount</div>
    </div>
    <div class="basicinfo">
      <div class="risk">{{ chosenrisk }}%</div>
      <div class="riskamount">
        <span v-html="chosecurrency.currency"></span
        >{{ parseFloat(risk).toFixed(2) }}
      </div>
    </div>
    <div class="steps">
      <div class="titles">
        <div class="title">Stop Loss</div>
        <div class="title">Lot Size</div>
      </div>

      <ul class="pipresults">
        <li
          v-for="(pip, i) in pipscount"
          :key="i"
          :class="`${pip == chosenpips ? 'chosenpip' : ''}`"
        >
         <a href="#chosenpip"></a>
          <div :class="`stoploss x${i}`">{{ pip }}</div>

         
          <div class="lots">{{ calculate(pip).toFixed(3) }}</div>
        </li>
      </ul>
    </div>
    <button v-on:click="Tradingview" class="button">
      <p class="txt">Tradingview</p>
    </button>
  </div>
</template>

<script>
import Cookie from "js-cookie";
export default {
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
    chosecurrency() {
      return this.$store.state.valuta.find(
        (e) => e.naam == this.$store.state.balancecurrency
      );
    },
    rate() {
      return this.$store.state.rate;
    },
    risk() {
      return (this.chosenbalance / 100) * this.chosenrisk;
    },
    pipscount() {
      return this.chosenpips <= 0 ? 1 * 100 : this.chosenpips * 10;
    },
    chosencurrency() {
      return this.$store.state.gekozenvaluta;
    },
  },
  methods: {
    calculate(x) {
      if (x == this.chosenpips) {
        let balance = this.chosenbalance;
        let risk = this.chosenrisk;
        let pips = this.chosenpips;
        let rate = this.rate;
        console.log(rate);
        let totalrisk = (balance / 100) * risk;
        let lotsize = (totalrisk * rate * 100000) / (pips * 10) / 100000;
        return lotsize;
      } else {
        let balance = this.chosenbalance;
        let risk = this.chosenrisk;
        // let pips = this.chosenpips;
        let rate = this.rate;
        let totalrisk = (balance / 100) * risk;
        let lotsize = (totalrisk * rate * 100000) / (x * 10) / 100000;
        return lotsize;
      }
    },
    Tradingview() {
      window.open(
        `https://www.tradingview.com/chart/?symbol=${
          this.chosencurrency[0] + this.chosencurrency[1]
        }&offer_id=10&aff_id=26974`
      );
    },
  },
  mounted() {
    this.$store.dispatch("getcurrencies", JSON.parse(Cookie.get("pair"))[1]);
    // document.querySelector('pipresults').scrollTo()

   document.querySelector('.chosenpip').scrollIntoView();
  },
};
</script>
<style scoped>
body {
  margin: 0;
}

.button {
  width: 90%;
  height: 40px;
  border: none;
  margin-bottom: 30px;
  position: absolute;
  margin-top: 20px;
}
.txt {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.button svg {
  margin-left: 20px;
}
.basicinfo {
  width: 20%;
  height: 40px;
  font-weight: bold;
  color: black;
  font-size: 30px;
}

.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  padding-top: 1px;
  flex-direction: column;
}
.container .pair {
  height: 100px;
  width: 100%;
  line-height: 100px;
  text-align: left;
}
.container .basicinfo {
  height: 100px;
  width: 100%;

  display: flex;
}
.basicinfo .risk {
  flex: 1;
  line-height: 100px;
  text-align: center;
  color: #0d8ffe;
}
.basicinfo .riskamount {
  flex: 1;
  line-height: 100px;
  color: #0d8ffe;
  text-align: center;
}
.container .steps {
  flex: 1;
  max-height: 60vh;
  background: white;
  display: flex;
  flex-direction: column;
}
.titles {
  display: flex;
  height: 10px;
  font-weight: bold;
  color: black;
  font-size: 20px;
}
.titles .title {
  flex: 1;
  text-align: center;
  line-height: 30px;
}
.steps ul {
  flex: 1;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  margin-top: 30px;
}

li {
  width: 100%;
  height: 40px;
  display: flex;
}

li .stoploss {
  flex: 1;
  text-align: center;
  margin: auto;
}
li .lots {
  flex: 1;
  text-align: center;
   margin: auto;
}
.titles {
  color: black;
}
.chosenpip  {
  background: #58cafb;
  border-radius: 8px;
  
  
}
</style>