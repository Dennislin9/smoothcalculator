<template>
  <div class="container">
    <div class="wrp">
      <h2>Currency Pair:</h2>
      <div class="returnvaluta">
        {{ chosencurrency[0] }} <span class="streep">|</span>
        {{ chosencurrency[1] }}
      </div>
      <div class="pairs">
        <valuta
          :fiat="valuta"
          :name="valuta.naam"
          :currency="valuta.currency"
          v-for="(valuta, index) in valuta"
          :key="index"
        />
        <button class="Valuta thrash" v-on:click="thrash(index)">
          
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        ></path>
      </svg>
          <p>Clear</p>
          <span class="icon"></span>
        </button>
      </div>
    </div>

    <button v-on:click="vorige" class="button vorige">
    
      <p>Back</p>
    </button>

    <button v-on:click="next" class="button next">
      <p>Calculate</p>

    </button>
  </div>
</template>
<script>
import Valuta from "../components/Valuta";
import Cookie from "js-cookie";
export default {
  components: { Valuta },

  computed: {
    chosencurrency() {
      return this.$store.state.gekozenvaluta;
      //  return this.$store.commit.addvaluta;
   
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
    thrash() {
      // this.$store.state.gekozenvaluta = [];
      this.$store.commit('setvaluta',[])
      for (let i = 0; i < this.$store.state.valuta.length; i++) {
        this.$store.state.valuta[i].selected = false;
      }
      Cookie.remove("pair");
    },
    next() {
      this.$router.push("/riskmanagement");
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
  color: #363636;
  box-shadow: 2px 8px 20px rgba(13, 143, 254, 15%);
}

.button {
  width: 40%;
  height: 40px;
  border: none;
  margin-bottom: 30px;
  position: fixed;
  left: 25%;
  background-image: linear-gradient(to left, #58cafb, #0d8ffe);
}
.next {
  right: 30px;
  padding-left: 20px;
  margin-bottom: 30px;
  padding-right: 20px;
  left: auto;
  text-align: center;
  transform: translateX(0);
  background-image: linear-gradient(to right, #58cafb, #0d8ffe);
}

.wrp {
  min-height: 300px;
}
.wrp h2 {
  margin-left: 20px;
  margin-bottom: 20px;
  color: #363636;
}
.streep {
  color: #0d8ffe;
}
.thrash {
  height: 50px;
  width: 100%;
  background: white;
  display: flex;
  border-radius: 8px;
  font-weight: bold;
  line-height: 20px;
  color: black;
  border-color: black;
  border-width: 2px;
 
  justify-content: center;
  align-items: center;
  
}
.thrash svg {
  color: black;
  height: 25px;
  margin-left: 7px;
}
.thrash p {
  font-family: "Poppins";
  font-weight: bold ;
  flex: 1;
  font-size: 15px;
  font-weight: bold;
  background: none;
 
  
}

.pairs {
  width: 100%;
  max-width: 500px;
  background: none;
  min-height: 300px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, 30%);
  grid-template-rows: repeat(auto-fill, 50px);
  justify-content: center;
}
</style>