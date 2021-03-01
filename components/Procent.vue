<template>
  <div class="wrap">
    <div class="currency">%</div>
    <input
      type="text"
      maxlength="2"
      class="input percentage"
      max="4"
      placeholder="voer tekst in"
      @keyup="check2"
      @keydown="check"
      v-html="risk"
    />
  </div>
</template>
<script>
import Cookie from "js-cookie";
import AutoNumeric from "autonumeric";

export default {
  props: ["risk"],

  methods: {
    check2(e) {
      Cookie.set("prevrisk", e.target.value,  { expires: 7 });
      this.$store.state.gekozenrisk = e.target.value;
    },
    check(e) {
      if (e.key == "Backspace" || "Enter") {
      } else if (!isNaN(e.which)) {
        console.log('is not a number')

        e.preventDefault();
      }
    },

  },
  mounted() {
    document.querySelector(".percentage").value = Cookie.get("prevrisk");

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
  box-shadow: 2px 8px 20px rgba(13, 143,254, .15);
}
.wrap .currency {
  min-width: 60px;
  border-radius: 10px;
  background:#3DCBf8;
  color:white;
  
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