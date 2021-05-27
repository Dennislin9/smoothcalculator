<template>
  <div>
    <NavigatieBar />
    <Nuxt />
    
    <!-- <Tabs /> -->
  </div>
</template>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
html {
  font-size: 13px;
  // word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #363636;
  font-family: "Poppins";
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.container {
  height: 100vh;
  width: 100vw;
  padding: 20px;
  padding-top: 90px;
   padding-top: calc(constant(safe-area-inset-top) + 90px);
  padding-top: calc(env(safe-area-inset-top) + 90px);
  margin-bottom: 120px;
  background: linear-gradient(10deg, white);
}
.button {
  width: calc(100% - 20px);
  max-width: 430px;
  height: 48px;
  border: none;
  position: relative;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  background-image: linear-gradient(to left, #0d8ffe, #58cafb);
  color: white;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  padding-right: 10px;
  margin: 0 auto;
  margin-top: 80px;
  border-radius: 10px;
  box-shadow: 2px 8px 20px rgba(13, 143,254,.15)
}
.button p {
  flex: 1;
  line-height: 40px;
  font-weight: 500px;
  font-size: 15px;
  text-align: center;
  font-weight: bold;
  font-family: "Poppins";
  font-size:20px ;
  
 
  
  
}
.vs__selected {
  display: block;
  height: 100%;
  width: 100%;
}
.vs__dropdown-toggle {
  border: none !important;
  height: 100%;
}
input {
  padding-left: 20px;
  font-size: 16px;
  
}
.shadow-element {
  height: 50px;
  border-radius: 10px;
  width: calc(100% - 0px);
  border: none;
  outline: none;
  -webkit-appearance: none;
  box-shadow: 2px 6px 8px rgba(13, 143, 254, 0.1);
  margin-bottom: 30px;
}
.v-select ul {
  max-height: 200px;
}
.button svg {
  height: 70%;
  margin-right: 10px;
}

.custom-select {
  position: relative;
}

.custom-select select {
  display: none; /*hide original SELECT element:*/
}

.select-selected {
  background-color: #0d8ffe;
}

/*style the arrow inside the select element:*/
.select-selected:after {
  position: absolute;
  content: "";
  top: 14px;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #fff transparent transparent transparent;
}

/*point the arrow upwards when the select box is open (active):*/
.select-selected.select-arrow-active:after {
  border-color: transparent transparent #fff transparent;
  top: 7px;
}

/*style the items (options), including the selected item:*/
.select-items div,
.select-selected {
  color: #ffffff;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
  user-select: none;
}

/*style items (options):*/
.select-items {
  position: absolute;
  background-color: DodgerBlue;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
}

/*hide the items when the select box is closed:*/
.select-hide {
  display: none;
}
.kop{
  color:#58cafb;
  font-family: "Poppins";
  font-weight: bold ;
  font-size: 25px;
  margin-bottom: 10px;
}
.select-items div:hover,
.same-as-selected {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
