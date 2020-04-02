<template>
  <section class="banner">
    <div class="text-center lt-banner pt-4 pb-4">
      <div class="title d-flex justify-content-center align-items-center">
        <div class="icon cost" ></div>
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
      src: "", //追蹤 store用,
      list: {
        introduction: {
          name: "系統簡介",
          desc: "introdxxxxxxxxxx",
        }
      }
    };
  }
};
</script>
<style lang="scss"  scoped>
.lt-banner {
  background-image: url(/images/banner/orange.png);
  background-repeat: no-repeat;
  background-size: cover;
}
h4 {
  font-weight: bold;
}
.banner h6 {
  color: white;
}
.title > .icon {
  height: 28px;
  width: 28px;
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 5px;
  &.introduction {
    background-image: url(/images/icon/title_01.svg);
  }
  &.cost {
    background-image: url(/images/icon/title_02.svg);
  }
  &.question {
    background-image: url(/images/icon/title_03.svg);
  }
}
</style>