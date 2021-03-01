<template>
  <h2 class="Navigatie">
    <button v-on:click="calculate" class="calculate">
      <img src="/smoothcalc.png" alt="">
    </button>
 
    <button v-on:click="menu" class="menu">
      <svg
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
    <button v-on:click="thrash(index)" class="thrash">
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
    </button>
  </h2>


</template>

<script>
import Menu from "@/components/Menu";
import Cookie from "js-cookie";
import Sidebar from './Sidebar.vue';
export default {
  // components: { MenuSidebarSidebar },
  methods: {
    thrash() {
      this.$store.state.gekozenvaluta = [];
      Cookie.remove("pair");
    },

  calculate(){
    this.$router.push("/");
  },

    menu(){
      console.log('youo')
      if( this.$store.state.showmenu == 'closed') {
         this.$store.state.showmenu = 'open'
      } else {
         this.$store.state.showmenu = 'closed'
      }
      // this.$store.state.showmenu =! this.$store.state.showmenu

      console.log(this.$store.state.showmenu)
    },
  },
};
</script>


<style scoped>
.Navigatie {
  min-height: 60px;
  width: 100%;
  min-width: 150px;
  text-align: center;
  backdrop-filter: blur(5px);
  border: none;
  color: black;
  outline: none;
  position: fixed;
  font-size: 30px;
  padding-top: 8px;
}
li {
  height: 50px;
  width: 100%;
  display: block;
  border-radius: 5px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px;
}
.thrash {
  width: 40px;
  border: none;
  background: none;
  color: black;
  position: absolute;
  right: 10px;
  top: 7px;
}
.menu {
  width: 40px;
  height: 40px;
  border: none;
  background: none;
  color: black;
  background: none;
  position: absolute;
  left: 10px;
  top: 7px;
}
.calculate{
   width: 250px;
  height: 45px;
  background: none;
  border: none;
  font-size: 100%;
  font-family: Arial, Helvetica, sans-serif;
  vertical-align: top;
}
.calculate img {
  width: 200px;
}

</style>