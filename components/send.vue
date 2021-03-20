<template>
  <div class="hallo">
         
    
    <h2 class="centertext">Name</h2>
    <input
      class="instanaam center" 
      type="text"
      name="naam"
      placeholder="you're name "
      v-model="input.instanaam"
      @keyup="checknaam"
    />
    <h2 class="centertext" >Email</h2>
    <input
      class="instaemail center"
      type="text"
      email="email"
      placeholder="your email"
      v-model="input.instaemail"
      @keyup="checkmail"
    />
    <button v-on:click="volgende(index)" class="buttonsend center">
      <p>Send</p>
    </button>

    
    <button v-on:click="instagram" class=" instagram">
      <img src="/instagram.png" alt="">
      
    </button>
  </div>
</template>

<script>
import Cookie from "js-cookie";
export default {
  data() {
    return {
      input: {
        instanaam: "",
        instaemail: "",
      },
    };
  },
  methods: {
    volgende() {
    //   this.$router.push("/currency");
    
      this.$store.dispatch("sendinvite", {
        email: this.input.instaemail,
        name: this.input.instanaam,
      });
    },
     vorige() {
      console.log("het werkt")
      this.$router.push("/");
    },
    instagram() {
      console.log("het werkt")
      window.open('https://www.instagram.com/smoothpips.official/');
    },
    checkmail(e) {
      console.log("check");
      Cookie.set("previnstaemail", e.target.value);
    //   this.$store.state.instaemail = e.target.value;
    },
    checknaam(e) {
      console.log("");
      Cookie.set("previnstanaam", e.target.value);
    //   this.$store.state.instagramnaam = e.target.value;
    },
  },
  computed: {
    instagramnaam1() {
      return this.$store.state.instagramnaam;
    },
    instaemail1() {
      return this.$store.state.instaemail;
    },
  },
  mounted() {
    if (typeof Cookie.get("previnstanaam") != "undefined") {
      this.input.instanaam = Cookie.get("previnstanaam");
    }
    if (typeof Cookie.get("previnstaemail") != "undefined") {
        this.input.instaemail = Cookie.get(
        "previnstaemail"
      );
    }
  },
};
</script>

<style scoped>
input,
select {
  width: 80%;
  left: 25%;
  padding: 12px 20px;
  padding-left: 25%;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  /* margin-top: 50px; */
}

.buttonsend {
  width: 255px;
  height: 30px;
  border: none;
  top: 220px;
  text-align: center;
   border: none;
  position: center;
   background:#3DCBf8; 
  border-radius: 4px;
   font-family: Arial, Helvetica, sans-serif;
}
.button {
  width: 40%;
  height: 40px;
  border: none;
  position: fixed;
  left: 25%;
  background: black;
}
.instagram {
  width: 50px;
   height: 80px;
  border: none;
  background: none;
  color: black;
 
  position: absolute;
  left: 40%;
  bottom: 80px;
}
.instagram img{
  height: 100%;
  object-fit: contain;
  width: 100%;


}
.center {
  display: block;
  margin: 0 auto;
  margin-top: 10px;
}
.centertext{
 margin-left: 30px;
}

.hallo{
  margin-top: 250px;
}

</style>

