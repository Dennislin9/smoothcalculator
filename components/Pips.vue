<template>
  <input
    type="number"
    id="pips"
    name="pips"
    placeholder="stop loss in pips "
    @keyup="check2"
  />
</template>

<script>
import Cookie from "js-cookie";

export default {
  // props:[],
  methods: {
    check2(e) {
      console.log("check");
      Cookie.set("prevpips", e.target.value);
      this.$store.state.gekozenpips = e.target.value;
    }   
  },
  mounted() {
    
    document.querySelector("#pips").value = Cookie.get("prevpips");
     this.$store.state.gekozenpips =  Cookie.get("prevpips");
  },
};
</script>