<template>
  <div class="container">
    <div class="wrp">
        <h2>Currency Pair: </h2>

        <div class="returnvaluta">
      {{ chosencurrency[0] }} <span class="streep">|</span> {{ chosencurrency[1] }}
    </div>

      <valuta
        :fiat="valuta"
        :name="valuta.naam"
        :currency="valuta.currency"
        v-for="(valuta, index) in valuta"
        :key="index"
      />
    </div>

    
    <button v-on:click="vorige" class="button vorige">
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
.returnvaluta {
  width: 90%;
  height: 100px;
  line-height: 100px;
  background: white;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 30px;
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  color:#363636;
  box-shadow: 2px 8px 20px rgba(13, 143,254, 15%)
  
}

.button {
  width: 40%;
  height: 40px;
  border: none;
  text-align: right;
  
  padding-right: 40px;
  position: fixed;
  left: 25%;
  background-image: linear-gradient(to left,#58CAFB,#0D8FFE);
}
.next {
  right: 30px;
  padding-left: 20px;
  left: auto;
  text-align: left;
  transform: translateX(0);
  background-image: linear-gradient(to right,#58CAFB,#0D8FFE);
}
.next svg{
  margin-left: 10px;
  position: absolute;
  right: 0px;
}

.vorige svg{
  margin-left: 10px;
  position: absolute;
  left: 0px;
}
.wrp {
  min-height: 300px;
}
.wrp h2{
  margin-left: 20px;
  margin-bottom: 20px;
  color: #363636;
}
.streep{
  color: #0D8FFE;
}
</style>