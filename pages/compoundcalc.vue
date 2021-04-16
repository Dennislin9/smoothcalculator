<template>
  <div class="container">
    <div class="titles">
      <div class="title daytitle">Day</div>
      <div class="title earningtitle">Earning</div>
      <div class="title totaltitle">Total</div>
    </div>
    <ul>
      <li v-for="(result, index) in calculate" :key="index">
        <div class="results">
          <div class="result day">{{ result.day }}</div>
          <div :class="`result earning earning${index}`">{{ result.money }}</div>
          <div :class="`result total total${index}`">{{ result.total }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import AutoNumeric from "autonumeric";
import Cookie from "js-cookie";
export default {
  computed: {
    chosenbalance() {
      return parseInt(this.$store.state.gekozenbalance);
    },
    drr() {
      //hier gaat het mis!!!!
      return (
        Math.round((this.$store.state.drr.value + Number.EPSILON) * 100) / 100
      );
    },

    days() {
      return parseInt(this.$store.state.days);
    },

    dailyinterestrate() {
      return 1 + parseInt(this.$store.state.dailyinterestrate) / 100;
    },
    risk() {
      return parseInt((this.chosenbalance / 100) * this.chosenrisk);
    },
    calculate(x) {
      let balance = this.chosenbalance;
      let reinvestrate = this.drr;
      let days = this.days;
      let dailyinterestrate = this.dailyinterestrate;
      let money = 0;
      let totalinvestment = 0;

      var results = [];

      for (let i = 1; i <= days; i++) {
        let oldbalance = balance;
        balance = balance * dailyinterestrate;
        let reinvest = (balance - oldbalance) * reinvestrate;

        let newinvestment = oldbalance + reinvest;
        let cash = balance - oldbalance;
        money = cash.toFixed(2);
        totalinvestment = newinvestment.toFixed(2);

        // console.log(`Day ${i}`, ` ${money}`, `Total: ${totalinvestment}`);
        balance = newinvestment;
        let x = balance;
        // Arr.push(`Day ${i}`, `Earning ${money}`, `Total: ${totalinvestment}`)

        results.push({
          day: i,
          money: money,
          total: totalinvestment,
        });
      }

      return results;
    },
  },
  mounted() {
    const autoNumericOptionsEuro = {
      digitGroupSeparator: ".",
      decimalCharacter: ",",
      decimalCharacterAlternative: ".",

      currencySymbolPlacement:
        AutoNumeric.options.currencySymbolPlacement.suffix,
      roundingMethod: AutoNumeric.options.roundingMethod.halfUpSymmetric,
    };
    let days = this.days;
    // Initialization;
    for (let i = 0; i < days; i++) {
    new AutoNumeric(".earning"+ i, autoNumericOptionsEuro);
    new AutoNumeric(".total" + i , autoNumericOptionsEuro);
     }
  },
  methods: {
    back() {
      this.$router.push("/currency");
    },
  },
};
</script>

<style scoped>
.container {
  height: a;
}
.titles {
  display: flex;
  height: 10px;
  font-weight: bold;
  color: #0d8ffe;
  font-size: 20px;
}
.titles .title {
  flex: 1;
  text-align: left;
  line-height: 30px;
}
.results {
  display: flex;
  height: 10px;
  margin-top: 20px;
  color: black;
  font-size: 15px;
}
.titles {
  height: 50px;
  width: 100%;

  margin-top: 40px;
}
ul {
  padding: 0;
  margin: 0;
  max-height: 500px;
  overflow-y: auto;
}
li {
  display: flex;
}
li * {
  flex: 1;

  height: 40px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
