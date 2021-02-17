<template>
  <div class="container">
    
    <valuta
      :name="valuta.naam"
      :currency="valuta.currency"
      v-for="(valuta, index) in valuta"
      :key="index"
    />
    <button v-on:click="vorige(index)" class="button">
      <p>terug</p>
      <svg
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  </div>
</template>
<script>
import Valuta from "../components/Valuta";
export default {
  components: { Valuta },
  computed: {
    valuta() {
      return this.$store.state.valuta;
    },
  },  
  methods: {
    vorige() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>




</style>