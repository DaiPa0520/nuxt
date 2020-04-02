<template>
  <div id="page">
    <Headers></Headers>
    <section id="page">
      <BannersTilte :title="title" :desc="desc"></BannersTilte>
      <section class="pt-5 pb-5">
        <div class="container">
          <div class="row align-items-center d-flex">
            <div class="col-md-6 text-center">
              <h5>市面上的開店系統</h5>
              <img
                class="w-50"
                src="/images/01.png"
                data-aos="zoom-in"
                data-aos-delay="300"
                alt
              />
            </div>
            <div class="col-md-6 text-center">
              <h5>市面上的開店系統</h5>
              <img
                class="w-50"
                src="/images/02.png"
                data-aos="zoom-in"
                data-aos-delay="300"
                alt
              />
            </div>
          </div>
        </div>
      </section>
      <!-- 中間 -->
      <section class="pt-5 pb-5" style="background: #f1f1f1">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-sm-6 col-md-3 text-center">
              <DialogBox  :title="'商品系統'" />
              <img
                class="w-50 pb-2"
                src="/images/13.svg"
                data-aos="zoom-in"
                data-aos-delay="300"
                alt
              />
              <p>無數量限制</p>
              <p>可標籤管理</p>
              <p>可批次匯入匯出</p>
            </div>
            <div class="col-sm-6 col-md-3 text-center">
              <DialogBox  :title="'商品系統'" />
              <img
                class="mr-5 mr-md-5 w-50 pb-2"
                src="/images/14.svg"
                data-aos="zoom-in"
                data-aos-delay="300"
                alt
              />
              <p>無數量限制</p>
              <p>可標籤管理</p>
              <p>可批次匯入匯出</p>
            </div>
            <div class="col-sm-6 col-md-3 text-center">
              <DialogBox  :title="'商品系統'" />
              <img
                class="w-50 pb-2"
                src="/images/15.svg"
                data-aos="zoom-in"
                data-aos-delay="500"
                alt
              />
              <p>無數量限制</p>
              <p>可標籤管理</p>
              <p>可批次匯入匯出</p>
            </div>
            <div class="col-sm-6 col-md-3 text-center">
              <DialogBox  :title="'商品系統'" />
              <img
                class="w-50 pb-2"
                src="/images/16.svg"
                data-aos="zoom-in"
                data-aos-delay="600"
                alt
              />
              <p>無數量限制</p>
              <p>可標籤管理</p>
              <p>可批次匯入匯出</p>
            </div>
          </div>
        </div>
      </section>
      <section class="pt-5 pb-5">
        <h3 class="text-center">商店系統</h3>
        <h6 class="text-center">可使用多種商店類型</h6>
        <div class="container">
          <div class="row align-items-center">
            <div class="store text-center col-md-6 pt-3 pb-3">
              <h6>一頁式商店</h6>
              <h6>One-Page-Web</h6>
              <img
                class="w-50"
                src="/images/17.svg"
                data-aos="zoom-in"
                data-aos-delay="300"
                alt
              />
            </div>
            <div class="store text-center col-md-6 pt-3 pb-3">
              <h6>網路商店</h6>
              <h6>Online Shop</h6>
              <img
                class="w-50"
                src="/images/18.svg"
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
  data() {
    return {
      title: "系統簡介",
      desc: "系統簡介balabalabalabala"
    };
  },
  created() {
    console.log(1235555);
  }
};
</script>

