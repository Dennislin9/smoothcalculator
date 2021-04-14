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
          fill-rule="evenodd"
          d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
          clip-rule="evenodd"
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

    <nuxt-link class="navigation-button" tag="button" to="/time"
      ><svg
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
          clip-rule="evenodd"
        ></path>
      </svg>
      </nuxt-link
    >

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
  mounted() {
    console.log("tabs here");
  },
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
  height: 100px;
  z-index: 9999;
  width: 100%;
  // max-width: 500px;
  display: flex;
  background: #ffffffcc;
  backdrop-filter: blur(15px);
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  button {
    flex: 1;
    background: none;
    outline: none;
    padding-bottom: 20px;
    border: none;
    text-align: center;
    svg {
      height: 25px;
      margin: 0 auto;
    }
  }
  &.profile {
    background: #f8dd44cc;
  }
  &.scanner {
    background: none !important;
    backdrop-filter: none;
    filter: invert(100%);
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
