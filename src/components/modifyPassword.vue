<template>
  <div class="modifiy">
    <header class="public_header">
      <span>修改密码</span>
      <img src="/static/images/go_back.png" alt="">
    </header>
    <div class="l_sub">
      <div class="l_sub_phone">
        <img src="/static/images/yzm.png" alt="">
        <input v-model="oldPass" type="text" placeholder="旧密码">
      </div>
      <div class="l_sub_pass">
        <img src="/static/images/new_pass.png" alt="">
        <input type="password" v-model="userPass" placeholder="新密码">
      </div>
      <div>
        <img src="/static/images/qr_pass.png" alt="">
        <input type="password" placeholder="确认密码">
      </div>
    </div>
    <div class="l_btn" @click="updatePWD()">提交</div>
  </div>
</template>


<script>
export default {
  name: 'modifiyPassword',
  data () {
    return {
        userPass:'',
        oldPass:''
    }
  },
  mounted:function () {
  },
  methods: {
      updatePWD(){
          //修改密码
          this.$ajax.post(this.$baseurl+'/qt/user/updateUser.htm?id='+sessionStorage['id']+'&userPass='+this.userPass+'&oldPass='+this.oldPass+'')
              .then((response) => {
//                  console.log(response)
                  if(response.data.code===1){
                      console.log("修改成功")
                  }else{
                      console.log("修改失败")
                  }
              })
              .catch((response) => {
                  alert(response);
              })
      }
  }
}
</script>

<style lang="scss" scoped>
  .modifiy{
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
      font-size: 0.3rem;
      color: #fff;
      background: #dfc289;
      border-radius: 25px;
      -moz-border-radius: 25px;
      -webkit-border-radius: 25px;
    }
  }
</style>

