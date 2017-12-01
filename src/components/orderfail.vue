<template>
  <div class="option">
    <header class="public_header">
      <span>支付失败</span>
      <router-link to="/myAccount"><img src="/static/images/go_back.png" alt=""></router-link>
    </header>
    <div  class="orderfail">
      <div class="prompting">
         <img src="../../static/images/ershiwu/orderfail.png" alt=""><span>订单失败</span>
      </div>
      <div class="shipping">商家正在努力发货，&nbsp<span> 请耐心等待！</span>
        </div>
   </div>
    <div class="area">
        <div class="food">
           <img src="../../static/images/ershiwu/food.png" alt="">
        </div>
        <div class="describe">
          <div>乐事薯片180g</div>
          <div>2017-10-24  21:12:12</div>
        </div>
        <div class="price">￥  40</div>
    </div>
    <div class="go">去超返去逛逛</div>
  </div>
</template>


<script>
export default {
  name: 'orderfail',
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
    .orderfail{
      text-align: center;
      margin-top:0.88rem;
      padding-top:0.9rem;
      height: 2rem;
      background-color: #fff;
      .prompting{
          width:100%;
          height: 0.6rem;
          display: flex;
          justify-content: center;
          align-items: center;
          span{
              font-size:0.59rem;
              color:#e93b3a;
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
      height: 1.5rem;
      display: flex;
      align-items: center;
      background-color: #fff;
      margin-top:0.1rem;
      .food{
        padding-left:0.44rem;
        img{
          width:1.96rem;
          height:1.24rem;
        }
      }
      .describe{
        margin-left:0.25rem;
        div:nth-child(1){
          font-size:0.32rem;
          margin-bottom: 0.3rem;
        }
         div:nth-child(2){
          font-size:0.2rem;
          color:#666;
        }
      }
      .price{
        margin-left:1.45rem;
        color:#fe6971;
        font-size:0.4394rem;
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

