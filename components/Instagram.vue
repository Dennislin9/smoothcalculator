<template>
    <div class="">
    <button v-on:click="instagram" class=" instagram">
      <img src="/instagram.png" alt="">
      
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: {
        instanaam: "",
        instaemail: "",
      },
    };
  },
  methods: {
    instagram() {
      window.open('https://www.instagram.com/smoothpips.official/');
    }
  }
};
</script>

<style scoped>
input,
.instagram {
  width: 50px;
   height: 80px;
  border: none;
  background: none;
  color: black;
 
  position: absolute;
  left: 40%;
  bottom: 80px;
}
.instagram img{
  height: 100%;
  object-fit: contain;
  width: 100%;

}

</style>

