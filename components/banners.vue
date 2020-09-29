<template>
  <section class="banner">
    <div class="title">
      <span>掌握數據，</span>
      <br />
      <span>&nbsp;&nbsp;&nbsp;&nbsp;距離更近</span>
      <br />
      <span class="text2">讓你貼近消費者的心更近</span>
      <br />
    </div>
    <div class="banner d-flex justify-content-center align-items-center">
      <img class="w-100" src="/images/index/banner_01.svg" alt data-aos="zoom-in" />
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
<style lang="scss" scoped>
.title {
  position: absolute;
  z-index: 99;
  top: 17vh;
  left: 17vw;
  font-size: 2.5rem;
  font-family: "MarkPro-Bold", "NotoSansCJKtc-Bold";
  font-weight: bold;
  & .text2 {
    font-size: 23px;
  }
  @media (max-width: 767px) {
    top: 12vh;
    left: 12vw;
    font-size: 1rem;

    & .text2 {
      font-size: 10px;
    }
  }
}
</style>