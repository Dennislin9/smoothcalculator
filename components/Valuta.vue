<template>
  <div class="money">
    <button v-on:click="valuta(name)" class="Valuta">
      <p>{{ name }}</p>
      <span v-html="currency"></span>
    </button>
  </div>
</template>

<script>
import Cookie from "js-cookie";
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
  mounted() {

    // console.log('Cookie.get()')
    typeof Cookie.get('pair') == 'undefined' ? console.log('no pair chosen yet') : this.$store.state.gekozenvaluta = JSON.parse(Cookie.get('pair'))
    // this.$store.state.gekozenvaluta = Cookie.get("pair");
  },
  methods: {
    valuta(nieuwevaluta) {
      if (this.gekozenvaluta.length > 0) {
        //find chosen valuta in array

        let alreadychosen = this.$store.state.gekozenvaluta.find(
          (element) => element == nieuwevaluta
        );
        if (typeof alreadychosen == "undefined") {
          if (this.gekozenvaluta.length < 2) {
            //nieuwe valuta toevoegen
            this.$store.state.gekozenvaluta.push(nieuwevaluta);
            Cookie.set("pair", this.$store.state.gekozenvaluta);
          }
        }
      } else {
        //eerste valuta toevoegen
        this.$store.state.gekozenvaluta.push(nieuwevaluta);
        Cookie.set("pair", this.$store.state.gekozenvaluta);
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