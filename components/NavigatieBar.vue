<template>
  <h2 class="Navigatie">SmoothCalculator
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
  box-shadow: 0px 5px 10px rgba(0,0,0, .2);
  margin-bottom: 30px;
  padding: 10px;;
}
.thrash {
  width: 50px;
  border: none;
  background: none;
  color: black;
  position: absolute;
  right: 10px;
  top: 7px;
  
}
</style>