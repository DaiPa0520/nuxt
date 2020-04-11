<template>
  <div id="page">
    <Headers></Headers>
    <section id="page">
      <SliderBanner></SliderBanner>
      <!-- 下方表單 -->
      <section class="pb-5">
        <div class="container">
          <div class="row align-items-center d-flex">
            <!-- 左 -->
            <div class="col-md-6 text-center pt-5">
              <form>
                <div class="row">
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
                  <div class="col-sm-2">
                    <button type="button" @click="test()" class="btn btn-primary">送出</button>
                  </div>
                </div>
              </form>
            </div>
            <!-- 右 -->

            <div class="col-md-6 text-center">
              <h5>市面上的開店系統</h5>
              <SvgPay02   class="w-50" />
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
