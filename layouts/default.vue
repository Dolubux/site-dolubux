<template>
  <div class="main">
    <NavBar />
    <slot />
    <FooterEnd/>
  </div>
</template>

<script>
import NavBar from '~/components/SectionPages/NavBar.vue'
import FooterEnd from '~/components/SectionPages/Footer.vue'
export default {
  components: {
    NavBar,
    FooterEnd
  },
  data() {
    return
     {}
  },
  mounted() {},
  methods: {},
}
</script>

<style>
body {
  font-family: 'Figtree', 'Jost',  sans-serif !important;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: inherit !important;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

/* Change the white to any color */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px white inset !important;
}
</style>
