<template>
  <div class="">
    <button v-on:click="facebook" class="facebook">
      <img src="/facebook.png" alt="" />
    </button>
  </div>
</template>

<script>
export default {
methods:{
  facebook() {
    console.log("het werkt");
    window.open("https://www.facebook.com/Smoothpips");
  },
}
};
</script>

<style scoped>
input,
.facebook {
  width: 50px;
  height: 50px;
  border: none;
  background: none;
  color: black;

  position: absolute;
  left: 20%;
  bottom: 50px;
}
.facebook img {
  height: 100%;
  object-fit: contain;
  width: 100%;
}
</style>

