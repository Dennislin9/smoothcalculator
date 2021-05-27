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
      v-html="dailyinterestrate"
    />
  </div>
</template>
<script>
import Cookie from "js-cookie";
import AutoNumeric from "autonumeric";

export default {
  computed: {
    dailyinterestrate() {
      return parseInt(this.$store.state.dailyinterestrate);
    },
  },
  methods: {
    check2(e) {
      Cookie.set("previr", e.target.value, { expires: 7 });
      this.$store.state.dailyinterestrate = e.target.value;
    },
    check(e) {
  
      if(isNaN(e.key) == false ) {

       
      } else  if(e.key == "Backspace" || "Enter") {
      }
      if(e.key != "Backspace"){
           if( isNaN(e.key) == true) {
           e.preventDefault()
           }
        }
     
    },
  },
  mounted() {
    if (typeof Cookie.get("previr") != "undefined") {
      document.querySelector(".percentage").value = Cookie.get("previr");
      this.$store.state.dailyinterestrate = Cookie.get("previr");
    }
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