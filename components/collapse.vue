<template>
  <section class="pt-5 pb-5" v-if="map[keys]" >
    <h5 class="text-center">{{map[keys].title}}</h5>
    <div class="container">
      <div class="panel-group row mb-3" id="accordion" role="tablist" aria-multiselectable="true">
        <div v-for="(item, index) in list" class="panel panel-default col-md-4">
          <div class="panel-heading" role="tab" id="">
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
            aria-labelledby=""
          >
            <div class="panel-body">
              {{item.desc}}
            </div>
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
        return 'products';
      }
    }
  },
  data() {
    // 資料
    return {
      src: "", //追蹤 store用
      map:{
        'products':{ icon:'' ,  title:'產品相關問題'  },
        'operation':{ icon:'' ,  title:'營運相關問題'  },
        'tech':{ icon:'' ,  title:'技術相關問題'  },
      }
    };
  }
};
</script>
<style scoped>
section:nth-child(odd){
  background-color:#e2dede;
}
</style>
