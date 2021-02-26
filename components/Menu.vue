<template>
  <div class="container">
    <h2>Name</h2>
    <input
      class="instanaam"
      type="text"
      name="naam"
      placeholder="you're name "
      v-model="input.instanaam"
      @keyup="checknaam"
    />
    <h2>Email</h2>
    <input
      class="instaemail"
      type="text"
      email="email"
      placeholder="your email"
      v-model="input.instaemail"
      @keyup="checkmail"
    />
    <button v-on:click="volgende(index)" class="buttonsend">
      <p>Send</p>
    </button>

    <button v-on:click="vorige" class="button">
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
      <p>Back</p>
    </button>
    <button v-on:click="next" class="button next">
      <p>instagram</p>

      <svg
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
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
      this.$store.dispatch("sendinvite", {
        email: this.input.instaemail,
        name: this.input.instanaam,
      });
    },
    vorige() {
      console.log("het werkt");
      this.$router.push("/");
    },
    instagram() {
      console.log("het werkt");
      window.open("https://www.instagram.com/smoothpips.official/");
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
      this.input.instaemail = Cookie.get("previnstaemail");
    }
  },
};
</script>

<style scoped>
input,
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
.buttonsend {
  width: 70px;
  height: 30px;
  border: none;
  position: fixed;
  bottom: 390px;
  text-align: center;
  border: none;
  position: fixed;
  left: 75%;
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
  right: 30px;
  left: auto;
  transform: translateX(0);
}
</style>
