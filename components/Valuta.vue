<template>
  <button
    v-on:click="valuta(name)"
    :class="`currency Valuta ${fiat.selected == true ? 'selected' : ''}`"
  >
    <p>{{ name }}</p>
    <span v-html="currency" class="icon"></span>
  </button>
</template>

<script>
import Cookie from "js-cookie";
export default {
  props: ["name", "currency", "fiat"],
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
    typeof Cookie.get("pair") == "undefined"
      ? console.log("no pair chosen yet")
      : (this.$store.state.gekozenvaluta = JSON.parse(Cookie.get("pair")));
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
            console.log(
              this.$store.state.valuta.find((e) => e.naam == nieuwevaluta)
                .selected
            );
            this.$store.state.valuta.find(
              (e) => e.naam == nieuwevaluta
            ).selected = true;
            this.$store.state.gekozenvaluta.push(nieuwevaluta);
            Cookie.set("pair", this.$store.state.gekozenvaluta);
          }
        }
      } else {
        //eerste valuta toevoegen
        this.$store.state.gekozenvaluta.push(nieuwevaluta);
        this.$store.state.valuta.find(
          (e) => e.naam == nieuwevaluta
        ).selected = true;

        Cookie.set("pair", this.$store.state.gekozenvaluta);
      }
      // this.$store.state.gekozenvaluta = nieuwevaluta;
    },
  },
};
</script>



<style scoped>
/* .Valuta {
  height: 7vh;
  width: 25vw;
  margin-top: 20px;
  margin-left: 15px;
  background: black;
  float: left;
  border: none;
  display: block;
  color: white;
  outline: none;
  border-radius: 8px;
  font-weight: bold;
  line-height: 20px;
}
.selected {
  background: #3DCBf8;
}
.icon{
  font-size: 20px;
  font-weight: normal;
} */

.currency {
  height: 50px;
  width: 100%;
  background: black;
  border: none;
  display: block;
  border-radius: 8px;
  font-weight: bold;
  line-height: 20px;
  color: white;
}
</style>