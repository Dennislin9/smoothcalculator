<template>
 
  <div class="socialmedia" :style="sidebarstyle">
   
    <Linkin />
    <Facebook />
    <Instagram/>

  </div>
</template>


<style >
.sidebar {
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  display: none;
}
.overlay {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100vw;
  background: none;
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
.logo img{
    height: 100%;
  object-fit: contain;
  width: 100%;
}
</style>
