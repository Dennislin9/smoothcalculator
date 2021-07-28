<template>
  <div class="wrap">
    <div class="currency" v-html="currency.currency"></div>
    <div
      class="input currencyinput"
      contenteditable="true"
      @keyup="check2"
      inputmode="decimal"
      placeholder="enter text"
    >
    </div>
  </div>
</template>
<script>
// import AutoNumeric from "autonumeric";
import Cookie from "js-cookie"
export default {
  props: ["currency"],
  methods: {
    check2(e) {
      Cookie.set('prevbalance', e.target.innerHTML.replace('.', ''),  { expires: 7 })
      //this.$store.state.prevbalance =  e.target.innerHTML.replace('.', '')
     
      this.$store.commit('balance',e.target.innerHTML.replace('.', ''))
     
    },
  
  },
  computed: {
      
    prevbalance() {
      return this.$store.state.prevbalance;
    },
    prevrisk() {
      return this.$store.state.prevrisk;
    },
    
  },
  mounted() {
    
    document.querySelector('.currencyinput').innerHTML = this.prevbalance
    

    
    // const autoNumericOptionsEuro = {
    //   digitGroupSeparator: ".",
    //   decimalCharacter: ",",
    //   decimalCharacterAlternative: ".",
      

    //   currencySymbolPlacement:
    //     AutoNumeric.options.currencySymbolPlacement.suffix,
    //   roundingMethod: AutoNumeric.options.roundingMethod.halfUpSymmetric,
    // };

    // Initialization
    // new AutoNumeric(".currencyinput", autoNumericOptionsEuro);
   },
};
</script>
<style scoped>
.wrap {
  display: flex;
  height: 50px;
  line-height: 50px;
  background: white;
  border: none;
}
.wrap .currency {
  min-width: 40px;
  font-size: 30px;
  text-align: center;
  font-family: "Poppins";
  
  
}
.input[placeholder]:empty:before {
  content: attr(placeholder);
  color: #555;
}
.input {
  flex: 1;
  line-height: 30px;
  width: 100%;
  padding: 12px 20px;
  /* margin: 8px 0; */
  outline: none;
  display: inline-block;
  border-radius: 4px;
  box-sizing: border-box;
  position: relative;
      font-size: 16px;
}
</style>