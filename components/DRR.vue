<template>
    <v-select
      class="shadow-element"
      label="display"
      id="DRR"
      :options="reinvestrate"
      v-model="$store.state.drr"
      @input="onchange"
    ></v-select> 
</template>

<script>
import Cookie from "js-cookie";

export default {
  // props:[],
  methods: {
    check2(e) {
      console.log("check");
      Cookie.set("drr", value, { expires: 7 });
      this.$store.state.DRR = e.target.value;
    }   
  },
  mounted() {
    
    document.querySelector("#DRR").value = Cookie.get("DRR");
  },
  computed:{

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
     drr() {
      return this.$store.state.drr;
    }
  },
};
</script>
