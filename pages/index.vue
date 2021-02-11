<template>
  <body>
    <div class="kleding">
      <img
        src="https://lh3.googleusercontent.com/proxy/yEfqmBf5t8K9EKC7p5ZIR6QvyM9oxQH18WG2iQxIHRo9SgSl3m0pPCHFn4BPTQLJZjew33akH0OydjsGQzZQo7-6SCIevrm1KdiQI27ZTRewq_0jQXl5CMv9a7AyMUiRB46DjlAYEFOq"
        alt=""
      />
      <p>&euro;25.- Million</p>
      <button class="buy" v-on:click="buy">kopen</button>
    </div>

    <div class="jordan">
      <img
        src="https://lh3.googleusercontent.com/proxy/VQLQDKQHv7hvafNNyO3Jyxs18JWGhLIx_MqCkdTHDAoZt6SnPkNASryO0S4pYvHfLRcC-ZRIg4RtEdpI9fbQD-ACR_-JwzivRECrOS7n8M0"
        alt=""
      />
      <p>&euro;30.- Million</p>
      <button class="buy1" v-on:click="buy1">kopen</button>
    </div>
  </body>
</template>


<script>
import VanillaTilt from "vanilla-tilt";
export default {
  mounted() {
    const element = document.querySelector(".kleding");
    VanillaTilt.init(element, {
      scale: 1.1,
    });
    const jordan = document.querySelector(".jordan");
    VanillaTilt.init(jordan, {
      scale: 1.1,
    });
    console.log("werkt");
  },
  methods: {
    buy() {
      alert("You just brought Kobe Byrant");
      console.log("werkt");
    },
    buy1() {
      alert("You just brought Micheal Jordan !");
      console.log("werkt");
    },
  },
};
</script>

<style scoped>
body {
  width: 100vw;
  height: 100vh;
  position: absolute;
  text-align: center;
}
.buy {
  height: 30px;
  width: 150px;
  margin: 0 auto;
  margin-top: 2px;
  border-radius: 20px;
  font-weight: bold;
  background: linear-gradient(30deg, black, black);
  border: none;
  display: block;
  color: white;
  outline: none;
  border: none;
  display: block;
  transform: translateZ(100px);
}
.buy1 {
  height: 30px;
  width: 150px;
  margin: 0 auto;
  border-radius: 20px;
  margin-top: 2px;
  font-weight: bold;
  background: linear-gradient(30deg, black, black);
  border: none;
  display: block;
  color: white;
  outline: none;
  border: none;
  display: block;
  transform: translateZ(100px);
}
.kleding {
  min-height: 500px;
  float: left;
  width: 250px;
  border-radius: 10px;
  margin: 10px;
  margin-top: 50px;
  background: linear-gradient(30deg, purple, yellow);
  transform-style: preserve-3d;
  transform: perspective(1000px);
}
.jordan {
  min-height: 500px;
  width: 250px;
  float: left;
  border-radius: 10px;
  margin: 30px;
  margin-top: 50px;
  background: linear-gradient(45deg, red, black);
  transform-style: preserve-3d;
  transform: perspective(1000px);
}
.kleding img {
  margin-top: 50px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  width: 90%;
  margin-bottom: 1px;
  transform: translateZ(100px);
}

.jordan img {
  margin-top: 50px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  width: 90%;
  margin-bottom: 1px;
  transform: translateZ(100px);
}
.kleding p {
  margin-top: 5px;
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
  color: white;
}
.jordan p {
  margin-top: 5px;
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
  color: white;
}
</style>