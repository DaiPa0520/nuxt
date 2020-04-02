<template>
  <div id="page">
    <Headers></Headers>
    <section id="page">
      <SliderBanner></SliderBanner>
      <!-- 下方表單 -->
      <section class="pt-5 pb-5">
        <div class="container">
          <div class="row align-items-center d-flex">
            <!-- 左 -->
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
                  <div class="col-sm-2">
                    <button type="button"  @click="test()" class="btn btn-primary">Sign in</button>
                  </div>
                </div>
              </form>
            </div>
            <!-- 右 -->

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
          </div>
        </div>
      </section>
      <Footers></Footers>
    </section>
  </div>
</template>

<script>
export default {
  created() {
    console.log(1235555);
  },
  methods: {
    test: function() {
      let data = {
        type: 1,
        contacter: "g8g8",
        phone: "0930123456",
        email: "gg88@gmail.com",
        location: "taiwan",
        contact: "24:00",
        bank_code: "123", //一定要三格
        last_code: "66666" //一定要五格
      };
      const dd = this.$axios.$post("/application", data);
    }
  }
};
</script>

<style>
</style>
