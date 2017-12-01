<template>
  <div class="option">
    <header class="public_header">
      <span>我的订单</span>
      <router-link to="/myAccount"><img src="/static/images/go_back.png" alt=""></router-link>
    </header>
    <div  class="ordersuccess">
      <div class="prompting">
         <img src="../../static/images/ershiwu/orderSuccess.png" alt=""><span>订单成功</span>
      </div>
      <div class="shipping">商家正在努力发货，&nbsp<span> 请耐心等待！</span>
        </div>
   </div>
    <div class="area">
        <ul>
            <li>商品名称 <span>土豆<div class="blank"></div><img src="../../static/images/ershiwu/triangle.png" alt=""></span></li>
            <li>收货人<span>张三   15201133876</span></li>
            <li>收货地址<span>北京市朝阳区</span></li>
            <li>订单时间<span>2017-1-24  21:12:12</span></li>
        </ul>
    </div>
    <div class="go">去超返去逛逛</div>
  </div>
</template>


<script>
export default {
  name: 'order',
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
  .option{
      font-size:0.3rem;
      width: 100%;
      .public_header{
        background: #333333;
        color: #dfc289;
    }
    .ordersuccess{
      text-align: center;
      margin-top:0.88rem;
      padding-top:0.9rem;
      .prompting{
          width:100%;
          height: 0.6rem;
          display: flex;
          justify-content: center;
          align-items: center;
          span{
              font-size:0.59rem;
              color:#249b23;
          }
          img{
              width:0.6rem;
              height: 0.6rem;
              margin-right:0.3rem;
          }
      }
       .shipping{
         margin-top:0.34rem;
         color:#666;
         font-size:0.28rem;
       }
    }
    .area{
        margin:0.88rem 0.24rem 0 0.27rem;
        ul li{
            height: 0.9rem;
            line-height: 0.9rem;
            border-bottom: 1px solid #dfc289;
            span{
                float: right;
                color:#666;
            }
            img{
              width:0.28rem;
            }
            .blank{
              display: inline-block;
              width:0.28rem;
            }
        }
    }
    .go{
      width:5.66rem;
      height: 0.84rem;
      background-color:#e93b3a;
      margin:0.82rem auto;
      text-align: center;
      line-height: 0.84rem;
      color:#fff;
      border-radius: 2px;
    }
  }
</style>

