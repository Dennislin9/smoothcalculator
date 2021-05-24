<template>
  <div class="Navigatie">
    <div class="wrap">
     <img src="/navigatie1.png" alt="" @click="home"/>

    </div>
  </div>
</template>

<script>

export default {
  // components: { MenuSidebarSidebar },
  methods: {
    home() {
      this.$router.push("/");
    },

    menu() {
      console.log("youo");
      if (this.$store.state.showmenu == "closed") {
        this.$store.state.showmenu = "open";
      } else {
        this.$store.state.showmenu = "closed";
      }
      // this.$store.state.showmenu =! this.$store.state.showmenu

      console.log(this.$store.state.showmenu);
    },
  },
};
</script>



<style lang="scss" scoped>
.Navigatie {
  display: flex;

  padding-top: 5px;

  padding-top: constant(safe-area-inset-top);
  padding-top: env(safe-area-inset-top);
  // padding-bottom: 10px;
  min-height: 40px;
  background: white;
  width: 100%;
  position: fixed;
  .wrap {
    height: 50px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    img {
      height: 25px;
    }
  }
  /* padding-top: calc(env(safe-area-inset-bottom) + 5px); */
}
</style>