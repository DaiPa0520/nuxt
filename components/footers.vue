<template>
  <footer class="footer">
    <div class="footer-link pt-3 pb-3 p-5 h-100">
      <div class="d-flex justify-content-between">
        <div class="row w-100">
          <div class="row col-sm-6 col-lg-4 pb-3">
            <div class="col-md-3 aboutus">
              <div class="icon"></div>關於我們
            </div>
            <div
              class="col-md-9 symbol"
            >Starbucks™ Shared Planet.™ 星巴克共愛地球™ 計劃是我們對品牌的承諾，從採購咖啡豆的源頭開始，重視與關注減少環境污染的議題，同時參與產地社區的建設與服務。</div>
          </div>

          <div class="row col-sm-6 col-lg-4 pb-3">
            <div class="col-md-3 aboutus">
              <div class="icon"></div>關於我們
            </div>
            <div
              class="col-md-9 symbol"
            >
              <div class="d-flex w-100 flex-wrap" >
                <span class="text-center w-50 pb-3" >合作機會</span>
                <span class="text-center w-50 pb-3">預約諮詢</span>
                <span class="text-center w-50 pb-3">幫助中心</span>
                <span class="text-center w-50 pb-3">開通帳號</span>
                <span class="text-center w-50 pb-3">登入</span>
              </div>
            
            </div>
          </div>

          <div class="col-sm-6 col-lg-4 pb-3 d-flex justify-content-end">
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

<style lang="scss" scoped>
.aboutus {
  min-width: 7rem;
  padding-right: 1rem;
  display: flex;
}
.symbol {
  border-left: 6px solid #4d4c4c;
  word-wrap: break-word;
  padding-left: 1rem;
  word-break: break-word;
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