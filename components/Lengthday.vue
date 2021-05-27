<template>
  <input
    type="number"
    id="days"
    name="days"
    placeholder="How many days "
    @keyup="check2"
  />
</template>

<script>
import Cookie from "js-cookie";

export default {
  // props:[],
  methods: {
    check2(e) {
      Cookie.set("days", e.target.value);
      this.$store.state.days = e.target.value;
    }   
  },
  mounted() {
    
    document.querySelector("#days").value = Cookie.get("days");
  },
};
</script>
