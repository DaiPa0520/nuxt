<template>
  <div id="page">
   SSR: {{ip}} <br>
   SPA: {{ip2}}

  </div>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";
export default {
  components: { VueRecaptcha },
  data() {
    return {
      ip: "",
      ip2: ''
    };
  },
  mounted:async function() {
   await  this.test()
  },
  async asyncData({ $axios }) {
    const ip = await $axios.$get("http://icanhazip.com");
    return { ip };
  },
  methods: {
    test:async function() {
     let ip =   "123123"
     console.log("ip",ip)
     this.ip2 = ip 
    },
  }
};
</script>

<style>
</style>
