<template>
  <div class="wrap">
    <div class="currency">%</div>
    <div
      class="input percentage"
      contenteditable="true"
      placeholder="voer tekst in"
      @keyup="check"
    ></div>
  </div>
</template>
<script>
import AutoNumeric from "autonumeric";
export default {
  props: ["currency"],
  methods: {
    check(e) {
        if(parseInt(e.target.innerHTML) > 100) {
            e.target.innerHTML = ''
            e.target.innerHTML = 100
        }
      if (e.key == "Backspace" || "Enter") {
      } else if (isNaN(String.fromCharCode(e.which))) {
        e.preventDefault();
      }
    },
  },
  mounted() {
    // const autoNumericOptionsEuro = {
    //   digitGroupSeparator: ".",
    //   decimalCharacter: ",",
    //   decimalCharacterAlternative: ".",
    //   percentageUS2dec: true,
    // };

    // // Initialization
    // new AutoNumeric(".percentage", autoNumericOptionsEuro);
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