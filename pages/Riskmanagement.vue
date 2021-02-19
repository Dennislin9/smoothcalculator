<template>
  <div class="container">
    <div class="pair"></div>
    <div class="titles">
      <div class="title">risk</div>
      <div class="title">risk amound</div>
    </div>
    <div class="basicinfo">
      <div class="risk">{{chosenrisk}}%</div>
      <div class="riskamount">{{chosecurrency}}{{risk}}</div>
    </div>
    <div class="steps">
      <div class="titles">
        <div class="title">stop loss</div>
        <div class="title">lot size</div>
      </div>
      <ul>
        <li v-for="i in 50" :key="i">
          <div class="stoploss">{{ i }}</div>
          <div class="lots">{{ calculate(i).toFixed(2) }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Cookie from 'js-cookie'
export default {
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
      return this.$store.state.valuta.find(
        (e) => e.naam == this.$store.state.balancecurrency
      );
    },
    rate() {
      return this.$store.state.rate
    },
    risk() {
      return (this.chosenbalance / 100) * this.chosenrisk
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
        console.log(rate)
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
  },
  mounted() {
    this.$store.dispatch('getcurrencies', JSON.parse(Cookie.get('pair'))[1])
  },
};
</script>
<style scoped>
body {
  margin: 0;
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
  text-align: center;
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
}
.basicinfo .riskamount {
  flex: 1;
  line-height: 100px;

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
  height: 30px;
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
}

li {
  width: 100%;
  height: 40px;
  display: flex;
  /* background: yellow; */
}

li .stoploss {
  flex: 1;
  text-align: center;
}
li .lots {
  flex: 1;
  text-align: center;
}
</style>