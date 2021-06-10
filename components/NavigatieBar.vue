<template>
  <div class="Navigatie">

    <div
      class="back"
      v-on:click="back"
      v-if="$route.name == 'riskmanagement' || $route.name == 'Riskmanagement' "
    >
      <svg
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </div> -->

    <div class="wrap">
      <img src="/navigatie1.png" alt="" @click="home" />
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
    back() {
      this.$router.push("/currency");
    },

    menu() {
      if (this.$store.state.showmenu == "closed") {
        this.$store.state.showmenu = "open";
      } else {
        this.$store.state.showmenu = "closed";
      }
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
.back {
  margin-top: 5px;
  margin-left: 10px;
  height: 40px;
  width: 40px;
  position: fixed;
  left: 10;
  z-index: 10;
}
</style>
