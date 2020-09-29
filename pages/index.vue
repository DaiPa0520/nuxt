<template>
  <div id="page">
    <Headers></Headers>
    <section id="page">
      <Banners></Banners>
      <section class="title-1 pt-5 pb-5">
        <div class="container d-flex justify-content-center">
          <div class="row w-100 align-items-center d-flex column-reverse">
            <div class="text-left col-md-6">
              <div class="d-flex">
                <div class="index1"></div>
                <h4>完整報表分析</h4>
              </div>
              <h6>不是只有訂單報表看營業額而已</h6>
              <p>
                完整會員報表、商品追蹤報表、購物車未結帳
                <br />完整會員報表，可看細節查看每個會員的商品相關報表
                <br />完整訂單報表，可多訂單分析會員比例跟商品比例
                <br />完整活動報表，更了解消費者喜歡撿哪種便宜
              </p>
            </div>
            <div class="pb-3 col-md-6">
              <SvgIndex01 class="w-100" />
              <!-- <img class="w-100" src="/images/index/index_01.svg" alt /> -->
            </div>
          </div>
        </div>
      </section>
      <section class="title-2 pt-5 pb-5">
        <div class="container d-flex justify-content-center">
          <div class="row w-100 align-items-center d-flex column">
            <div class="pb-3 col-md-6">
              <SvgIndex02 class="w-100" />
              <!-- <img class="w-100" src="/images/index/index_02.svg" alt /> -->
            </div>
            <div class="text-left col-md-6">
              <div class="d-flex">
                <div class="index2"></div>
                <h4>多商店行銷</h4>
              </div>

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
      <section class="title-3 pt-5 pb-5">
        <div class="container d-flex justify-content-center">
          <div class="row w-100 align-items-center column-reverse">
            <div class="text-left col-md-6">
              <div class="d-flex">
                <div class="index3"></div>
                <h4>分潤機制結合</h4>
              </div>
              <h6>不是只有訂單報表看營業額而已</h6>
              <p>
                完整會員報表、商品追蹤報表、購物車未結帳
                <br />完整會員報表，可看細節查看每個會員的商品相關報表
                <br />完整訂單報表，可多訂單分析會員比例跟商品比例
                <br />完整活動報表，更了解消費者喜歡撿哪種便宜
              </p>
            </div>
            <div class="pb-3 col-md-6">
              <SvgIndex03 class="w-100" />
              <!-- <img class="w-100" src="/images/index/index_03.svg" alt /> -->
            </div>
          </div>
        </div>
      </section>
      <Footers></Footers>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss"  scoped>
.text-left {
  font-weight: bold;
}
h6 {
  color: #d57a66;
}
.index1 {
  width: 27px;
  height: 27px;
  background-image: url(/images/icon/index_01.svg);
  background-repeat: no-repeat;
  background-size: contain;
}
.index2 {
  width: 27px;
  height: 27px;
  background-image: url(/images/icon/index_02.svg);
  background-repeat: no-repeat;
  background-size: contain;
}
.index3 {
  width: 27px;
  height: 27px;
  background-image: url(/images/icon/index_03.svg);
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
