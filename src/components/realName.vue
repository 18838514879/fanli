<template>
  <div class="real_name">
    <header class="public_header">
      <span>实名认证</span>
      <router-link to="/accountSetting">
        <img src="/static/images/go_back.png" alt="">
      </router-link>
    </header>
    <div class="l_sub">
      <div class="l_sub_phone">
        <img src="../../static/images/rl_sfz.png" alt="">
        <input v-model="userIdNumber" type="text" placeholder="请输入身份证号码">
      </div>
      <div class="l_sub_pass">
        <img src="../../static/images/rl_xm.png" alt="">
        <input v-model="userRealName" type="text" placeholder="请录入真实姓名">
      </div>
    </div>
    <p class="tip">注：如果你无法简洁的表达你的想法，那只说明你还不够了解它</p>
    <div class="l_btn" v-on:click="popup">提交</div>
    <div class="mask" v-show="popupShow==true"></div>
    <div class="popup" v-show="popupShow==true">
      <span>验证信息</span>
      <p>您输入的信息，我们会尽快审核</p>
      <div>
        <i v-on:click="cancel">取消</i>
        <router-link to="/accountSetting">确定</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'realName',
  data () {
    return {
        popupShow: false,
        userIdNumber:'',
        userRealName:''
    }
  },
  mounted:function () {
  },
  methods: {
    popup: function () {
      this.popupShow=true;
      this.$ajax.post(this.$baseurl+'/qt/user/updateUser.htm?id='+sessionStorage['id']+'&userIdNumber='+this.userIdNumber+'&userRealName='+this.userRealName+'')
      // 实名认证
          .then((response) => {
              console.log(response);
          })
          .catch((response) => {
              console.log(response.data.msg)
          })
    },
    cancel: function () {
      this.popupShow=false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .real_name{
    width: 100%;
    .public_header{
      background: #333333;
      color: #dfc289;
    }
    .l_sub{
      width: 6rem;
      margin: 0 auto;
      margin-top: 1.58rem;
      div{
        width: 100%;
        height: 0.8rem;
        line-height: 0.8rem;
        margin-top: 0.45rem;
        overflow: hidden;
        border-bottom: 1px solid #cfcfcf;
        img{
          display: block;
          width: 0.37rem;
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
    .tip{
      width: 6rem;
      margin: 0 auto;
      font-size: 0.26rem;
      color: #666666;
      line-height: 0.45rem;
      margin-top: 0.36rem;
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
    .mask{
      width: 100%;
      height: 100%;
      background: black;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 0.5;
      filter:Alpha(opacity=50);
      z-index: 100;
    }
    .popup{
      width: 4.8rem;
      height: 3.85rem;
      background: white;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      z-index: 100;
      border-radius: 5px;
      -moz-border-radius: 5px;
      -webkit-border-radius: 5px;
      span{
        display: block;
        width: 4.15rem;
        margin: 0 auto;
        font-size: 0.35rem;
        color: #333333;
        margin-top: 0.4rem;
      }
      p{
        display: block;
        width: 4.15rem;
        margin: 0 auto;
        font-size: 0.26rem;
        color: #333333;
        margin-top: 0.3rem;
      }
      div{
        width: 4.15rem;
        margin: 0 auto;
        overflow: hidden;
        margin-top: 0.7rem;
        i{
          display: block;
          width: 1.9rem;
          height: 0.9rem;
          line-height: 0.9rem;
          text-align: center;
          font-size: 0.35rem;
          color: white;
          float: left;
          background: #dfc289;
          border-radius: 5px;
          -moz-border-radius: 5px;
          -webkit-border-radius: 5px;
        }
        a{
          display: block;
          width: 1.9rem;
          height: 0.9rem;
          line-height: 0.9rem;
          text-align: center;
          font-size: 0.35rem;
          color: white;
          float: right;
          background: #dfc289;
          border-radius: 5px;
          -moz-border-radius: 5px;
          -webkit-border-radius: 5px;
        }
      }
    }
  }
</style>
