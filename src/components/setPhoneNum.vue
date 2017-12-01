<template>
  <div class="setPhoneNum">
    <header class="public_header">
      <span>设置手机号</span>
      <router-link to="/personalInformation"><img src="/static/images/go_back.png" alt=""></router-link>
    </header>
    <div class="l_sub">
      <div class="l_sub_phone">
        <img src="/static/images/phone.png" alt="">
        <input v-model="phone_ipt" type="text" placeholder="输入手机号">
      </div>
      <div class="l_sub_verifica">
        <img src="/static/images/yzm.png" alt="">
        <button id="getcode" @click="getCode()">获取</button>
        <input v-model="this.code" type="text" placeholder="输入验证码">
      </div>
    </div>
    <div class="l_btn" @click="setPhone()">确定</div>
  </div>
</template>


<script>
export default {
  name: 'setPhoneNum',
  data () {
    return {
        phone_ipt:'',
        code:''
    }
  },
  mounted:function () {
  },
  methods: {
      getCode(){
          //发送短信
          this.$ajax.post(this.$baseurl+'/qt/user/sendSms.htm?phone='+this.phone_ipt+'')
              .then((response) => {
                  //console.log(response)
                  if(response.data.code==1){
                      console.log("验证码已发送")
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
                  alert(response);
              })
      },
      setPhone(){
          this.$ajax.post(this.$baseurl+'/qt/user/updateUser.htm?id='+sessionStorage['id']+'&userPhone='+this.phone_ipt+'&code='+this.code+'')
              .then((response) => {
                  console.log(response);
                  if(response.data.code===1){
                      console.log("修改成功");
                      this.$router.push('/login')
                  }
              })
              .catch((response) => {
                  console.log(response)
              })
      }
  }
}
</script>

<style lang="scss" scoped>
  .setPhoneNum{
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
        button{
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
      font-size: 0.3rem;
      color: #fff;
      background: #dfc289;
      border-radius: 25px;
      -moz-border-radius: 25px;
      -webkit-border-radius: 25px;
    }
  }
</style>

