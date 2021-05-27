<template>
  <div class="sidebar" :style="sidebarstyle">
    <div class="content" :style="contentstyle">
      <button v-on:click="logo" class="logo">
        <img src="/logo.png" alt="" />
 </button>
        <Instagram />
        <Linkin />
        <Facebook />
     
    </div>
    <div class="overlay" v-on:click="hide"></div>
  </div>
</template>

<script>
import Facebook from "./Facebook.vue";
export default {
  components: { Facebook },
  //   components: { instagram },
  data() {
    return {
      sidebarstyle: {
        display: "",
      },
      contentstyle: {
        transform: ""
      },
    };
  },
  watch: {
    showmenu(x) {
      if (x == "open") {
        this.show();
      } else {
        this.hide();
      }
    },
  },
  computed: {
    showmenu() {
      return this.$store.state.showmenu;
    },
  },
  methods: {
    show() {
      this.sidebarstyle.display = "block";
      this.$store.state.showmenu = "open";

      this.contentstyle.transform = "translateX(-100)";
      document.querySelector(".overlay").style["display"] = "block";
    },
    hide() {
      this.sidebarstyle.display = "none";
      this.$store.state.showmenu = "closed";
      this.contentstyle.transform = "translatex(0%)";
      document.querySelector(".overlay").style["display"] = "none";
    },
    logo() {
      window.open("https://smoothpipsofficial.com/");
    },
  },
};
</script>

<style >
.sidebar {
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  display: none;
}
.overlay {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100vw;
  background: none;
}
.content {
  width: calc(100vw - 40px);
  height: 100%;

  align-content: left;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 10px;
  transition: all 0.3s ease;
  z-index: 2;
  background: white;
}
.list {
  display: default;
}
.logo {
  height: 50px;
  width: 300px;
  position: fixed;
  left: 20px;
  background: white;
  border: none;
}
.logo img{
    height: 100%;
  object-fit: contain;
  width: 100%;
}
</style>