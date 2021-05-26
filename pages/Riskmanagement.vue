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
        <span v-html="chosecurrency.currency"></span>{{ risk}}
      </div>
    </div>
    <div class="steps">
      <div class="titles">
        <div class="title">Stop Loss</div>
        <div class="title">Lot Size</div>
      </div>
      <ul>
        <li v-for="i in pipscount" :key="i">
          <div class="stoploss">{{ i }}</div>
          <div class="lots">{{ calculate(i).toFixed(3) }}</div>
        </li>
      </ul>
    </div>
    <button v-on:click="vorige" class="button">
      <svg
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <p class="txt">Back</p>
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
    pipscount(){
      return this.chosenpips * 10
    }
  },
  methods: {
    back() {
      this.$router.push("/currency");
    },
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
    vorige() {
      // alert('adjashjasdjkh')
      this.$router.push("/currency");
    },
  },
  mounted() {
    this.$store.dispatch("getcurrencies", JSON.parse(Cookie.get("pair"))[1]);
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
.txt{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.button svg{
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
  padding-top: 30px;
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
  color: #0D8FFE;
 
}
.basicinfo .riskamount {
  flex: 1;
  line-height: 100px;
  color: #0D8FFE;
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
}
li .lots {
  flex: 1;
  text-align: center;
}
.titles {
  color: black;
}
</style>