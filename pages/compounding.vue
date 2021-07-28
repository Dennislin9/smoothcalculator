<template>
  <div class="container">
    <Tabs />
<div class="kop">
      Compounding
  
    </div>

    <h2>Initial Purchase Amount</h2>

    <!-- {{$store.state.balancecurrency}} -->
    <!-- {{chosencurrency}} -->
    <Currencyinput class="shadow-element" :currency="chosencurrency" />

    <h2>Daily Interest Rate</h2>
    <Dailyrate class="shadow-element"  />
<!-- :display="drr" -->

<h2>Daily Reinvest Rate</h2>
   
    <DRR class="shadow-element" />

    <h2>Length of Term (in days)</h2>
    <Lengthday class="shadow-element" />

    


    <!-- <Customswitch/> -->
    <button v-on:click="verzenden()" class="button">
      <p>Calculate</p>
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
import Dailyrate from "../components/Dailyrate.vue";
export default {
  components: { Dailyrate },
  data() {
    return {
      selected: "EUR",
    };
  },
  computed: {
    reinvestrate() {
      let arr = []
      for(let i = 1; i <= 10; i++) {
        arr.push({
          value: i/ 10,
          display: i * 10 + '%'
        })
      }
      return arr
    },
    chosenbalance() {
      return this.$store.state.prevbalance;
    },
 days() {
      return this.$store.state.days;
    },
    dailyinterestrate() {
      return parseInt(this.$store.state.dailyinterestrate);
    },
    chosencurrency() {
      return this.$store.state.valuta.find(
        (e) => e.naam == this.$store.state.balancecurrency
      );
    },
  
    // 
  },

  mounted() {
  },
  methods: {
    onchange(value) {
      Cookie.set("drr", value, { expires: 7 });
      this.$store.state.drr = value;
    },
    verzenden() {
      
      let chosenbalance     = this.chosenbalance
      let days              = this.days
      let dailyinterestrate = this.dailyinterestrate


      console.log(chosenbalance, days, dailyinterestrate)

      
      if ((  chosenbalance && days && dailyinterestrate) ==''){
        alert("empty");

      } else {
        this.volgende()
        
      }
    },
     volgende() {
      this.$router.push("/compoundcalc");
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
  margin-top: 40px;
  font-family: "Roboto", sans-serif;
}
/* .custom-control{
  float: left;
  margin-right: 90px;
} */
.risk {
  height: 40px;
  width: 40px;
  color: black;
  font-size: 200%;
  background: none;
  display: block;
  margin-top: 40px;
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
  margin-top: 40px;
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
  font-size: 16px;
  box-shadow: 2px 8px 20px rgba(13, 143, 254, 0.15);
}
.pipsinput {
  margin-bottom: 30px;
  border-radius: 10px;
  margin-top: 7px;
  border: none;
  font-size: 16px;
  box-shadow: 2px 8px 20px rgba(13, 143, 254, 0.15);
}
.button {
   width: 100%;
  height: 40px;
  border: none;
  margin-bottom: 50px;
  position: relative;
}
.button p{
  margin-left: 30px;
  font-size:20px ;
}
</style>