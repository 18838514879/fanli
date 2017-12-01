<template>
  <div class="index">
    <router-view></router-view>
    <footer class="foot">
      <ul class="foot_main">
        <li>
          <router-link to="/index/rebate">
            <img src="/static/images/tab01.png" alt="">
            <span class="active">全返区</span>
          </router-link>
        </li>
        <li></li>
        <li>
          <router-link to="/index/myAccount">
          <img src="/static/images/tab03.png" alt="">
          <span>我的</span>
          </router-link>
        </li>
      </ul>
      <div class="big_logo">
        <router-link to="/index/RebateSuper">
          <img src="/static/images/tab02.png" alt="">
          <span>超返区</span>
        </router-link>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
    }
  },
  mounted:function () {
  },
  methods: {
      },
}
</script>

<style lang="scss" scoped>
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
</style>

