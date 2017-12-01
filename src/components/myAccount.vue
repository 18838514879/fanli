/** 
*created by hzf
*20171110
*/
<template>
  <div class="myAccount">
    <div class="main_top">
      <header class="header">
        <span>我的账户</span>
      </header>
      <div class="my_msg">
        <div class="msg_lft">
          <img src="/static/images/my_logo.jpg" alt="">
        </div>
        <div class="msg_rgt">
          <p>昵称：{{this.name}}</p>
          <div>
            可提现：<span>80.09</span><i> 元</i>
          </div>
        </div>
      </div>
    </div>
    <div class="main_mid">
      <div>
        <span>90</span>
        <i>累计返利（元）</i>
        <a></a>
      </div>
      <div>
        <span>90</span>
        <i>正在返利（元）</i>
      </div>
    </div>
    <ul class="main_btm">
      <li>
        <router-link to="/rebateInformation">
          <img src="/static/images/account01.png" alt="">
          <span>返利信息</span>
          <i>&gt;</i>
        </router-link>
      </li>
      <li>
        <router-link to="/myMessage">
          <img src="/static/images/account02.png" alt="">
          <span>我的消息</span>
          <i>&gt;</i>
        </router-link>
      </li>
      <li>
        <router-link to="/opinionFeedback">
          <img src="/static/images/account03.png" alt="">
          <span>意见与反馈</span>
          <i>&gt;</i>
        </router-link>
      </li>
      <li>
        <router-link to="/commonProblem">
          <img src="/static/images/account04.png" alt="">
          <span>常见问题</span>
          <i>&gt;</i>
        </router-link>
      </li>
      <li>
        <router-link to="/accountSetting">
          <img src="/static/images/account05.png" alt="">
          <span>账户设置</span>
          <i>&gt;</i>
        </router-link>
      </li>
      <li>
        <router-link to="/myOrder">
          <img src="/static/images/account06.png" alt="">
          <span>我的订单</span>
          <i>&gt;</i>
        </router-link>
      </li>
      <li>
        <router-link to="/coupons">
          <img src="/static/images/account07.png" alt="">
          <span>我的优惠券</span>
          <i>&gt;</i>
        </router-link>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'myAccount',
  data () {
    return {
        name:'',
        id:'',
    }
  },
  mounted: function getUser() {
          //获取用户信息
          this.$ajax.post(this.$baseurl+'/qt/user/getUserAccountById.htm?id='+sessionStorage['id']+'')
              .then((response) => {
                  console.log(response)
                  this.name=response.data.data.userName;
                  if(response.data.code==1){

                  }else{
                      console.log("获取用户信息失败")
                  }
              })
              .catch((response) => {
                  alert(response.data);
              })
  },
  methods: {
     getuser() {
          //获取用户信息
          this.$ajax.post(this.$baseurl+'/qt/user/getUserAccountById.htm?id='+sessionStorage['id']+'')
              .then((response) => {
                  console.log(response)
                  if(response.data.code==1){

                  }else{
                      console.log("获取用户信息失败")
                  }
              })
              .catch((response) => {
                  alert(response.data);
              })
      }
  }
}
</script>

<style lang="scss" scoped>
  .myAccount{
    width: 100%;
    padding-bottom: 1.3rem;
    .main_top{
      width: 100%;
      height: 3.14rem;
      background: url("/static/images/myAccount_bg.jpg") 0 0 no-repeat;
      background-size: 100% 100%;
      border-bottom: 1px solid #333333;
      .header{
        width: 100%;
        max-width: 7.5rem;
        margin: 0 auto;
        height: 0.88rem;
        line-height: 0.88rem;
        text-align: center;
        font-size: 0.32rem;
        color: #dfc289;
      }
      .my_msg{
        width: 100%;
        overflow: hidden;
        padding: 0.43rem 0;
        .msg_lft{
          float: left;
          width: 1.4rem;
          height: 1.4rem;
          margin: 0 0.24rem;
          border-radius: 50%;
          -moz-border-radius: 50%;
          -webkit-border-radius: 50%;
          overflow: hidden;
          img{
            display: block;
            width: 100%;
            height: 100%;
          }
        }
        .msg_rgt{
          float: left;
          p{
            display: block;
            font-size: 0.28rem;
            color: white;
            margin-top: 0.1rem;
          }
          div{
            font-size: 0.24rem;
            color: white;
            margin-top: 0.2rem;
            span{
              font-size: 0.48rem;
              color: #ceb480;
            }
            i{
              font-size: 0.24rem;
              color: #ceb480;
            }
          }
        }
      }
    }
    .main_mid{
      width: 100%;
      overflow: hidden;
      padding: 0.25rem 0;
      background: black;
      div{
        width: 50%;
        float: left;
        position: relative;
        span{
          display: block;
          text-align: center;
          font-size: 0.48rem;
          color: #ceb480;
        }
        i{
          display: block;
          text-align: center;
          font-size: 0.24rem;
          color: white;
        }
        a{
          display: block;
          width: 1px;
          height: 0.96rem;
          background: white;
          position: absolute;
          right: 0;
          top: 0;
        }
      }
    }
    .main_btm{
      width: 100%;
      margin-top: 0.1rem;
      li{
        width: 100%;
        height: 0.88rem;
        line-height: 0.88rem;
        background: white;
        margin-bottom: 0.1rem;
        a{
          display: block;
          width: 100%;
          height: 100%;
          overflow: hidden;
          img{
            display: block;
            width: 0.28rem;
            float: left;
            margin: 0.28rem 0.24rem 0 0.24rem;
          }
          span{
            display: block;
            float: left;
            font-size: 0.32rem;
            color: #333333;
          }
          i{
            display: block;
            float: right;
            font-size: 0.4rem;
            color: #666666;
            margin-right: 0.24rem;
          }
        }
      }
    }
    .foot{
      width: 100%;
      max-width: 7.5rem;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      .foot_main{
        width: 100%;
        height: 1rem;
        background: white;
        overflow: hidden;
        li{
          width: 33.33%;
          height: 100%;
          float: left;
          img{
            display: block;
            height: 0.38rem;
            margin: 0 auto;
            margin-top: 0.15rem;
          }
          span{
            display: block;
            text-align: center;
            font-size: 0.2rem;
            color: #011d35;
            margin-top: 0.05rem;
          }
          .active{
            color: #dfc289;
          }
        }
      }
      .big_logo{
        width: 2.02rem;
        height: 1.26rem;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        background: url("/static/images/tab02_bg.png") 0 0 no-repeat;
        background-size: 100% 100%;
        img{
          display: block;
          width: 0.55rem;
          margin: 0 auto;
          margin-top: 0.2rem;
        }
        span{
          display: block;
          width: 100%;
          text-align: center;
          font-size: 0.2rem;
          color: white;
          margin-top: 0.05rem;
        }
      }
    }
  }
</style>

