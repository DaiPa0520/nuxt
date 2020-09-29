<template>
  <header class="fixed-top">
    <div class="nav-wrapper h-100">
      <nav class="navbar navbar-expand-lg navbar-light bg-light h-100">
        <!-- <a class="navbar-brand" href="/">LOGOxxx</a> -->
        <img src="/images/logo/logo_01.svg" class="h-75" alt />
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse justify-content-end collapse" id="navbarNavDropdown" style>
          <ul class="navbar-nav">
            <li v-for=" (i,k) in left" class="nav-item">
              <n-link :to="i.link" class="btn w-100" tag="a" exact-active-class>{{i.title}}</n-link>
            </li>
            <span class="symbol" style></span>
            <li class="nav-item">
              <n-link to="/reservation" tag="a" class="w-100 btn btn-reservation">預約諮詢</n-link>
            </li>
            <li v-for=" (i,k) in right" class="nav-item">
              <n-link :to="i.link" class="btn w-100" tag="a" exact-active-class>{{i.title}}</n-link>
            </li>
            <li class="nav-item">
              <n-link
                to="/login"
                tag="div"
                class="w-100 btn d-flex justify-content-center align-items-center"
              >
                <div class="login"></div>
                <div>登入</div>
              </n-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      left: [
        { title: "優勢特色", link: "/home" },
        { title: "系統簡介", link: "/introduction" },
        { title: "計畫費用", link: "/cost" },
        { title: "常見問題", link: "/question" }
      ],
      right: [
        { title: "開通帳號", link: "/registered" }
        // { title: "登入", link: "/login" }
      ]
    };
  }
};
</script>
<style scoped>
header {
  height: 60px;
}

li {
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  margin-bottom: 10px;
}

.btn.btn-reservation {
  color: #fff;
  background-color: #7a7a7a;
  border-color: #888888;
  /* box-shadow: -4px 3px 3px #888888; */
}
.btn.actived {
  background: #f68d00;
  color: white !important;
  border-radius: 0.25rem;
  box-shadow: -4px 3px 3px #888888;
}
span.symbol {
  border-left: 1px solid #cbc7c7;
  margin-right: 1.5rem;
  margin-left: 1.5rem;
}
.login {
  height: 16px;
  background-image: url(/images/icon/title_01.svg);
  background-repeat: no-repeat;
  background-size: contain;
  width: 20px;
  margin: 2px 0px 0px 0px;
}
</style>>

</style>