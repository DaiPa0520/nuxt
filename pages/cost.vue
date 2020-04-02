<template>
  <div id="page">
    <Headers></Headers>
    <section id="page">
      <BannersTilte :keys="keys"></BannersTilte>
      <!-- 上方兩隔 -->
      <section class="pt-5 pb-5">
        <div class="container">
          <div class="row align-items-center d-flex">
            <div class="col-md-6 text-center">
              <div class="pay">
                <SvgPay01  class="w-100" />
              </div>
              <h2>隨用隨付</h2>
              <h5>市面上的開店系統</h5>
              <h5>市面上的開店系統</h5>
            </div>
            <div class="col-md-6 text-center">
              <div class="pay">
                <SvgPay02   class="w-100" />
              </div>
              <h2>儲值消費</h2>
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
              <div class="cp">
                 <SvgCost01 class="w-100" />
              </div>
           
              <h5>市面上的開店系統</h5>
              <h5>市面上的開店系統</h5>
              <h5>市面上的開店系統</h5>
            </div>
            <div class="col-md-4 text-center">
              <div class="cp">
                 <SvgCost02 class="w-100" />
              </div>
              <h5>市面上的開店系統</h5>
              <h5>市面上的開店系統</h5>
              <h5>市面上的開店系統</h5>
            </div>
            <div class="col-md-4 text-center">
              <div class="cp">
                <SvgCost03 class="w-100" />
              </div>

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
      keys: "cost"
    };
  },
  created() {
    console.log(1235555);
  }
};
</script>


<style lang="scss"  scoped>
h2 {
  color: goldenrod;
}

.pay {
  width: 100%;
  height: 200px;
  // background-image: url(/images/index/pay_01.svg);
  // background-repeat: no-repeat;
  // background-size: contain;
  margin-bottom: 20px;
  &>*{
    height: 100%;
  }
}

.cp {
  margin: 10px 0px;
  height: 100px;
  & > * {
    height: 100%;
  }
}
</style>