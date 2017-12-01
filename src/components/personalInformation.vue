<template>
  <div class="personal">
    <header class="public_header">
      <span>个人信息</span>
      <router-link to="/accountSetting"><img src="/static/images/go_back.png" alt=""></router-link>
    </header>
    <ul class="main">
      <li>
        <router-link to="/portrait">
          <span>头像</span>
          <i>&gt;</i>
        </router-link>
      </li>
      <li>
        <router-link to="/setName">
          <span>名字</span>
          <i>&gt;</i>
        </router-link>
      </li>
      <li>
        <router-link to="/setPhoneNum">
          <span>手机号</span>
          <i>&gt;</i>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'personalInformation',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .personal{
    width: 100%;
    .public_header{
      background: #333333;
      color: #dfc289;
    }
    .main{
      width: 100%;
      margin-top: 1.13rem;
      border-top: 1px solid #e3e3e3;
      li{
        width: 100%;
        height: 0.9rem;
        background: white;
        border-bottom: 1px solid #e3e3e3;
        a{
          display: block;
          width: 100%;
          height: 100%;
          line-height: 0.9rem;
          overflow: hidden;
          span{
            float: left;
            font-size: 0.28rem;
            color: #333333;
            margin-left: 0.25rem;
          }
          i{
            float: right;
            font-size: 0.4rem;
            color: #666666;
            margin-right: 0.25rem;
          }
        }
      }
    }
  }
</style>
