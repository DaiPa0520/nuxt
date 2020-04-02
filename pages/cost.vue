<template>
  <div id="page">
    <Headers></Headers>
    <section id="page">
      <BannersTilte :title="title" :desc="desc"></BannersTilte>
      <!-- 上方兩隔 -->
      <section class="pt-5 pb-5">
        <div class="container">
          <div class="row align-items-center d-flex">
            <div class="col-md-6 text-center">
              <img
                class="w-50"
                src="~/assets/images/01.png"
                data-aos="zoom-in"
                data-aos-delay="300"
                alt
              />
              <h2>市面上的開店系統</h2>
              <h5>市面上的開店系統</h5>
              <h5>市面上的開店系統</h5>
            </div>
            <div class="col-md-6 text-center">
              <img
                class="w-50"
                src="~/assets/images/01.png"
                data-aos="zoom-in"
                data-aos-delay="300"
                alt
              />
              <h2>市面上的開店系統</h2>
              <h5>市面上的開店系統</h5>
              <h5>市面上的開店系統</h5>
            </div>
          </div>
        </div>
      </section>

      <!-- 中間左右表格 -->
      <section class="pt-5 pb-5" style="background: #f1f1f1">
        <div class="container d-flex justify-content-center">
          <div class="row align-items-center d-flex column">
            <div class="report-img pb-3 col-md-6">
              <img class="w-100" src="~/assets/images/02.png" alt />
            </div>
            <div class="report-txt text-left col-md-6">
              <h4>多商店行銷</h4>
              <h6>
                想多開幾種商店?
                <br />想多開幾個商店?
                <br />隨意～
              </h6>
              <p>
                一頁式購物或是品牌網站數量無上限
                <br />除了各商店後台，還有總後台讓你掌握所有商店通路
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="pt-5 pb-5" style="background: #feffab">
        <div class="container d-flex justify-content-center">
          <div class="row align-items-center d-flex column-reverse">
            <div class="report-txt text-left col-md-7">
              <h4>完整報表分析</h4>
              <h6>不是只有訂單報表看營業額而已</h6>
              <p>
                完整會員報表、商品追蹤報表、購物車未結帳
                <br />完整會員報表，可看細節查看每個會員的商品相關報表
                <br />完整訂單報表，可多訂單分析會員比例跟商品比例
                <br />完整活動報表，更了解消費者喜歡撿哪種便宜
              </p>
            </div>
            <div class="report-img pb-3 col-md-5">
              <img class="w-100" src="~/assets/images/01.png" alt />
            </div>
          </div>
        </div>
      </section>
      <section class="pt-5 pb-5" style="background: #f1f1f1">
        <div class="container d-flex justify-content-center">
          <div class="row align-items-center d-flex column">
            <div class="report-img pb-3 col-md-6">
              <img class="w-100" src="~/assets/images/02.png" alt />
            </div>
            <div class="report-txt text-left col-md-6">
              <h4>多商店行銷</h4>
              <h6>
                想多開幾種商店?
                <br />想多開幾個商店?
                <br />隨意～
              </h6>
              <p>
                一頁式購物或是品牌網站數量無上限
                <br />除了各商店後台，還有總後台讓你掌握所有商店通路
              </p>
            </div>
          </div>
        </div>
      </section>
 
      <!-- 下方三格 -->
      <section class="pt-5 pb-5">
        <div class="container">
          <div class="row align-items-center d-flex">
            <div class="col-md-4 text-center">
              <img
                class="w-50"
                src="~/assets/images/01.png"
                data-aos="zoom-in"
                data-aos-delay="300"
                alt
              />
              <h5>市面上的開店系統</h5>
              <h5>市面上的開店系統</h5>
              <h5>市面上的開店系統</h5>
            </div>
            <div class="col-md-4 text-center">
              <img
                class="w-50"
                src="~/assets/images/01.png"
                data-aos="zoom-in"
                data-aos-delay="300"
                alt
              />
              <h5>市面上的開店系統</h5>
              <h5>市面上的開店系統</h5>
              <h5>市面上的開店系統</h5>
            </div>
            <div class="col-md-4 text-center">
              <img
                class="w-50"
                src="~/assets/images/01.png"
                data-aos="zoom-in"
                data-aos-delay="300"
                alt
              />
              <h5>市面上的開店系統</h5>
              <h5>市面上的開店系統</h5>
              <h5>市面上的開店系統</h5>
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
  loading: false,
  data() {
    return {
      title: "計畫費用",
      desc: "計畫費用balabalabalabala"
    };
  },
  created() {
    console.log(1235555);
  }
};
</script>

<style scoped >
h2 {
  color: goldenrod;
}
</style>
