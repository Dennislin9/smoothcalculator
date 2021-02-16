<template>
  <div class="container">
    <NavigatieBar />
    <label for="fname" class="labBalance">Account Balance:</label>
    <input
      type="number"
      id="account"
      name="account"
      placeholder="Account Balance"
    />

    <label for="frisk" class="risk">Risk manangement:</label>
    <input type="number" id="risk" name="risk" placeholder="Risk %" />
    <label for="fpips" class="pips">Stop loss in pips:</label>
    <input
      type="number"
      id="pips"
      name="pips"
      placeholder="stop loss in pips "
    />
    
    <button v-on:click="next(index)" class="next">
      <p>
      Select currency pair

      </p>
      <svg
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
mounted() {
    
    this.$router.push('currency')
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  padding-bottom: 10px;
  background: linear-gradient(10deg, white, aqua);
}
.labBalance {
  height: 40px;
  width: 50px;
  color: black;
  font-size: 200%;
  background: none;
  width: 100%;
  display: block;
  margin-top: 50px;
  font-family: Arial, Helvetica, sans-serif;
}
.risk {
  height: 40px;
  width: 50px;
  color: black;
  font-size: 200%;
  background: none;
  width: 100%;
  display: block;
  margin-top: 50px;
  font-family: Arial, Helvetica, sans-serif;
}
.pips {
  height: 40px;
  width: 50px;
  color: black;
  font-size: 200%;
  background: none;
  width: 100%;
  display: block;
  margin-top: 50px;
  font-family: Arial, Helvetica, sans-serif;
}
input[type="number"],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  /* margin-top: 50px; */
}
.next {
  width: calc(100% - 20px);
  max-width: 430px;
  height: 40px;
  border: none;
  background: black;
  color: white;
   display: flex;
  /* justify-content: center; */
  align-items: center;
  padding-right: 10px;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 5px;
}
.next p {
  flex: 1;
  line-height: 40px;
  font-size: 20px;
}
.next svg {
  height: 80%;
}
  
</style>