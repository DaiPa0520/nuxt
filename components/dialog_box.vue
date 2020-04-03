<template>
  <div class="toast-title w-50 pb-2" data-aos="zoom-in" data-aos-delay="300">
    <span>{{title}}</span>
    <!-- <img class="mr-5 mr-md-5 w-100 pb-2" src="/images/00.svg" width="200" /> -->
  </div>
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
<style scoped>
.toast-title {
  height: 90px;
  width: 90px;
  padding: 1.6em;
  display: flex;
  background-image: url(/images/icon/index_00.svg);
  background-repeat: no-repeat;
  background-size: contain;
}
.toast-title > span {
  color: white;
  white-space: nowrap;
  font-size: x-small;
}
.toast-title > img {
  visibility: hidden;
}
</style>
