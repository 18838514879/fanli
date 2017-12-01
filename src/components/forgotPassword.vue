<template>
  <div class="forgotPassword">
    <header class="public_header">
      <span>忘记密码</span>
      <img src="/static/images/go_back.png" alt="">
    </header>
    <div class="l_sub">
      <div class="l_sub_phone">
        <img src="/static/images/phone.png" alt="">
        <input type="text" placeholder="输入手机号">
      </div>
      <div class="l_sub_verifica">
        <img src="/static/images/yzm.png" alt="">
        <span>获取</span>
        <input type="password" placeholder="输入验证码">
      </div>
    </div>
    <div class="l_btn"><router-link to="/modifyPassword">下一步</router-link></div>
  </div>
</template>


<script>
export default {
  name: 'forgotPassword',
  data () {
    return {
    }
  },
  mounted:function () {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .forgotPassword{
    width: 100%;
    .public_header{
      background: #333333;
      color: #dfc289;
    }
    .l_sub{
      width: 6rem;
      margin: 0 auto;
      padding-top: 1.13rem;
      div{
        width: 100%;
        height: 0.8rem;
        line-height: 0.8rem;
        margin-top: 0.45rem;
        overflow: hidden;
        border-bottom: 1px solid #cfcfcf;
        img{
          display: block;
          width: 0.27rem;
          height: 0.38rem;
          float: left;
          margin-top: 0.21rem;
          margin-left: 0.2rem;
        }
        input{
          display: block;
          width: 5rem;
          height: 100%;
          outline: none;
          border: 0;
          font-size: 0.3rem;
          float: right;
          background: #f8f8f8;
        }
        input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
          color: #b3b3b3;
        }
      　input:-moz-placeholder, textarea:-moz-placeholder {
          color:#b3b3b3;
        }
      　input::-moz-placeholder, textarea::-moz-placeholder {
          color:#b3b3b3;
        }
      　input:-ms-input-placeholder, textarea:-ms-input-placeholder {
          color:#b3b3b3;
        }
      }
      .l_sub_verifica{
        span{
          display: block;
          width: 1.7rem;
          height: 0.7rem;
          line-height: 0.7rem;
          font-size: 0.3rem;
          color: white;
          text-align: center;
          float: right;
          background: #dfc289;
          border-radius: 25px;
          -moz-border-radius: 25px;
          -webkit-border-radius: 25px;
        }
        input{
          width: 3.3rem;
          float: right;
        }
      }
    }
    .l_btn{
      width: 6rem;
      height: 0.9rem;
      line-height: 0.9rem;
      margin: 0 auto;
      margin-top: 1rem;
      text-align: center;
      background: #dfc289;
      border-radius: 25px;
      -moz-border-radius: 25px;
      -webkit-border-radius: 25px;
      a{
        display: block;
        width: 100%;
        height: 100%;
        font-size: 0.3rem;
        color: #fff;
      }
    }
  }
</style>

