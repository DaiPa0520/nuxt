<template>
  <section class="pb-5" v-if="map[keys]">
    <!-- title -->
    <div class="d-flex justify-content-center align-items-center p-5">
      <div class="icon" :class="keys?  keys : '' "></div>
      <h5 class="text-center">{{map[keys].title}}</h5>
    </div>

    <div class="container">
      <div class="panel-group row mb-3" id="accordion" role="tablist" aria-multiselectable="true">
        <div v-for="(item, index) in list" class="panel panel-default col-md-4">
          <div class="panel-heading" role="tab" id>
            <h4 class="panel-title">
              <a
                class="collapsed"
                role="button"
                data-toggle="collapse"
                data-parent="#accordion"
                :href="`#${keys}${index}`"
                aria-expanded="false"
                :aria-controls="`${keys}${index}`"
              >{{item.name}}</a>
            </h4>
          </div>
          <div
            :id="`${keys}${index}`"
            class="panel-collapse collapse"
            role="tabpanel"
            aria-labelledby
          >
            <div class="panel-body">{{item.desc}}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "",
  props: {
    list: {
      type: [Array],
      default: function() {
        return {};
      }
    },
    keys: {
      type: [String],
      default: function() {
        return "products";
      }
    }
  },
  data() {
    // 資料
    return {
      src: "", //追蹤 store用
      map: {
        products: { icon: "", title: "產品相關問題" },
        operation: { icon: "", title: "營運相關問題" },
        tech: { icon: "", title: "技術相關問題" }
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.icon {
  height: 28px;
  width: 28px;
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 5px;
  &.products {
    background-image: url(/images/icon/question_01.svg);
  }
  &.operation {
    background-image: url(/images/icon/question_02.svg);
  }
  &.tech {
    background-image: url(/images/icon/question_03.svg);
  }
}
.panel-title > a,
.panel-title > a:active {
  padding: 15px 33px 15px 15px;
}
section:nth-child(odd) {
  background-color: #e2dede;
}
</style>
