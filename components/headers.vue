<template>
  <header class="fixed-top">
    <div class="nav-wrapper">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">LOGOxxx</a>
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
            <li  v-for=" (i,k) in left" class="nav-item" >
              <n-link :to="i.link" class="nav-link" exact-active-class >{{i.title}}</n-link>
            </li>
            <n-link to="/reservation" tag="button" class="btn btn-primary" >預約諮詢</n-link>
            <!-- <button type="button" class="btn btn-primary">預約諮詢</button> -->
            <li  v-for=" (i,k) in right" class="nav-item" >
              <n-link :to="i.link" class="nav-link" >{{i.title}}</n-link>
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
        { title: '優勢特色' , link:'/home' } ,
        { title: '系統簡介' , link:'/introduction' } ,
        { title: '計畫費用' , link:'/cost' } ,
        { title: '常見問題' , link:'/question' } ,
      ],
      right: [
        { title: '開通帳號' , link:'/registered' } ,
        { title: '登入' , link:'/login' } ,
      ],
     }
  }
}
</script>
<style scoped>
  a.nav-link.actived {
    color:red;
  }
</style>>

</style>