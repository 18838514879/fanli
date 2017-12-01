<template>
  <div class="regist">
    <header class="public_header">
      <span>注册</span>
      <img src="/static/images/go_back.png" alt="">
    </header>
    <div class="l_sub">
      <div class="l_sub_phone">
        <img src="/static/images/phone.png" alt="">
        <input type="text" v-model="phone_ipt" @input="iptChange"  maxlength="11" placeholder="输入手机号">
      </div>
      <div class="l_sub_pass">
        <img src="/static/images/pass.png" alt="">
        <input type="password" v-model="pass_ipt" maxlength="8" placeholder="输入密码">
      </div>
      <div class="l_sub_verifica">
        <img src="/static/images/yzm.png" alt="">
        <button @click="getcode" v-if="getmessage" id="getcode">获取</button>
        <input type="text" v-model="code_ipt" placeholder="输入验证码">
        <span id="start" v-if="send"></span>
      </div>
    </div>
    <div class="agree">
      <img src="/static/images/r_xuan.png" alt="">
      <span>我已经阅读并同意《返利商城》</span>
    </div>
    <div class="l_btn" @click="sub">下一步</div>
  </div>
</template>


<script>
export default {
  name: 'regist',
  data () {
    return {
      phone_ipt: '',
      pass_ipt: '',
      code_ipt: '',
      getmessage: true,
      send: false,
      validateCode:'',
      sessionId:''
    }
  },
  mounted:function () {
  },
  methods: {
      test1(){
          var content=document.getElementById("test1");
          var times=60;
          content.disabled=true
          var timer=setInterval(function () {
              times=times-1;
              content.innerHTML=times
              if(times===0){
                  clearInterval(timer);
                  content.innerHTML="再次获取"
                  content.disabled=false
                  times=60
              }
          },1000);
      },
    iptChange () {
      // alert("ss");
      this.phone_ipt.replace(/\D/g,'');
    },
    getcode () {
      if(this.phone_ipt == ''){
        alert("手机号不能为空");
        return;
      }
      var reg_phone=/^1[34578]\d{9}$/;
      if(!reg_phone.test(this.phone_ipt)){
        console.log('手机号格式错误');
        return;
      }
      if(this.pass_ipt == ''){
        alert("密码不能为空");
        return;
      }
      var reg_pass=/^[0-9a-zA-Z]{8}$/
      if(!reg_pass.test(this.pass_ipt)){
        console.log('密码格式错误');
        return;
      }
      
      //发送短信
      this.$ajax.post(this.$baseurl+'/qt/user/sendSms.htm?phone='+this.phone_ipt+'')
      //this.$ajax.post('http://192.168.1.26:8194/qt/user/sendSms.htm?phone='+this.phone_ipt+'')
      .then((response) => {
        //console.log(response);
        this.sessionId = response.data.sessionId;
        console.log(response)
        if(response.data.code==1){
            alert("验证码已发送")
            var content=document.getElementById("getcode");
            content.disabled=true;
            var times=60;
            var timer=setInterval(function () {
                times=times-1;
                content.innerHTML=times
                if(times===0){
                    clearInterval(timer);
                    content.innerHTML="再次获取"
                    times=60;
                    content.disabled=false;
                }
            },1000);

        }else{
            alert("验证码发送失败，请稍后再试")
        }
      })
      .catch((response) => { 
        alert(response.data.msg);
      })
    },
    sub () {
      if(this.phone_ipt == ''){
        alert("手机号不能为空");
        return;
      }
      var reg_phone=/^1[34578]\d{9}$/;
      if(!reg_phone.test(this.phone_ipt)){
        console.log('手机号格式错误');
        return;
      }
      if(this.pass_ipt == ''){
        alert("密码不能为空");
        return;
      }
      var reg_pass=/^[0-9a-zA-Z]{8}$/
      if(!reg_pass.test(this.pass_ipt)){
        console.log('密码格式错误');
        return;
      }
      if(this.code_ipt == ''){
        alert("验证码不能为空");
        return;
      }
      // 后台
      this.$ajax.post(this.$baseurl+'/qt/user/saveUser.htm?userPhone='+this.phone_ipt+'&userPass='+this.pass_ipt+'&code='+this.code_ipt+'')
      // 测试
      //this.$ajax.post('http://192.168.1.26:8194/qt/user/saveUser.htm?userPhone='+this.phone_ipt+'&userPass='+this.pass_ipt+'&code='+this.code_ipt+'')
      .then((response) => {
        response.data.code===1?this.$router.push('/login'):this.$router.push('/regist');
      })
      .catch((response) => {
        console.log(response)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .regist{
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
        #getcode{
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
    .agree{
      width: 6rem;
      margin: 0 auto;
      margin-top: 0.4rem;
      overflow: hidden;
      img{
        display: block;
        width: 0.29rem;
        float: left;
        margin-top: 0.05rem;
      }
      span{
        float: left;
        font-size: 0.24rem;
        color: #333333;
        margin-left: 0.1rem;
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
  }
</style>

