<template>
  <footer class="footer">
    <div class="footer-link pt-3 pb-3 h-100">
      <div class="container d-flex justify-content-between">
        <div class="row w-100">
          <div class="col-sm-6 col-lg-1 pb-3 d-flex">
            <div class="icon" ></div>
            <div>關於我們xx</div>
          </div>
          <div class="col-sm-6 col-lg-2 pb-3">
            <div class="symbol">
              關於我們xxxxxxxxxxxxxxxxxxxxxx
              <br />xxxxxxxxxxxxxxxxxxxxxxx
            </div>
          </div>
          <div class="col-sm-6 col-lg-1 pb-3 d-flex">
            <div class="icon" ></div>
            <div>關於我們xx</div>
          </div>
          <div class="col-sm-6 col-lg-2 pb-3">
            <div class="symbol">
              關於我們xxxxxxxxxxxxxxxxxxxxxx
              <br />xxxxxxxxxxxxxxxxxxxxxxx
            </div>
          </div>
          <div class="col-sm-6 col-lg-6 pb-3 d-flex justify-content-end">
            <img src="/images/logo/logo_02.svg" class="h-75" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="footer-info pt-3 pb-3">
      <div class="container">
        <div class="row w-100">
          <div class="col-sm-6 col-lg-3 pb-3">服務時間：週一至五</div>
          <div class="col-sm-6 col-lg-2 pb-3">022570-2555</div>
          <div class="col-sm-6 col-lg-2 pb-3">servic@gmail.com</div>
          <div class="col-sm-6 col-lg-3 pb-3">2019四叮股股份有限公司</div>
          <div class="col-sm-6 col-lg-2 pb-3">隱私權政策</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.symbol {
  border-left: 1px solid #cbc7c7;
  word-wrap: break-word;
  padding-left: 1rem;
}
.footer-link {
  background-color: rgb(238, 238, 238);
}

.footer-link a {
  color: #333;
}

.footer-info {
  background-color: #333;
}

.footer-info {
  color: #fff;
  font-size: 14px;
}

.icon {
  height: 16px;
  background-image: url(/images/icon/bottom_01.svg);
  background-repeat: no-repeat;
  background-size: contain;
  width: 20px;
  margin: 5px 0px 0px 0px;
}
</style>