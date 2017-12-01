<template>
  <div class="problem">
    <header class="public_header">
      <span>账号设置</span>
      <router-link to="/myAccount"><img src="/static/images/go_back.png" alt=""></router-link>
    </header>
    <ul class="main">
      <li>
        <router-link to="/modifyPassword">
          <span>修改密码</span>
          <i>&gt;</i>
        </router-link>
      </li>
      <li>
        <router-link to="##">
          <span>交易密码</span>
          <i>&gt;</i>
        </router-link>
      </li>
      <li>
        <router-link to="/realName">
          <span>实名认证</span>
          <i>&gt;</i>
        </router-link>
      </li>
      <li>
        <router-link to="/personalInformation">
          <span>个人信息</span>
          <i>&gt;</i>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'accountSetting',
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
  .problem{
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
