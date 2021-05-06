<template>
  <div class="socialmedia">
    <div class="kop1" >
       Join Smoothpips 
     </div>
       
    <div class="hallo">
      <h2 class="naam">Name</h2>

      <input
        class="hallo inputjoin"
        type="text"
        name="naam"
        placeholder="Your name "
        v-model="input.instanaam"
        @keyup="checknaam"
      />
      <h2 class="email">E-mail</h2>
      <input
        class="hallo inputjoin"
        type="text"
        email="email"
        placeholder="Your e-mail"
        v-model="input.instaemail"
        @keyup="checkmail"
      />
    </div>
    <button v-on:click="verzenden(index)" class="buttonsend">
      <p>Send</p>
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
    <div class="title"> Smoothpips</div>
   
<div class="join">
      Smoothpips Is a family full of entrepreneurs and creatives who help each
      other achieve their goals. we help members develop and make the best
      version of themselves. Enter your details here and we will guide you on
      your journey
    </div>
    <div class="socials">
      <div class="icon" v-on:click="facebook">
        <img src="/facebook.png" alt="" />
      </div>

      <div class="icon" v-on:click="linkedin">
        <img src="/linkedin1.png" alt="" />
      </div>

      <div class="icon" v-on:click="instagram">
        <img src="/instagram.png" alt="" />
      </div>

      <div class="icon" v-on:click="website">
        <img src="/website.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>


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
    verzenden() {
      let email = this.input.instaemail;
      let naam = this.input.instanaam;

      if ((email && naam) == "") {
        alert("empty");
      } else {
        this.$store.dispatch("sendinvite", {
          email: this.input.instaemail,
          name: this.input.instanaam,
        });
      }
    },

    instagram() {
      console.log("het werkt");
      window.open("https://www.instagram.com/smoothpips.official/");
    },
    facebook() {
      console.log("het werkt");
      window.open("https://www.facebook.com/Smoothpips");
    },
    linkedin() {
      console.log("het werkt");
      window.open("https://www.linkedin.com/company/smoothpips-official/");
    },
    website() {
      console.log("het werkt");
      window.open("https://smoothpipsofficial.com/");
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
  
};
</script>

<style lang="scss" scoped>
* {
}
.socialmedia {
  height: 100vh;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
}

.buttonsend {
  width: calc(100% - 40px);
  max-width: 310px;
  height: 40px;
  border: none;
  outline: none;
  margin: 0 auto;
  border-radius: 10px;
  font-size: 18px;
  display: block;
  margin-top: 50px;
  margin-bottom: 20px;
  color: white;
  position: relative;
  background-image: linear-gradient(to left, #0d8ffe, #58cafb);
}
.overlay {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100vw;
  background: none;
}
.kop1{
  margin-left: 35px;
  margin-bottom: 10px;
  font-size: 12px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    color: #58cafb;
    font-size: 29px;
    text-align: left;
    font-weight: bold;
    font-family: "Poppins";
    
}
.content {
  width: calc(100vw - 40px);
  height: 100%;
  align-content: left;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 10px;
  transition: all 0.3s ease;
  z-index: 2;
  background: white;
}
.list {
  display: default;
}
.logo {
  height: 50px;
  width: 300px;
  position: fixed;
  left: 20px;
  background: white;
  border: none;
}
.logo img {
  height: 100%;
  object-fit: contain;
  width: 100%;
}
.hallo {
  background: none;
  margin-top: 50px;
}


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
.hallo {
  
 word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
 -webkit-font-smoothing: antialiased;
 box-sizing: border-box;
  color: #363636;
  font-family: "Poppins";
 margin: 0 auto;
  width: calc(100% - 40px);
  max-width: 310px;
  margin-top: 20px;
  margin-left: 40px;
   .inputjoin {
    max-width: 300px;
    margin: 0 auto;
    margin-top: 10px;
    margin-left: -10px;
    height: 40px;
    position: relative;
    display: block;
    font-size: 15px;
    margin-bottom: 30px;

    border-radius: 10px;
    width: calc(100% - 0px);
    border: none;
    outline: none;
    -webkit-appearance: none;
    box-shadow: 2px 6px 8px rgb(13 143 254 / 10%);
      
}

}

.join {
  margin-left: 5px;
  color: black;
  font-size: 15px;
  text-align: left;
  margin-left: 35px;
  margin-right: 20px;
}
.title {
  margin-left: 5px;
  font-weight: bold;
  color: black;
  font-size: 20px;
  text-align: left;
  margin-left: 35px;
}
.buttonsend p {
  flex: 1;
  line-height: 40px;
  font-weight: 500px;
  font-size: 18px;
  box-shadow: 2px 8px 20px rgba(13, 143,254,.15)
  
}
.buttonsend svg {
  height: 80%;
  position: absolute;
  right: 20px;
  top: 4px;
  color: white;
}

.socials {
  margin-bottom: 30px;
  width: 100vw;
  height: 90px;
  display: flex;
  border: none;
  background: none;
  color: black;
  

  .icon {
    height: 50%;
    width: 100%;
    object-fit: contain;
    background: none;
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-left: 35px;
    margin-top: 20px;
    img {
      height: 30px;
      width: 30px;
      object-fit: contain;
    }
  }
}
</style>
