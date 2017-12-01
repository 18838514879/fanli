<template>
  <div class="account">
    <header class="public_header">
        <span>授权</span>
        <router-link to="##"><img src="/static/images/go_back.png" class="left" alt=""></router-link>
        <router-link to="##"><img src="../../static/images/ershiwu/xunhuan.png" class="right" alt=""></router-link>
    </header>
    <div class="taobao">
        <!-- <div> -->
            <img src="../../static/images/ershiwu/taobao.png" alt=""><span>淘宝网</span>
        <!-- </div> -->
    </div>
    <div class="l_sub">
      <div class="l_sub_phone">
        <img src="/static/images/phone.png" alt="">
        <input type="text" placeholder="输入淘宝账户">
      </div>
      <div class="l_sub_pass">
        <img src="/static/images/pass.png" alt="">
        <input type="password" placeholder="输入密码">
      </div>
    </div>
    <div class="l_btn">授权并登录</div>
    <div class="l_other">
      <router-link to="/regist"><span>免费注册</span></router-link>
      <router-link to="/forgotPassword"><i>忘记密码</i></router-link>
    </div>
    <div class="allowaction">
        <div class="all_title">允许返利商城进行中以下操作</div>
        <div class="all_account"><img src="../../static/images/ershiwu/gou.png" alt="">读取你的账户名等基本信息</div>
        <div class="all_status"><img src="../../static/images/ershiwu/gou.png" alt="">读取你的登录状态信息</div>
    </div>
    <div class="lookall">
        <img src="../../static/images/ershiwu/sanjiaojiantou.png" alt=""><span>查看全部</span>
    </div>
    <div class="declare">授权后表示你已同意  <span>授权协议</span></div>
  </div>
</template>

<script>
export default {
//   name: 'accountSetting',
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
.account{
    font-size:0.24rem;
    .public_header{
      background: #333333;
      color: #dfc289;
      .right{
        float: right;
        display: block;
        width: 0.4rem;
        // position: absolute;
        right: 0.25rem;
        top: 0.26rem;
     }
    }
    .taobao{
        margin-top:0.88rem;
        margin-left:0.78rem;
        padding-top:0.46rem;
        height: 0.86rem;
        line-height: 0.86rem;
        img{
            width:0.86rem;
            height: 0.86rem;
        }
        span{
           vertical-align: middle;
           font-size: 0.34rem;
           font-weight: bold; 
        }
    }
   .l_sub{
      width: 6rem;
      margin: 0 auto;
      padding-top: 0.35rem;
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
    }
    .l_btn{
      width: 6rem;
      height: 0.9rem;
      line-height: 0.9rem;
      margin: 0 auto;
      margin-top: 1rem;
      text-align: center;
      font-size: 0.3rem;
      color: #fff;
      background: #dfc289;
      border-radius: 25px;
      -moz-border-radius: 25px;
      -webkit-border-radius: 25px;
    }
    .l_other{
      width: 6rem;
      margin: 0 auto;
      overflow: hidden;
      margin-top: 0.24rem;
      a{
        font-size: 0.28rem;
        color: #333333;
        span{
          float: left;
        }
        i{
          float: right;
        }
      }
    } 
    .allowaction{
         margin-left:0.78rem;
        .all_title{
            margin-top:1.11rem;
            font-size:0.28rem
        }
        .all_account,.all_status{
            font-size:0.24rem;
            color:#666;
            img{
                display:inline-block;
                margin-right:0.14rem;
            }
        }
         .all_account{
            margin-top:0.4rem;
        }
        .all_status{
            margin-top:0.32rem;
        }

    }
    .lookall{
        text-align: center;
        width:100%;
        height: 0.9rem;
        margin-top:0.5rem;
        line-height: 0.9rem;
        font-size:0.28rem;
        border-top:1px solid #666;
        color:#4d4d4d;
        img{
            width:0.35rem;
            height: 0.2rem;
            transform: rotate(90deg)
        }
    }
    .declare{
        margin-left:0.76rem;
        color:#666;
        span{
            color:#dfc289;
        }
    }

}
 
</style>
