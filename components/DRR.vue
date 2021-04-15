<template>
    <v-select
      class="shadow-element"
      label="display"
      id="DRR"
      :options="reinvestrate"
      v-model="$store.state.drr"
    ></v-select> 
</template>

<script>
import Cookie from "js-cookie";

export default {
  // props:[],
  methods: {
   
  },
  mounted() {
  
 
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
