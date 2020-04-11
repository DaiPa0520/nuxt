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
                <div class="row">
                  <div class="form-group col-sm-4">
                    <select
                      class="custom-select"
                      :class="{ 'is-invalid' : validation.hasError('type')}"
                      v-model="type"
                    >
                      <option value="1">公司名</option>
                      <option value="2">個人戶</option>
                    </select>
                    <div class="invalid-feedback d-block">{{ validation.firstError('type') }}</div>
                  </div>
                  <div v-if="type == 1" class="form-group col-sm-8">
                    <input
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid' : validation.hasError('company')}"
                      v-model="company"
                      placeholder="公司名稱"
                    />
                    <div class="invalid-feedback d-block">{{ validation.firstError('company') }}</div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid' : validation.hasError('contacter')}"
                      v-model="contacter"
                      placeholder="聯絡人"
                    />
                    <div class="invalid-feedback d-block">{{ validation.firstError('contacter') }}</div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid' : validation.hasError('phone')}"
                      v-model="phone"
                      placeholder="電話"
                    />
                    <div class="invalid-feedback d-block">{{ validation.firstError('phone') }}</div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid' : validation.hasError('email')}"
                      v-model="email"
                      placeholder="電子郵件"
                    />
                    <div class="invalid-feedback d-block">{{ validation.firstError('email') }}</div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid' : validation.hasError('location')}"
                      v-model="location"
                      placeholder="所在地"
                    />
                    <div class="invalid-feedback d-block">{{ validation.firstError('location') }}</div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col">
                    <select
                      class="custom-select"
                      :class="{ 'is-invalid' : validation.hasError('contact')}"
                      v-model="contact"
                    >
                      <option selected>方便聯絡時間</option>
                      <option value="09:00">上午 09:00</option>
                      <option value="12:00">中午 12:00</option>
                      <option value="21:00">下午 21:00</option>
                    </select>
                    <div class="invalid-feedback d-block">{{ validation.firstError('contact') }}</div>
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col" >
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
                    <button type="button" @click="submit" class="btn btn-primary" :class="{ 'btn-secondary disabled' : google_verify==''}" :disabled="google_verify==''" >送出</button>
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
      type: 1,
      company: "",
      contacter: "",
      phone: "0930123456",
      email: "gg88@gmail.com",
      location: "taiwan",
      contact: "",
      bank_code: "123", //一定要三格
      last_code: "66666", //一定要五格
      google_verify: ""
    };
  },
  created() {
    console.log(1235555);
  },
  validators: {
    contacter: function(value) {
      return this.$Validator.value(value).required();
    },
    phone: function(value) {
      return this.$Validator
        .value(value)
        .digit()
        .length(10);
    },
    email: function(value) {
      return this.$Validator
        .value(value)
        .required()
        .email();
    },
    location: function(value) {
      return this.$Validator.value(value).required();
    },
    contact: function(value) {
      return this.$Validator.value(value).required();
    },
    "company ,type": function(company, type) {
      if (type == 1) {
        return this.$Validator.value(company).required();
      }
    },
    google_verify: function(value) {
      return this.$Validator.value(value).required();
    }
  },
  async asyncData({ $axios }) {
    const ip = await $axios.$get("http://icanhazip.com");
    return { ip };
  },
  methods: {
    submit: function() {
      this.$validate().then(function(success) {
        if (success) {
          console.log("Validation succeeded!");
        } else {
          alert("請確認表單資訊是否正確!!");
        }
      });
    },
    sendRegisted: function() {
      let data = {
        type: this.type,
        contacter: this.contacter,
        phone: this.phone,
        email: this.email,
        location: this.location,
        contact: this.contact
      };
      if (this.type == 1) data.company = this.company;
      const dd = this.$axios.$post("/advisory", data);
    },
    onSubmit: function() {
      this.$refs.invisibleRecaptcha.execute();
    },
    onVerify: function(response) {
      this.google_verify = response;
      console.log("Verify: " + response);
    },
    onExpired: function() {
      this.google_verify = "";
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
