<template>
  <div class="">
    <button v-on:click="linkin" class="linkin">
      <img src="/link.png" alt="" />
    </button>
  </div>
</template>

<script>
export default {
methods:{
  linkin() {

    window.open("https://www.linkedin.com/company/smoothpips-official/");
  },
}
};
</script>

<style scoped>
input,
.linkin {
  width: 50px;
  height: 80px;
  border: none;
  background: none;
  color: black;

  position: absolute;
  left: 63%;
  bottom: 80px;
}
.linkin img {
  height: 100%;
  object-fit: contain;
  width: 100%;
}
</style>

