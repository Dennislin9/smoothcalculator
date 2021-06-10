<template>
  <div class="wrap">
    <div class="currency">%</div>
    <input
      type="text"

      class="input percentage"
      max="100"
      placeholder="voer tekst in"
      @keyup="check2($event), check($event)"
      required
      inputmode="decimal"
      v-html="risk"
    />
    <!-- <input type="number" min="0" max="99"> -->
  </div>
</template>
<script>
import Cookie from "js-cookie";
import AutoNumeric from "autonumeric";

export default {
  props: ["risk"],

  methods: {
    check2(e) {
      Cookie.set("prevrisk", e.target.value, { expires: 7 });
      this.$store.state.prevrisk = e.target.value;
    },
    check(e) {
      if(e.target.value < 100) {
        e.target.value = e.target.value 
      } else {
        e.target.value = 1
      }
    },
  },
  computed: {
    prevrisk() {
      return this.$store.state.prevrisk;
    },
  },
  mounted() {
    document.querySelector(".percentage").value = this.prevrisk;
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
  border-radius: 10px;
  margin-top: 7px;
  border: none;
  margin-bottom: 30px;
}
.wrap .currency {
  min-width: 60px;
  border-radius: 10px;
  background: #3dcbf8;
  color: white;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
}
.input[placeholder]:empty:before {
  content: attr(placeholder);
  color: #555;
}
.input {
  flex: 1;
  line-height: 32px;
  width: 100%;
  padding: 12px 20px;
  /* margin: 8px 0; */
  outline: none;
  display: inline-block;
  border-radius: 4px;
  background: white;
  border-radius: 10px;
  border: none;
  box-sizing: border-box;
  position: relative;
}
</style>