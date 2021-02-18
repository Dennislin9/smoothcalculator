<template>
  <div class="money">
    <button v-on:click="valuta(name)" class="Valuta">
      <p>{{ name }}</p>
      <span v-html="currency"></span>
    </button>
  </div>
</template>

<script>
export default {
  props: ["name", "currency"],
  data() {
    return {
      chosecurrency: "&euro;",
    };
  },
  computed: {
    gekozenvaluta() {
      return this.$store.state.gekozenvaluta;
    },
  },
  methods: {
    valuta(nieuwevaluta) {
      if (this.gekozenvaluta.length > 0) {
        //find chosen valuta in array
        console.log(typeof this.gekozenvaluta)
        let alreadychosen = this.$store.state.gekozenvaluta.find(element => element  == nieuwevaluta);
        console.log(alreadychosen)
        if (typeof alreadychosen == 'undefined') {
          if(this.gekozenvaluta.length < 2) {
            //nieuwe valuta toevoegen
            this.$store.state.gekozenvaluta.push(nieuwevaluta)

          }
        }
      } else {
        //eerste valuta toevoegen
         this.$store.state.gekozenvaluta.push(nieuwevaluta)
      }
      // this.$store.state.gekozenvaluta = nieuwevaluta;
    },
  },
};
</script>



<style scoped>
.Valuta {
  height: 5vh;
  width: 25vw;
  margin-top: 20px;
  margin-left: 15px;
  background: blue;
  float: left;
  border: none;
  display: block;
  color: white;
  outline: none;
  border-radius: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>