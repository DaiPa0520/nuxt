<template>
  <div id="page">
    {{ip}} <br>
  <button type="button" @click="test()" class="btn btn-primary">Sign in</button>
  </div>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";
export default {
  components: { VueRecaptcha },
  data() {
    return {
      ip: "xx",
      dd: "666"
    };
  },
  created() {
    console.log(1235555);
  },
  async asyncData({ $axios }) {
    const ip = await $axios.$get("http://icanhazip.com");
    return { ip };
  },
  methods: {
    test: function() {
      let data = {
        type: 1,
        contacter: "g8g8",
        phone: "0930123456",
        email: "gg88@gmail.com",
        location: "taiwan",
        contact: "24:00"
      };
      const dd = this.$axios.$post("/advisory", data);
    },
    onSubmit: function() {
      this.$refs.invisibleRecaptcha.execute();
    },
    onVerify: function(response) {
      console.log("Verify: " + response);
    },
    onExpired: function() {
      console.log("Expired");
    },
    resetRecaptcha() {
      this.$refs.recaptcha.reset(); // Direct call reset method
    }
  }
};
</script>

<style>
</style>
