<template>
  <div>
    <NavigatieBar />
    <Nuxt />
    <sidebar />
  </div>
</template>
<script>
import Cookie from "js-cookie";
import sidebar from "@/components/Sidebar";
export default {
  components: {
    sidebar,
  },
  mounted() {
    if (typeof Cookie.get("balancecurrency") != 'undefined') {
      this.$store.state.balancecurrency = Cookie.get("balancecurrency");
    } else {
       Cookie.set('balancecurrency', 'EUR')
    }
    if (typeof Cookie.get("prevbalance") != 'undefined') {
      this.$store.state.gekozenbalance = Cookie.get("prevbalance");
    } else {
      this.$store.state.gekozenbalance = 0
    }
    if (typeof Cookie.get("prevrisk") != 'undefined') {
      this.$store.state.gekozenrisk = Cookie.get("prevrisk");
    } else {
      // this.$store.state.gekozenrisk = 0
       Cookie.set('prevrisk', 0)

    }
    if (typeof Cookie.get("prevpips") != 'undefined') {
      this.$store.state.gekozenpips = Cookie.get("prevpips");
    } else {
      this.$store.state.gekozenpips = 0
    }
    if (typeof Cookie.get("previnstanaam") != 'undefined') {
      this.$store.state.instagramnaam = Cookie.get("previnstanaam");
    } else {
      this.$store.state.instagramnaam = 0
    }

    // console.log(    this.$store.state.balancecurrency = Cookie.get("balancecurrency"),
    // this.$store.state.gekozenbalance = Cookie.get("prevbalance"),
    // this.$store.state.gekozenrisk = Cookie.get("prevrisk"))
  },
};
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
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
  padding-top: 200px;
  background: linear-gradient(10deg, rgb(53, 42, 209), white);
}
.button {
  width: calc(100% - 20px);
  max-width: 430px;
  height: 40px;
  border: none;
  position: fixed;

  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
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
.button p {
  flex: 1;
  line-height: 40px;
  font-size: 20px;
}
.button svg {
  height: 80%;
}

.custom-select {
  position: relative;
  font-family: Arial;
}

.custom-select select {
  display: none; /*hide original SELECT element:*/
}

.select-selected {
  background-color: DodgerBlue;
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

.select-items div:hover,
.same-as-selected {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
