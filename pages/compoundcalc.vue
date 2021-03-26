<template>
  <div class="container">
    {{ chosenbalance }} <br />
    {{ dailyinterestrate }} <br />
    {{ drr }} <br />
    {{ days }}
  </div>
</template>

<script>
import Cookie from "js-cookie";
export default {
  computed: {
    chosenbalance() {
      return parseInt(this.$store.state.gekozenbalance);
    },
    drr() {
      return Math.round((this.$store.state.drr.value + Number.EPSILON) * 100) / 100 ;
    },

    days() {
      return parseInt(this.$store.state.days);
    },

    dailyinterestrate() {
      return 1 + parseInt(this.$store.state.dailyinterestrate) / 100;
    },
    risk() {
      return parseInt( (this.chosenbalance / 100) * this.chosenrisk);
    },
  },
  mounted() {
    this.calculate();
  },
  methods: {
    back() {
      this.$router.push("/currency");
    },
    calculate(x) {
      let balance = this.chosenbalance;
      let reinvestrate = this.drr;
      let days = this.days;
      let dailyinterestrate = this.dailyinterestrate;
      let money = 0;
      let totalinvestment = 0;
      // console.table(balance,reinvestrate, days, dailyinterestrate)

      // let balance = 100
      // let reinvestrate = 0.5
      // let days = 10
      // let rate = 1.05

      //   for (let i = 1; i <= days; i++) {
      //     let oldbalance = balance;
      //     let newbalance = balance * dailyinterestrate;

      //     // console.log('check'+dailyinterestrate,balance)
      //     let reinvest = (balance - oldbalance) * reinvestrate;
      //     console.log(newbalance);
      //     console.log(oldbalance, reinvest);

      //     let newinvestment = oldbalance + reinvest;
      //     let cash = newbalance - oldbalance;
      //     let money = cash.toFixed(2);
      //     // console.log(newinvestment)

      //     let totalinvestment = parseInt(newinvestment).toFixed(2);

      //     console.log(`Day ${i}`, ` ${money}`, `Total: ${totalinvestment}`);

      //     // console.log('asdasdasd' +"|"+ newbalance)
      //     // console.log(newinvestment)
      //     balance = newinvestment;
      //     let x = balance;
      //   }

      for (let i = 1; i <= days; i++) {
        let oldbalance = balance;
        balance = balance * dailyinterestrate;
        let reinvest = (balance - oldbalance) * reinvestrate;
        
        let newinvestment = oldbalance + reinvest;
        let cash = balance - oldbalance;
        money = cash.toFixed(2);
        totalinvestment = newinvestment.toFixed(2);

        console.log(`Day ${i}`, ` ${money}`, `Total: ${totalinvestment}`);
        balance = newinvestment;
        let x = balance;
      }
    },
  },
};
</script>
