<template>
  <div class="tabs">
    <nuxt-link class="navigation-button" tag="button" to="/compounding">
      <svg
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
        ></path>
      </svg>
    </nuxt-link>

    <nuxt-link class="navigation-button" tag="button" to="/">
      <svg
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </nuxt-link>

    <nuxt-link class="navigation-button" tag="button" to="/exchange"
      ><svg
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"
        ></path>
      </svg>
    </nuxt-link>

    <nuxt-link class="navigation-button" tag="button" to="/socialmedia"
      ><svg
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
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        ></path></svg
    ></nuxt-link>
  </div>
</template>
<script>
export default {
  methods: {
    app() {
      // alert('adjashjasdjkh')
      this.$router.push("/Sidebar");
    },

    openmodal() {
      // alert('clicked')
      console.log(popup);
      popup.openModal();
    },
  },
};
</script>
<style lang="scss" scoped>
.tabs {
  min-height: 60px;
  z-index: 9999;
  width: 100%;
  // max-width: 500px;
  display: flex;
  background: black;
  backdrop-filter: blur(15px);
  box-sizing: border-box;
  position: fixed;
  bottom: 0;

  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  button {
    flex: 1;
    background: none;
    color: white;
    outline: none;
    min-height: 50px;
    border: none;
    text-align: center;
    svg {
      height: 25px;
      margin: 0 auto;
    }
  }
}
@media screen and (max-width: 322px) {
  .tabs {
    max-height: 70px;
  }
}
@media screen and (max-width: 376px) {
  .tabs {
    max-height: 70px;
  }
}
// @media screen and (max-width: 414px) {
//     .tabs {
//         max-height: 60px;
//     }
// }
@media screen and (max-width: 414px) {
  .tabs {
    max-height: 70px;
  }
}
</style>
