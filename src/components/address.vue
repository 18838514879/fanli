<template>
  <div class="address">
    <header class="public_header">
      <span>编辑地址</span>
      <router-link to="##"><img src="/static/images/go_back.png" alt=""></router-link>
    </header>
    <div class="main">
      <ul class="main_list">
        <li>
          <div class="choice">
            <img :src="src" alt="">
          </div>
          <div class="address_mid">
            <p class="my_msg">
              <span>宫明</span>
              <i>13511099918</i>
            </p>
            <em>北京市北京市北京市昌平区郝庄家园西区4-2-602</em>
          </div>
          <div class="address_rgt">
            <div class="edit">
              <img class="modify" src="../../static/images/edit.png" alt="">
              <img src="../../static/images/close.png" alt="">
            </div>
            <span>设为默认</span>
          </div>
        </li>
      </ul>
    </div>
    <button id="btn">新增地址</button>
  </div>
</template>


<script>
export default {
  name: 'address',
  data () {
    return {
      src: '../../static/images/no_choice.png'
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>


<style lang="scss" scoped>
  .address{
    width: 100%;
    .public_header{
      background: #333333;
      color: #dfc289;
    }
    .main{
      width: 100%;
      margin-top: 0.88rem;
      .main_list{
        width: 100%;
        li{
          width: 100%;
          height: 1.75rem;
          background: white;
          overflow: hidden;
        }
      }
    }
    .choice{
      width: 1rem;
      height: 100%;
      float: left;
      img{
        display: block;
        width: 0.39rem;
        margin: 0 auto;
        margin-top: 0.68rem;
      }
    }
    .address_mid{
      width: 5rem;
      float: left;
      padding: 0.45rem 0;
      .my_msg{
        width: 100%;
        font-size: 0.28rem;
        color: #333333;
        span{
          margin-right: 0.5rem;
        }
      }
      em{
        display: block;
        width: 100%;
        margin-top: 0.1rem;
        font-size: 0.28rem;
        color: #666666;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .address_rgt{
      float: right;
    }
  }
  #btn{
    height: 1.0rem;
    line-height: 1.0rem;
    width: 100%;
    background-color: #EA3A3A;
    color: #F6E7E0;
    position: fixed;
    bottom: 0;
  }
  .address_rgt{
    z-index: 100;

  }
</style>

