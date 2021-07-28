<template>
  <div class="container">
    <div class="kop1">
      <h2>Exchange</h2>

      <select
        ref="base"
        class="shadow-element"
        @change="onchange"
        v-model="balance1"
      >
        <option :value="coin.naam" v-for="(coin, index) in valuta" :key="index">
          {{ coin.naam }}
        </option>
      </select>
      {{ balance1 }}
      <input
        type="number"
        class="shadow-element"
        v-model="amountOne"
        @input="fetchData()"
      />

      <div class="kop1">
        <!-- <button @click="switchValues()" class="switch">Switch</button> -->
        <h4 id="baseValue">
          1 {{ balance1 }} = {{ rates }} {{ balance2 }} <br />
        </h4>
      </div>

      <select
        ref="secondcurrency"
        class="shadow-element"
        @change="onchange"
        v-model="balance2"
      >
        <option :value="coin.naam" v-for="(coin, index) in valuta" :key="index">
          {{ coin.naam }}
        </option>
      </select>

      <input
        type="number"
        class="shadow-element"
        placeholder="0"
        disabled
        v-model="amountTwo"
      />
      <div class="kop1">
        <h4 id="lastUpdated">
          <!-- Last Updated:
          {{ data.date }} -->
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rates: 0,
      amountOne: 1,
      amountTwo: 0,
    };
  },
  methods: {
    fetchData() {
      this.$axios
        .$get(
          `https://data.fixer.io/api/latest?access_key=1e626f1512140e71aa9da68fff877517&base=${this.$refs.base.value}&symbols=${this.$refs.secondcurrency.value}`
        )
        .then((response) => {
          console.log(response);
          this.rates = response.rates[this.$refs.secondcurrency.value];
          this.amountTwo = this.amountOne * this.rates.toFixed(2);
        });
    },

    onchange(event) {
      this.fetchData();
      this.$store.commit("balancecurrency2", this.$refs.secondcurrency.value);
      this.$store.commit("balancecurrency1", this.$refs.base.value);
    },
  },
  mounted() {
    this.fetchData();
  },
  props: ["currency"],
  computed: {
    valuta() {
      return this.$store.state.valuta;
    },
    balance1() {
      return this.$store.state.currency1;
    },
    balance2() {
      return this.$store.state.currency2;
    },
  },
};
</script>

<style scoped>
.kop1 {
  box-sizing: border-box;
  color: #58cafb;
  background: none;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  font-family: "Poppins";
}
.switch {
  flex: 1;
  font-size: 20px;
  font-family: "Poppins";
  font-weight: bold;
  background-image: linear-gradient(to left, #0d8ffe, #58cafb);
  border: none;
  color: white;
  border-radius: 10px;
}
</style>