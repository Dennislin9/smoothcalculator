<template>
  <h2 class="Navigatie">
    <button v-on:click="calculate" class="calculate">
      <img src="/navigatie1.png" alt="">
    </button>
 
    
  </h2>


</template>

<script>
import Menu from "@/components/Menu";

import Sidebar from './Sidebar.vue';
export default {
  // components: { MenuSidebarSidebar },
  methods: {
   

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
  background: white;
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
  margin-top: 20px;
   width: 250px;
  height: 25px;
  background: none;
  border: none;
  font-size: 100%;
  font-family: Arial, Helvetica, sans-serif;
  vertical-align: top;
}
.calculate img {
  width: 120px;
  padding-bottom: 10px;
  border: none;
}

</style>