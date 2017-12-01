<template>
  <div class="login">
    <header class="public_header">
      <span>登录</span>
      <img src="/static/images/go_back.png" alt="">
    </header>
    <img class="logo" src="/static/images/fl_logo.png" alt="">
    <div class="l_sub">
      <div class="l_sub_phone">
        <img src="/static/images/phone.png" alt="">
        <input type="text" v-model="phone_ipt" placeholder="输入手机号">
      </div>
      <div class="l_sub_pass">
        <img src="/static/images/pass.png" alt="">
        <input type="password" v-model="pass_ipt" placeholder="输入密码">
      </div>
    </div>
    <div class="l_btn" @click="login()">登录</div>
    <div class="l_other">
      <router-link to="/regist"><span>快速注册</span></router-link>
      <router-link to="/forgotPassword"><i>忘记密码</i></router-link>
    </div>
    <img src="/static/images/hezuo.png" alt="" class="hezuo">
    <ul class="hz_partner">
      <li>
        <img src="/static/images/weixin.png" alt="">
        <span>微信</span>
      </li>
      <li>
        <img src="/static/images/taobao.png" alt="">
        <span>淘宝</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
      return {
          phone_ipt: '',
          pass_ipt: '',
          code_ipt: '',
          getmessage: true,
          send: false,
          validateCode:'',
          sessionId:'',
          id:''
      }
  },
  mounted:function () {
  },
  methods: {
      login() {
          //登录
          this.$ajax.post(this.$baseurl+'/qt/user/getUserByPassPhone.htm?userPhone='+this.phone_ipt+'&userPass='+this.pass_ipt+'')
          //this.$ajax.post('http://192.168.1.26:8194/qt/user/sendSms.htm?phone='+this.phone_ipt+'')
              .then((response) => {
                  this.sessionId = response.data;
                  this.$Toast({
                      message: '成功',
                      iconClass: 'icon icon-success'
                  });
                  if(response.data.code===1){
                      this.id=response.data.userId;
                      sessionStorage.setItem('id',this.id);
                      this.$router.push({name:'myAccount',params:{userId:this.id}});
                  }else{
                      this.$Toast({
                          message: '失败',
//                          iconClass: 'icon icon-error'
                      });
                      console.log("登陆失败")
                  }
               })
              .catch((response) => {
                  alert(response);
              })
      }
  }
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .login{
    width: 100%;
    .public_header{
      background: #333333;
      color: #dfc289;
    }
    .logo{
      display: block;
      width: 1.01rem;
      margin: 0 auto;
      margin-top: 1.58rem;
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
    .hezuo{
      display: block;
      width: 6rem;
      margin: 0 auto;
      margin-top: 1.25rem;
    }
    .hz_partner{
      width: 6rem;
      margin: 0 auto;
      overflow: hidden;
      margin-top: 0.45rem;
      li{
        width: 50%;
        float: left;
        img{
          display: block;
          width: 1.41rem;
          margin: 0 auto;
        }
        span{
          display: block;
          width: 100%;
          text-align: center;
          font-size: 0.28rem;
          color: #333333;
          margin-top: 0.2rem;
        }
      }
    }
  }
</style>
