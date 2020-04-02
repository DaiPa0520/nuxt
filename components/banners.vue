<template>
  <section class="banner">
    <div class="banner d-flex justify-content-center align-items-center">
      <img class="w-100" src="~/assets/images/banner.jpg" alt data-aos="zoom-in" />
    </div>
  </section>
</template>
<script>
export default {
  name: "",
  props: {
    title: {
      type: [String],
      default: function() {
        return "xxxx";
      }
    },
    desc: {
      type: [String],
      default: function() {
        return "xxxxxxxxxxxxxxxxx";
      }
    }
  },
  data() {
    // 資料
    return {
      src: "" //追蹤 store用
    };
  }
};
</script>