<template>
  <div id="page">
    <Headers></Headers>
    <section id="page">
      <Banners></Banners>
      <!-- 下方表單 -->
      <section class="pt-5 pb-5">
        <div class="container">
          <div class="row align-items-center d-flex">
            <!-- 左 -->
            <div class="col-md-6 text-center">
              <h5>市面上的開店系統</h5>
              <img
                class="w-50"
                src="/images/index/advisory.svg"
                data-aos="zoom-in"
                data-aos-delay="300"
                alt
              />
            </div>
            <!-- 右 -->
            <div class="col-md-6 text-center pt-5">
              <form>
                <div class="form-group row">
                  <div class="form-group col-sm-4">
                    <select class="custom-select" id>
                      <option selected>選擇類型</option>
                      <option value="1">公司名</option>
                      <option value="2">個人戶</option>
                    </select>
                  </div>
                  <div class="form-group col-sm-8">
                    <input type="text" class="form-control" placeholder="公司名稱" />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <input type="text" class="form-control" placeholder="聯絡人" />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <input type="text" class="form-control" placeholder="電話" />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <input type="text" class="form-control" placeholder="電子郵件" />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <input type="text" class="form-control" placeholder="所在地" />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <select class="custom-select" id>
                      <option selected>方便聯絡時間</option>
                      <option value="1">上午 09:00</option>
                      <option value="2">中午 12:00</option>
                      <option value="3">下午 21:00</option>
                    </select>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <vue-recaptcha
                      ref="recaptcha"
                      @verify="onVerify"
                      @expired="onExpired"
                      sitekey="6LdrXSkTAAAAACyXjkDFu9EuHa1_dOj5Y1H6m0Hh"
                    ></vue-recaptcha>
                    <!-- <button @click="resetRecaptcha">Reset ReCAPTCHA</button> -->
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-sm-2">
                    <button type="button" @click="test()" class="btn btn-primary">送出</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footers></Footers>
    </section>
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
    // const dd = await $axios.$post('https://ingress.4ding.site/advisory',data)
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
