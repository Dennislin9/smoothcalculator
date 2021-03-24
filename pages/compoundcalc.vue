<template>
  <div class="container">
    {{ chosenbalance }} <br /> 
    {{ dailyinterestrate }} <br />
    {{ drr.value }} <br />
    {{ days }}
  </div>
</template>

<script>
import Cookie from "js-cookie";
export default {
  computed: {
    chosenbalance() {
      return this.$store.state.gekozenbalance;
    },
    drr() {
      return this.$store.state.drr;
    },
    
    days() {
      return this.$store.state.days;
    },

    dailyinterestrate() {
      return 1 + (this.$store.state.dailyinterestrate / 100);
    },
    risk() {
      return (this.chosenbalance / 100) * this.chosenrisk;
    },
  },
  mounted(){
 this.calculate()
  },
  methods: {
    back() {
      this.$router.push("/currency");
    },
    calculate(x) {
        
      let balance = parseInt(this.chosenbalance);

      let reinvestrate = this.drr;
      let days = this.days;
      let dailyinterestrate = parseInt(this.dailyinterestrate);
      console.log(reinvestrate)

    // console.table(balance,reinvestrate, days, dailyinterestrate)

      for (let i = 1; i <= days; i++) {
        let oldbalance = balance;
        balance = balance * dailyinterestrate;
        console.log(dailyinterestrate,balance)
        let reinvest = (balance - oldbalance) * reinvestrate;

        let newinvestment = oldbalance + reinvest;
        let cash = balance - oldbalance;
        let money = cash.toFixed(2);
        // console.log(newinvestment)
        
        let totalinvestment = parseInt(newinvestment).toFixed(2);
        
        console.log('asdasdasd')
        console.log(`Day ${i}`, ` ${money}`, `Total: ${totalinvestment}`);
        console.log('asdasdasd')

        balance = newinvestment;
        let x = balance;
      }
    },
  },
};
</script>
