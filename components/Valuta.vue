<template>
<div class="money"> 
     <button v-on:click="Valuta(name)" class="Valuta">
       <p>{{name}}</p>
<span v-html="currency"></span>

     </button>
</div>
</template>

<script>

export default {
  props: ["name", "currency"],

  mounted() {
  
  
  // methods: {
  //   Valuta(spelerNaam) {
  //     alert(`You just bought ${spelerNaam}`);
  //     console.log("werkt");
  //   },
    
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