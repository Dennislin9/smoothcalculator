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

    window.open("https://www.facebook.com/Smoothpips");
  },
}
};
</script>

<style scoped>
input,
.facebook {
  width: 50px;
  height: 80px;
  border: none;
  background: none;
  color: black;

  position: absolute;
  left: 17%;
  bottom: 80px;
}
.facebook img {
  height: 100%;
  object-fit: contain;
  width: 100%;
}
</style>

