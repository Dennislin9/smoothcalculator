<template>
  <div class="wrap">
    <div class="currency" v-html="currency.currency"></div>
    <div
      class="input currencyinput"
      contenteditable="true"
      @keyup="check2"
      placeholder="voer tekst in"
    >
    </div>
  </div>
</template>
<script>
import AutoNumeric from "autonumeric";
import Cookie from 'js-cookie'
export default {
  props: ["currency"],
  methods: {
    check2(e) {

      Cookie.set('prevbalance', e.target.innerHTML.replace('.', ''))
      this.$store.state.gekozenbalance =  e.target.innerHTML.replace('.', '')
     
    },
    // check(e) {
    //   if (e.key == "Backspace" || "Enter") {
    //   } else if (isNaN(String.fromCharCode(e.which))) {
    //     e.preventDefault();
    //   }
    // },
    gekozenbalance() {
      return this.$store.state.gekozenbalance;
    },
    gekozenrisk() {
      return this.$store.state.gekozenrisk;
    },
    
  },
  mounted() {
    console.log(this.currency.currency)
    console.log(Cookie.get('prevbalance'))
    document.querySelector('.currencyinput').innerHTML = Cookie.get('prevbalance')
    
    const autoNumericOptionsEuro = {
      digitGroupSeparator: ".",
      decimalCharacter: ",",
      decimalCharacterAlternative: ".",

      currencySymbolPlacement:
        AutoNumeric.options.currencySymbolPlacement.suffix,
      roundingMethod: AutoNumeric.options.roundingMethod.halfUpSymmetric,
    };

    // Initialization
    new AutoNumeric(".currencyinput", autoNumericOptionsEuro);
  },
};
</script>
<style scoped>
.wrap {
  display: flex;
  height: 50px;
  line-height: 50px;
  background: white;
  border: 1px solid #ccc;
}
.wrap .currency {
  min-width: 40px;
  font-size: 30px;
  text-align: center;
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
  background: white;
  box-sizing: border-box;
  position: relative;
}
</style>