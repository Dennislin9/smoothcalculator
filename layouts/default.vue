<template>
  <div>
    <NavigatieBar />
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
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
</style>
