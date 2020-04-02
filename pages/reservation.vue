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
                src="~/assets/images/01.png"
                data-aos="zoom-in"
                data-aos-delay="300"
                alt
              />
            </div>
            <!-- 右 -->
            <div class="col-md-6 text-center">
              <form>
                <div class="form-group row">
                  <div class="col-sm-4">
                    <select class="custom-select" id>
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div class="col-sm-8">
                    <input type="text" class="form-control" placeholder="Last name" />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <input type="text" class="form-control" placeholder="First name" />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <input type="text" class="form-control" placeholder="First name" />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <input type="text" class="form-control" placeholder="First name" />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <select class="custom-select" id>
                      <option selected>Choose...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
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
                    <button type="submit" class="btn btn-primary">Sign in</button>
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
  created() {
    console.log(1235555);
  },
  methods: {
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
