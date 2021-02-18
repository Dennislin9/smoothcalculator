<template>
  <div class="container">
    <div class="wrp">
      <valuta
        :name="valuta.naam"
        :currency="valuta.currency"
        v-for="(valuta, index) in valuta"
        :key="index"
      />
    </div>
    {{ chosencurrency[0] }} /  {{ chosencurrency[1] }}

    <button v-on:click="vorige" class="button">
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
      <p>Back</p>
    </button>

    <button v-on:click="next" class="button next">
      <p>Calculate</p>

      <svg
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
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
    chosencurrency() {
      return this.$store.state.gekozenvaluta;
    },
    valuta() {
      return this.$store.state.valuta;
    },
  },
  methods: {
    vorige() {
      // alert('adjashjasdjkh')
      this.$router.push("/");
    },
    next() {
      this.$router.push("/Riskmanagement");
    },
  },
};
</script>



<style scoped>
.button {
  width: 40%;
  height: 40px;
  border: none;
  position: fixed;
  left: 25%;
  background: black;
}
.next {
  right: 30px;
  left: auto;
  transform: translateX(0);
}
.wrp {
  min-height: 300px;
}
</style>