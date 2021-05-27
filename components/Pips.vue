<template>
  <input
    type="number"
    id="pips"
    name="pips"
    placeholder="stop loss in pips "
    inputmode="decimal"
    @keyup="check2"
  />
</template>

<script>
import Cookie from "js-cookie";

export default {
  // props:[],
  methods: {
    check2(e) {

      Cookie.set("prevpips", e.target.value);
      this.$store.state.prevpips = e.target.value;
    },
  },
  mounted() {
    document.querySelector("#pips").value = Cookie.get("prevpips");
  },
};
</script>
