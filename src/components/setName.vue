<template>
  <div class="portrait">
    <header class="public_header">
      <span>设置名字</span>
      <router-link to="/personalInformation"><img src="/static/images/go_back.png" alt=""></router-link>
    </header>
    <div class="main">
      <div class="setName">
        <input v-model="userName" type="text" placeholder="请输入昵称">
        <img src="../../static/images/qingchu.png" alt="">
      </div>
      <div class="btn" @click="setName()">确定</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'setName',
  data () {
    return {
        userName:''
    }
  },
  mounted: function () {
  },
  methods: {
      setName(){
          this.$ajax.post(this.$baseurl+'/qt/user/updateUser.htm?id='+sessionStorage['id']+'&userName='+this.userName+'')
          // 设置姓名
              .then((response) => {
//                  console.log(response);
                  if(response.data.code===1){
                      console.log("修改成功");
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
  .portrait{
    width: 100%;
    .public_header{
      background: #333333;
      color: #dfc289;
    }
    .main{
      width: 100%;
      margin-top: 1.18rem;
    }
    .setName{
      width: 100%;
      height: 0.9rem;
      line-height: 0.9rem;
      background: white;
      overflow: hidden;
      border-top: 1px solid #e3e3e3;
      border-bottom: 1px solid #e3e3e3;
      input{
        display: block;
        width: 6.85rem;
        height: 100%;
        outline: none;
        border: 0;
        text-indent: 0.24rem;
        float: left;
      }
      img{
        display: block;
        width: 0.39rem;
        float: left;
        margin-top: 0.26rem;
      }
    }
    .btn{
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

