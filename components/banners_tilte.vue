<template>
  <section class="banner">
    <div class="text-center lt-banner pt-4 pb-4">
      <div class="title">
        <div class="icon" ></div>
        <h4>{{title}}</h4>
      </div>
      <h6>{{desc}}</h6>
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
<style  scoped>
.lt-banner {
  background-image: url(/images/24.svg);
}
h4 {
  font-weight: bold;
}
.banner h6 {
  color: white;
}
.title > .icon {
  height: 65px;
  display: flex;
  background-image: url(/images/01.svg);
  background-repeat: no-repeat;
}
</style>